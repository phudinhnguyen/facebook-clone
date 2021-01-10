import PaginationInfo from "@entities/paginationInfo";
import { apiServiceCRM } from ".";

class RatingService {
  getAllRatingPagination = async (
    info: PaginationInfo,
    option: { sorter; search: string }
  ) => {
    return await apiServiceCRM.executeApi({
      path: "/api/Rating",
      payload: {
        params: {
          PageSize: info.pageSize,
          PageNumber: info.current,
          OrderByQuery: `${option.sorter.sortField} ${
            option.sorter.sortOrder == "ascend" ? "asc" : "desc"
          }`,
          SearchContent: option.search || "",
        },
      },
      showSuccess: false,
      showError: false,
    });
  };

  getAllRating = async (
    info: PaginationInfo,
    option: { sorter: string; search: string }
  ) => {
    return await apiServiceCRM.executeApi({
      path: "/api/Rating",
      showSuccess: false,
      showError: false,
    });
  };
}

export default RatingService;
