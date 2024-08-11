# hi-uniapp-functions

## 介绍

-   常用工具函数集

## 使用示例

```javascript
// 引入函数
import { isString } from "@/uni_modules/hi-functions";

// 使用函数
isString("hi-uniapp-functions"); // true
```

## Array 类型数据处理工具函数列表

-   = isArray = 判断一个数据是否是 Array 类型

## Date 类型数据处理工具函数列表

-   = isDate = 判断一个数据是否是 Date 类型
-   = formatCountdown = 格式化倒计时

## Function 类型数据处理工具函数列表

-   = isFunction = 判断一个变量是否是函数类型

## 图片处理工具函数列表

-

## Number 类型数据处理工具函数列表

-   = isNumber = 判断一个数据是否是 Number 类型
-   = formatFloat = 格式化浮点数，保留指定的位数，并可以配置是否舍弃末尾为 0 的小数位数

## Object 类型数据处理工具函数列表

-   = isObject = 判断一个变量是否是对象数据（不包括数组、函数、null 等）
-   = deepMergeObject = 深度合并对象，不影响原对象

## "@/pages.json" 文件数据处理工具函数列表

-   = getPages = 获取所有在 pages.json 中定义的页面数据，包含主包和所有分包
-   = getCurrentPageData = 获取当前页面在 pages.json 中定义的数据
-   = getPageData = 获取指定页面在 pages.json 中定义的数据
-   = isTabBar = 判断当前页面或指定页面路径对应的页面是否是 tabBar 页面
-   = isPageExist = 判断页面是否存在

## 富文本内容处理工具函数列表

-   = formatRichTextImages = 将富文本中的图片按指定的宽高进行格式

## String 类型数据处理工具函数列表

-   = isString = 判断一个变量是否是字符串类型
-   = upperCaseFirstLetter = 将字符串的首字母转成大写字母

## URL 处理工具函数列表

-   = isAbsoluteURL = 校验 URL 是否是绝对 URL
-   = combineURLs = 合并基准 URL 和相对 URL 成一个完整的 URL
-   = getUrlMainPart = 获取 URL 主要部分（问号之前的部分）
