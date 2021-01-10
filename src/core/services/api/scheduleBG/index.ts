import PaginationInfo from "@entities/paginationInfo";
import ScheduleBG from "@entities/scheduleBG";
import apiService from ".."
export default class ScheduleBGService {
    getListScheduleBG: (pagination: PaginationInfo, option?) => any;
    addScheduleBG: (value: ScheduleBG) => any;
    removeScheduleBG: (scheduleBackgroundId: ScheduleBG) => any;
    editBGSchedule: (value: ScheduleBG, id: ScheduleBG) => any;

    constructor() {
        this.getListScheduleBG = async (pagination: PaginationInfo, option?) => {
            const { search, query, scheduleBGtype } = option
            const path = `api/ScheduleBackground?ScheduleBackgroundType=${ scheduleBGtype }&PageSize=${ pagination.pageSize }&PageNumber=${ pagination.current }&OrderByQuery=${ query || "" }&SearchContent=${ search || "" }`
            return await apiService.executeApi({
                path,
                showError: false,
                showSuccess: false,
            })
        }
        this.addScheduleBG = async (value) => {
            return await apiService.executeApi({
                path: `api/ScheduleBackground`,
                method: "post",
                payload: value
            })
        }
        this.editBGSchedule = async (value, id) => {
            return await apiService.executeApi({
                path: `api/ScheduleBackground/${ id }`,
                payload: value,
                method: "put"
            })
        }
        this.removeScheduleBG = async (scheduleBackgroundId) => {
            return await apiService.executeApi({
                path: `api/ScheduleBackground/${ scheduleBackgroundId }`,
                method: "delete"
            })
        }
    }
}