export const DASHBOARD_NAME = "Renters";
export const ICONS_SIZE = 25;
export const BASE_URL = "https://renter-api.ksbgarage.com";
export const ACCESS_TOKEN = "AccessToken";
export const TYPE = "Type";
export const PERMISSIONS = "permissions";
export const STORE_ID = "storeId";
export const AVATAR = "avatar";
export const ADMIN = "admin",
  STORE = "store",
  BRANCH = "branch",
  COMMON_ADMIN_STORE = "commonAdminStore",
  CACHE_TYPE = "no-store";
export const TYPES = [ADMIN, STORE, BRANCH];
export const ROUTES_TYPES = [ADMIN, STORE, BRANCH, COMMON_ADMIN_STORE];

export const PUSHERS_KEY = "ac27eff7ae7693f1b7ae",
  PUSHER_SECRET = "00d51e1026dce60151c2",
  PUSHER_CLUSTER = "eu";
export const ADMIN_DENIED_ROUTES = [];
export const STORE_DENIED_ROUTES = ["/admin", "/site"];
export const BRANCH_DENIED_ROUTES = [...STORE_DENIED_ROUTES, "/store/:path*"];

export const LOCALES = ["en", "ar"];

export const API_ENDPOINTS = {
  BLOGS: "/admin/blogs",
  SETTINGS: "/users/settings",
  OURTEAM: "/admin/our_team",
  SERVICES: "/api/admin/services",
  CATEGORIES: "/users/categories",
  ABOUT_US: "/admin/about_us",
  ADS: "/users/ads",
  PRODUCTS:"/client/products",
  CONTACT_US: "/admin/contact_us",
  PARTNERS: "/admin/partners",
  SIGNIN: "/auth/login/dashboard",
  SIGNOUT: "/auth/logout",
  PROFILE: "/auth/profile",
  ROLES: "/roles",
  PERMISSIONS_SELECT_MENU: "/select_menu/permissions",
  EMPLOYEE: "/admin/users",
  ROLES_SELECT_MENU: "/select_menu/roles",
  MENU_SECTION: "/stores/menu_sections",
  ADMIN_CHATS_MENU: "/support_chat/chats",
  ADMIN_CHAT_MESSAGES: "/support_chat/messages",
  PUSHER_AUTH: "https://rayed-api.ksbgarage.com/broadcasting/auth",
  PASSWORD: "auth/password/change_password",
};
export const SELECT_API_ENDPOINTS = {
  SECTIONS_MENU: "select_menu/sections",
};
export const STORE_API_ENDPOINTS = {
  ADDONS: "/addons",
  BRANCHES: "/admin/branches",
};
export const DASHBOARD_ENDPOINTS = {
  CUSTOMERS: "api/admin/external_users/clients",
  DELIVERY: "api/admin/external_users/deliveries",
  MENU_SECTIONS: "admin/menu_sections",
  EXTERAL_USER: "api/admin/external_users",
  STORE: "api/admin/external_users/stores",
};
