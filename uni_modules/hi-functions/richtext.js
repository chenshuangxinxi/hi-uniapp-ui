/**
 * @descript 富文本内容处理工具函数集
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 *
 * @list 函数列表
 * ========================================================================================================================
 * = formatRichTextImages = 将富文本中的图片按指定的宽高进行格式
 * ========================================================================================================================
 */

/**
 * 将富文本中的图片按指定的宽高进行格式
 * @param {String} richText 富文本内容
 * @param {String} width 图片宽度，默认：100%
 * @param {String} height 图片高度，默认：auto
 * @returns {String} 返回格式化后的富文本内容
 */
export function formatRichTextImages(richText = "", width = "100%", height = "auto") {
    return richText?.replace(/<img/g, `<img style='width: ${width}; height: ${height};'`);
}
