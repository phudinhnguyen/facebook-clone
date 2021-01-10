export let BASE_URL = document.head.querySelector<any>(
  "[property~=base_url][content]"
).content;

export const SERVICES = {
  API_URL_BASE: BASE_URL,
  CRM_URL_BASE: 'https://hdbank-crm-api.dev-altamedia.com',
  AuthenticationHeaderField: "JWT_TOKEN_HDBANK_CMS",
};

export const KAFKA = {
  DEFAULT_BROKER: 'kafka1:9092'
}

export const USA = "USA";
export const LANGUAGE = [ "USA", "VNM" ];
export const CURRENT_LANGUAGE = "__INIT__CURRENT_LANGUAGE__";

export const DASHBOARD = "/dashboard";
export const SCHEDULEBG = "/schedulebg"
export const LIST_PRODUCT = "/list-product";
export const MANAGER_ORDER = "/manager-order";
export const SCHEDULE_DETAILS = "/scheduleDetails/:scheduleId";
export const DETAI_MODULE = "/detail-module/:idCategory/:idModule";
export const DETAI_MODULE_PAGE =
  "/detail-module/:idCategory/:idModule/:pageCode";
export const PAGE = "/page";
export const PAGE_DETAIL = "/page/detail/:pageCode";
export const MEDIA_ASSET = "/media-asset";
