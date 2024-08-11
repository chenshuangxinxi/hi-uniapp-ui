/**
 * 统一项目代码格式化风格
 * Prettier配置文档：https://prettier.io/docs/en/options.html
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 */
module.exports = {
    printWidth: 158, // 指定自动换行的行长
    tabWidth: 4, // 指定每个缩进级别的空格数
    useTabs: false, // 用制表符代替空格缩进行
    semi: true, // 在每个语句的末尾添加一个分号
    singleQuote: false, // 使用单引号而不是双引号
    quoteProps: "consistent", // 如果对象中至少有一个属性需要引号，则引用所有属性。
    jsxSingleQuote: false, // 在 JSX 中使用单引号而不是双引号
    trailingComma: "none", // 没有尾随逗号
    bracketSpacing: true, // 在对象文本的方括号之间打印空格. 示例： { foo: bar }
    bracketSameLine: false, // 将多行 HTML（HTML、JSX、Vue、Angular） > 元素放在最后一行的末尾，而不是单独放在下一行
    arrowParens: "always", // 在唯一箭头函数参数两边加上括号
    proseWrap: "preserve", // 默认情况下，Prettier 不会更改 markdown 文本中的换行
    htmlWhitespaceSensitivity: "ignore", // 所有标签周围的空格（或缺少空格）被认为是微不足道的
    vueIndentScriptAndStyle: true, // 是否缩进 Vue 文件中的代码 <script> 和 <style> 标签
    endOfLine: "lf", // "lf" - 仅换行 （ \n ），在 Linux 和 macOS 以及 git 存储库中很常见
    embeddedLanguageFormatting: "auto", // 格式化嵌入式代码，如果 Prettier 可以自动识别它
    singleAttributePerLine: false, // 不要强制每行使用单个属性
    // 自定义文件后缀对应的parser - 只在HBuilderX中配置下面的parsers选项
    parsers: {
        ".nvue": "vue",
        ".ux": "vue"
    }
};