/**
 * @descript "@/pages.json" 文件数据处理工具函数集
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 *
 * @list 函数列表
 * ========================================================================================================================
 * = getPages           = 获取所有在 pages.json 中定义的页面数据，包含主包和所有分包
 * = getCurrentPageData = 获取当前页面在 pages.json 中定义的数据
 * = getPageData        = 获取指定页面在 pages.json 中定义的数据
 * = isTabBar           = 判断当前页面或指定页面路径对应的页面是否是 tabBar 页面
 * = isPageExist        = 判断页面是否存在
 * ========================================================================================================================
 */
import pagesJson from "@/pages.json";
import { getUrlMainPart } from "./url";

/**
 * 获取所有在 pages.json 中定义的页面数据，包含主包和所有分包
 * @returns {Array} 返回所有在 pages.json 中定义的页面数据，包含主包和所有分包
 */
export function getPages() {
    // 最后需要返回的总页面数据
    const allPages = [];

    // 主包页面数据
    const mainPages = pagesJson.pages;

    // 分包数据
    const subPackages = pagesJson.subPackages;

    // 1. 先处理主包页面数据
    mainPages.forEach((page) => {
        // 为了统一，为主包和分包页面数据增加 fullPath 字段，表示开头为 "/" 的完整的（带分包根目录路径的）页面路径
        page.fullPath = `/${page.path}`;

        // 将页面数据添加到总页面数据中
        allPages.push(page);
    });

    // 2. 再处理分包数据
    subPackages?.forEach((subPackage) => {
        // 分包的根目录
        const root = subPackage.root;

        // 分包中的页面数据
        const subPages = subPackage.pages;

        // 处理分包中的页面数据
        subPages.forEach((subPage) => {
            // 为了统一，为主包和分包页面数据增加 fullPath 字段，表示开头为 "/" 的完整的（带分包根目录路径的）页面路径
            subPage.fullPath = `/${root}/${subPage.path}`;

            // 将页面数据添加到总页面数据中
            allPages.push(subPage);
        });
    });

    // 最后返回总页面数据
    return allPages;
}

/**
 * 获取当前页面在 pages.json 中定义的数据
 * @return {Object} 返回当前页面在 pages.json 中定义的数据
 */
export function getCurrentPageData() {
    // 查找页面在 pages.json 中定义的数据
    const pages = getCurrentPages();
    const page = pages[pages.length - 1];
    return getPageData(page?.$page?.fullPath);
}

/**
 * 获取指定页面在 pages.json 中定义的数据
 * @param {String} url 指定页面URL
 * @returns {Object} 指定页面在 pages.json 中定义的数据
 */
export function getPageData(url = "") {
    // 获取所有在 pages.json 中定义的页面数据，包含主包和所有分包
    const allPages = getPages();

    // 传入的页面路径问号（?）之前的部分
    const urlMainPart = getUrlMainPart(url);

    // 查找页面在 pages.json 中定义的数据
    return allPages.find((item) => urlMainPart === item?.fullPath || urlMainPart === `/${item?.fullPath}`);
}

/**
 * 判断当前页面或指定页面路径对应的页面是否是 tabBar 页面
 * @param {String} pagePath 页面路径，如果该参数为空，那么判断当前页面是否是 tabBar 页面
 * @returns {Boolean} true: 是 tabBar 页面； false: 不是 tabBar 页面；
 */
export function isTabBar(pagePath) {
    // 1. 传入的参数值不为空
    if (pagePath) {
        // 传入的页面路径问号（?）之前的部分
        const urlMainPart = getUrlMainPart(pagePath);

        // 判断并返回该路径对应的页面是否是 tabBar 页面
        return pagesJson?.tabBar?.list?.find((item) => urlMainPart === item?.pagePath || urlMainPart === `/${item?.pagePath}`);
    }

    // 2. 传入的参数为空
    // 获取当前页面在 pages.json 中定义的数据
    const currentPageData = getCurrentPageData();

    // 判断并返回当前页面是否是 tabBar 页面
    return pagesJson?.tabBar?.list?.find((item) => `/${item.pagePath}` === currentPageData?.fullPath);
}

/**
 * 判断页面是否存在
 * @param {String} pagePath 页面路径
 * @returns {Boolean} true: 页面存在；false: 页面不存在；
 */
export function isPageExist(pagePath) {
    if (!pagePath) return false;

    // 传入的页面路径问号（?）之前的部分
    const urlMainPart = getUrlMainPart(pagePath);

    // 所有页面数据
    const pages = getPages();

    return pages.find((item) => item.fullPath === pagePath || item.fullPath === `/${pagePath}`);
}
