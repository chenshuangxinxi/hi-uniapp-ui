/**
 * @descript URL 处理工具函数集
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 *
 * @list 函数列表
 * ========================================================================================================================
 * = isAbsoluteURL  = 校验 URL 是否是绝对 URL
 * = combineURLs    = 合并基准 URL 和相对 URL 成一个完整的 URL
 * = getUrlMainPart = 获取 URL 主要部分（问号之前的部分）
 * ========================================================================================================================
 */
import { isString } from "./string";

/**
 * 校验 URL 是否是绝对 URL
 * @description 如果 URL 以 “<scheme>：//” 或 “//”（协议相对URL）开头，则认为它是绝对的，RFC 3986 将方案名称定义为以字母开头的字符序列，然后是字母，数字，加号，句点或连字符的任意组合
 * @param {String} url 需要校验的 URL
 * @returns {Boolean} 是否是绝对 URL
 *
 */
export function isAbsoluteURL(url = "") {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
}

/**
 * 合并基准 URL 和相对 URL 成一个完整的 URL
 * @param {String} baseURL 基准 URL
 * @param {String} relativeURL 相对 URL
 * @returns {String} 返回合并后的 URL
 */
export function combineURLs(baseURL = "", relativeURL = "") {
    if (isAbsoluteURL(relativeURL)) return relativeURL;
    if (relativeURL && isString(relativeURL) && isString(baseURL)) {
        return baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "");
    }
    return baseURL;
}

/**
 * 获取 URL 主要部分（问号之前的部分）
 * @returns {String} 返回URL 主要部分（问号之前的部分）字符串
 */
// 获取路径问号（?）之前的部分
export function getUrlMainPart(url = "") {
    return url.split("?")?.[0] ?? "";
}
