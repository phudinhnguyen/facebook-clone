import PaginationInfo from "@entities/paginationInfo";
import apiService from ".";
import ScheduleDetails from "@entities/scheduleDetails";


export default class ScheduleDetailsService {
    getListScheduleDetails: (scheduleID, pagination, search?, query?) => any;
    removeScheduleDetails: (scheduleDetailId, value) => any;
    constructor() {
        this.getListScheduleDetails = async (scheduleID, pagination, search?, query?) => {
            const path = `api/Cms/ScheduleDetails/BySchedule/${ scheduleID }?PageSize=${ pagination.pageSize }&PageNumber=${ pagination.current }&OrderByQuery=${ query || " " }&SearchContent=${ search || " " }`
            return await apiService.executeApi({
                path,
                showSuccess: false,
                showError: false,
                customRes: (res) => {
                    const { pagedData, pageInfo } = res?.data?.data;
                    return {
                        data: new ScheduleDetails().createListScheduleDetails(pagedData),
                        info: new PaginationInfo({
                            current: pageInfo.currentPage,
                            pageSize: pageInfo.pageSize,
                            total: pageInfo.totalCount,
                        })
                    }
                }
            })
        }

        this.removeScheduleDetails = async (scheduleDetailId, value) => {
            const data = {
                keyCode: [ value ]
            }

            var test = {
                path: `api/Cms/ScheduleDetails/BySchedule/${ scheduleDetailId }`,
                method: "delete",
                payload: {
                    keyCodes: data.keyCode
                }
            };
            return await apiService.executeApi({
                path: `api/Cms/ScheduleDetails/BySchedule/${ scheduleDetailId }`,
                method: "delete",
                payload: {
                    keyCodes: data.keyCode
                }
            })
        }

    }
}