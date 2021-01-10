import apiService from ".."
export default class KeyParametersService {
    getList: () => Promise<any>;
    constructor() {
        this.getList = async () => {
            const path = `api/Parameters/showDetailParameter/weather_condition`;
            return await apiService.executeApi({
                path,
                showError: false,
                showSuccess: false
            })
        }
    }
}