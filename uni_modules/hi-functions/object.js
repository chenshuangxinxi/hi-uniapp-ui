/**
 * @descript Object 类型数据处理工具函数集
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 *
 * @list 函数列表
 * ========================================================================================================================
 * = isObject        = 判断一个变量是否是对象数据（不包括数组、函数、null等）
 * = deepMergeObject = 深度合并对象，不影响原对象
 * ========================================================================================================================
 */

/**
 * 判断一个变量是否是 Object 类型数据（不包括数组、函数、null等）
 * @param {Object} obj 需要验证的数据
 * @returns {Boolean} true: 是 Object 类型数据；false: 不是 Object 类型数据；
 */
export function isObject(obj) {
    // 排除 null 和非对象类型
    if (obj === null || typeof obj !== "object") {
        return false;
    }

    // 使用 Object.prototype.toString.call 来获取变量的真实类型
    // 注意这里需要排除函数类型，因为函数在JavaScript中也是对象，但通常我们不希望将它们视为普通对象
    return Object.prototype.toString.call(obj) === "[object Object]";
}

/**
 * 深度合并两个对象，不影响源对象
 * @param {Object} obj1 对象一
 * @param {Object} obj2 对象二
 * @returns {Object} 合并后的对象数据
 */
export function deepMergeObject(obj1, obj2) {
    let merged = Object.assign({}, obj1);
    for (let key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (typeof obj2[key] === "object" && obj2[key] !== null && !Array.isArray(obj2[key])) {
                if (typeof merged[key] === "object" && merged[key] !== null && !Array.isArray(merged[key])) {
                    merged[key] = deepMergeObject(merged[key], obj2[key]);
                } else {
                    merged[key] = Object.assign({}, obj2[key]);
                }
            } else {
                merged[key] = obj2[key];
            }
        }
    }
    return merged;
}
