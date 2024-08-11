/**
 * 用户数据处理相关函数
 *
 * 作者：济南晨霜信息技术有限公司
 * 公众号：晨霜信息
 * 邮箱：jncs@jinanchenshuang.com
 * 联系方式：18560000860 / 15275181688
 * 网址：https://www.jinanchenshuang.com
 * 地址：山东省济南市槐荫区绿地欢乐颂6号楼414室
 *
 * ----------------------------------------------------------------------------------------------------
 * - getApiTokenKey: 获取 API TOKEN 的名称
 * - getApiTokenStorageKey: 获取 API TOKEN 存储在本地的名称
 * - getUploadTokenKey: 获取 UPLOAD TOKEN 的名称
 * - getUploadTokenStorageKey: 获取 UPLOAD TOKEN 存储在本地的名称
 * - notLoggedInCallback: 用户登录状态失效后的下一步操作
 * ----------------------------------------------------------------------------------------------------
 */
import settings from "@/settings";
import { useUserStore } from "@/stores";

/**
 * @description 获取 API TOKEN 的名称
 * @returns {String} API TOKEN 的名称；
 */
export function getApiTokenKey() {
    return settings?.apiTokenKey ?? "token";
}

/**
 * @description 获取 API TOKEN 存储在本地的名称
 * @returns {String} API TOKEN 存储在本地的名称；
 */
export function getApiTokenStorageKey() {
    return settings?.apiTokenStorageKey ?? getApiTokenKey();
}

/**
 * @description 获取 UPLOAD TOKEN 的名称
 * @returns {String} UPLOAD TOKEN 的名称；
 */
export function getUploadTokenKey() {
    return settings?.apiTokenKey ?? "token";
}

/**
 * @description 获取 UPLOAD TOKEN 存储在本地的名称
 * @returns {String} UPLOAD TOKEN 存储在本地的名称；
 */
export function getUploadTokenStorageKey() {
    return settings?.apiTokenStorageKey ?? getApiTokenKey();
}

/**
 * @description 获取用户信息存储在本地的名称
 * @returns {String} 用户信息存储在本地的名称
 */
export function getUserInfoStorageKey() {
    return settings?.userInfoStorageKey ?? "userinfo";
}

/**
 * @description 用户登录状态失效后的下一步操作
 */
export function notLoggedInCallback() {
    // 先清空用户相关的数据
    const userStore = useUserStore();
    userStore.clear();

    // 设置一个标志，防止重复跳转
    if (uni.$notLoggedInCallbackFlag) return false;
    else uni.$notLoggedInCallbackFlag = true;

    // 提示用户登录失效
    uni.showToast({
        title: "未登录或登录失效，请重新登录！",
        icon: "none",
        mask: true
    });

    // 再跳转登录页面
    setTimeout(() => {
        uni.$csRouter.reLaunch({
            url: "/subPackages/auth/pages/login",
            success: () => {
                // 清除标志
                uni.$notLoggedInCallbackFlag = false;
            }
        });
    }, 2500);
}
