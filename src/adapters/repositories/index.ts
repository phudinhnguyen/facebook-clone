import { SERVICES } from "src/ui/shared/config/index";
import axios from "axios";
import notifiTranslate from "src/ui/shared/components/layout/NotifTranslate";

export interface IParamsApi {
  method?: "get" | "post" | "delete" | "put";
  path: string;
  payload?: { params?: any, data?: any }
  showSuccess?: boolean;
  showError?: boolean;
  config?: {
    isPrivate?: boolean;
    isFormData?: boolean;
  };
  customRes?: (res) => any;
}

class Service {
  private service: any;

  constructor(baseURL?) {
    let service = axios.create({
      baseURL: baseURL || SERVICES.API_URL_BASE,
    });
    this.service = service;
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

  private preparePrivateHeaderConfig() {
    const token = ''

    return {
      Authorization: `Bearer ${ token }`,
    };
  }

  private getDefaultConfig({ isPrivate, isFormData }: any = {}) {
    const config = {
      headers: {},
    };

    if (isPrivate) {
      const privateHeaderConfig = this.preparePrivateHeaderConfig();
      Object.assign(config.headers, privateHeaderConfig);
    }

    if (isFormData) {
      Object.assign(config.headers, {
        "Content-Type": "multipart/form-data",
      });
    }

    return config;
  }

  async executeApi({
    method = "get",
    path = "",
    showSuccess = true,
    showError = true,
    payload,
    config = {},
    customRes = (response) => response,
  }: IParamsApi) {
    let arg: any;
    const { isPrivate = true, isFormData = false } = config;

    if (payload) {
      arg = [ path, payload, this.getDefaultConfig({ isPrivate, isFormData }) ];
    } else {
      arg = [ path, this.getDefaultConfig({ isPrivate }) ];
    }

    return await this.service[ method ](...arg)
      .then((response) => this.handleSuccess({ data: customRes(response) }, showSuccess))
      .catch((error) => this.handleError(error, showError));
  }
}

export default new Service()

export const apiServiceCRM = new Service(SERVICES.CRM_URL_BASE)