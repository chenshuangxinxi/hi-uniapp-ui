/**
 * @descript String 类型数据处理工具函数集
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 *
 * @list 函数列表
 * ========================================================================================================================
 * = isString             = 判断一个变量是否是字符串类型
 * = upperCaseFirstLetter = 将字符串的首字母转成大写字母
 * ========================================================================================================================
 */
/**
 * 判断一个数据是否是 String 类型
 * @param {Any} variable 需要验证的数据
 * @returns {Boolean} true: 是 String 类型数据；false: 不是 String 类型数据；
 */
export function isString(str) {
    return typeof str === "string";
}

/**
 * 将字符串的首字母转成大写字母
 * @param {String} str 需要转换的字符串
 */
export function upperCaseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
