import apiService from "."

class ArticleService {
  getDetailArticle: (articleId) => any
  getArticleByCategory: (categoryId: string) => any
  getListLinkInternal: () => any
  addArticleByCategory: (article) => any
  editArticleByCategory: (article, articleId) => any
  getAllArticleByModuleTypeCode: (categoryCode: string) => Promise<any>
  removeArticle: (articleId) => any
  getTagByCategory: (categoryId: string) => any

  constructor() {
    this.getDetailArticle = async (articleId: string) => {
      return apiService.executeApi({
        path: `api/article/showDetailAritcle/${ articleId }`,
        showSuccess: false,
        showError: false,
      })
    }

    this.getListLinkInternal = async () => {
      return apiService.executeApi({
        path: `api/linkinternal/showAllLinkInternal`,
        showSuccess: false,
        showError: false,
      })
    }

    this.getArticleByCategory = async (categoryId: string) => {
      return apiService.executeApi({
        path: `api/article/showAllAritcleGroupByModuleTypeCode/${ categoryId }`,
        showSuccess: false,
        showError: false,
      })
    }

    this.removeArticle = async (articleId: string) => {
      return apiService.executeApi({
        path: `api/article/deleteAritcle/${ articleId }`,
        method: "delete",
      })
    }

    this.addArticleByCategory = async (article) => {
      return apiService.executeApi({
        path: `api/article/createArticelLanguage`,
        payload: article,
        method: "post",
      })
    }

    this.editArticleByCategory = async (article, articleId: string) => {
      return apiService.executeApi({
        path: `api/article/editAritcle/${ articleId }`,
        payload: article,
        method: "put",
      })
    }

    this.getAllArticleByModuleTypeCode = async (categoryCode: string) => {
      return apiService.executeApi({
        path: `/api/article/showAllAritcleGroupByModuleTypeCode/${ categoryCode }`,
        method: "get",
        showSuccess: false,
        showError: false,
      })
    }

    this.getTagByCategory = async (categoryCode: string) => {
      return apiService.executeApi({
        path: `/api/Article/Tag/${ categoryCode }`,
        showSuccess: false,
        showError: false,
      })
    }
  }
}

export default ArticleService
