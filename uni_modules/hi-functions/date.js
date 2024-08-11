/**
 * @descript Date 类型数据处理工具函数集
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 *
 * @list 函数列表
 * ========================================================================================================================
 * = isDate          = 判断一个数据是否是 Date 类型
 * = formatCountdown = 格式化倒计时
 * ========================================================================================================================
 */
/**
 * 判断一个数据是否是 Date 类型
 * @param {Any} num 需要验证的数据
 * @returns {Boolean} true: 是 Date 类型数据；false: 不是 Date 类型数据；
 */
export function isDate(val) {
    return Object.prototype.toString.call(val) === "[object Date]";
}

/**
 * 格式化倒计时
 * @param {String} formatString 格式字符串，例如 “距离倒计时结束还剩dd天hh时mm分ss秒”
 * @param {Date} targetDate 结束日期
 * @return {Object} 格式化后的字符串、是否结束、以及剩余的天、小时、分钟、秒数据
 */
export function formatCountdown(formatString, targetDate) {
    let now = new Date();
    let timeDifference = targetDate - now;

    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    if (timeDifference <= 0) {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    }

    formatString = formatString
        .replace("dd", days.toString().padStart(2, "0"))
        .replace("d", days.toString())
        .replace("hh", hours.toString().padStart(2, "0"))
        .replace("h", hours.toString())
        .replace("mm", minutes.toString().padStart(2, "0"))
        .replace("m", minutes.toString())
        .replace("ss", seconds.toString().padStart(2, "0"))
        .replace("s", seconds.toString());

    return {
        formatString,
        isEnd: timeDifference <= 0,
        dd: days.toString().padStart(2, "0"),
        d: days.toString(),
        hh: hours.toString().padStart(2, "0"),
        h: hours.toString(),
        mm: minutes.toString().padStart(2, "0"),
        m: minutes.toString(),
        ss: seconds.toString().padStart(2, "0"),
        s: seconds.toString()
    };
}
