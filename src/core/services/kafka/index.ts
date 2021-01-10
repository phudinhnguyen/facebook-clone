import { async } from 'rxjs';

import { KAFKA } from '@config/index'
import { Kafka } from 'kafkajs'
import { clearToken, getToken } from '@api/auth';
import notifiTranslate from '@components/layout/NotifTranslate';

class KafkaService {
    producer
    consumer

    constructor(brokers?) {
        const kafka = new Kafka({
            clientId: 'my-app',
            brokers: brokers || [ KAFKA.DEFAULT_BROKER ]
        })
        this.producer = kafka.producer()
        this.consumer = kafka.consumer()
    }

    private preparePrivateHeaderConfig() {
        const token = getToken();

        return {
            Authorization: `Bearer ${ token }`,
        };
    }

    private getDefaultConfig({ isPrivate, isFormData }: any = {}) {
        const headers = {}

        if (isPrivate) {
            const privateHeaderConfig = this.preparePrivateHeaderConfig();
            Object.assign(headers, privateHeaderConfig);
        }

        return headers;
    }

    private handleSuccess(response, showSuccess) {
        if (showSuccess) {
            notifiTranslate({
                type: "success",
                translateKey: response?.data?.data?.message,
            })
        }
        return Promise.resolve(response.data);
    }

    private handleError(error, showError) {
        let status = error.response?.status;
        switch (status) {
            case 400: {
                if (showError) {
                    notifiTranslate({
                        type: "error",
                        translateKey: error?.response?.data?.message || "Something error",
                    })
                }
                break
            }
            case 401: {
                notifiTranslate({
                    type: "error",
                    translateKey: error?.response?.data?.message || "No permission",
                });
                clearToken();
                window.location.reload();
                window.location.href = `/#/login`;
                break;
            }
            case 500: {
                notifiTranslate({
                    type: "error",
                    translateKey: error?.response?.data?.message || "Server Error",
                });
                break;
            }
            default: {
                break;
            }
        }
        return Promise.reject(error);
    }

    async send({
        topic = '',
        messages = [],
        acks,
        timeout = 30000,
        compression,
        showSuccess = false,
        showError = false,
    }) {
        await this.producer.connect()
        const messageWithDefaultHeader = messages.map(item => {
            return {
                ...item,
                header: {
                    ...item.header,
                    ...this.getDefaultConfig({
                        isPrivate: item.isPrivate || true,
                    }),
                }
            }
        })
        await this.producer.send({
            topic: topic,
            messages: messageWithDefaultHeader,
            acks: acks,
            timeout: timeout,
            compression: compression,
        }).then(response => {
            this.handleSuccess(response, showSuccess)
        }).catch(error => {
            this.handleSuccess(error, showError)
        })
    }

    async subscribe({
        topic = '',
        showSuccess = false,
        showError = false,
    }) {
        await this.consumer.connect().then(response => {
            this.handleSuccess(response, showSuccess)
        }).catch(error => {
            this.handleSuccess(error, showError)
        })
        await this.consumer.subscribe({ topic })
    }
}

export default new KafkaService()