/**
 * @descript Number 类型数据处理工具函数集
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 *
 * @list 函数列表
 * ========================================================================================================================
 * = isNumber = 判断一个数据是否是 Number 类型
 * = formatFloat = 格式化浮点数，保留指定的位数，并可以配置是否舍弃末尾为0的小数位数
 * ========================================================================================================================
 */
/**
 * 判断一个数据是否是 Number 类型
 * @param {Any} num 需要验证的数据
 * @returns {Boolean} true: 是 Number 类型数据；false: 不是 Number 类型数据；
 */
export function isNumber(num) {
    return !Number.isNaN(num) && typeof num === "number";
}

/**
 * 格式化浮点数，保留指定的位数，并可以配置是否舍弃末尾为0的小数位数
 * @param {Number} num 要格式化的数字
 * @param {Number} digit 要保留的小数位数
 * @param {Boolean} abandonEnd 是否要舍弃末尾为0的位数
 * @return {Number} 格式化后的数字
 */
export function formatFloat(num = 0, digit = 2, abandonEnd = true) {
    let str = num.toFixed(digit);
    let parts = str.split(".");
    if (parts[1] && abandonEnd) {
        parts[1] = parts[1].replace(/0+$/, "");
    }
    return Number(parts.join("."));
}
