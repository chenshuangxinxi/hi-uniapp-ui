/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 */
export default {
    // 宽
    width: {
        type: String,
        default: ""
    },

    // 高
    height: {
        type: String,
        default: ""
    },

    // 数据
    list: {
        type: Array,
        default: () => []
    },

    // 资源属性字段的 key
    keyName: {
        type: String,
        default: "url"
    },

    // 激活项下标
    current: {
        type: Number,
        default: 0
    },

    // 是否显示指示点
    dots: {
        type: Boolean,
        default: true
    },

    // 图片图标的裁剪、缩放模式
    mode: {
        type: String,
        default: "aspectFill"
    },

    // 图片图标懒加载？
    lazyLoad: {
        type: Boolean,
        default: false
    },

    // 图片图标显示动画效果？
    fadeShow: {
        type: Boolean,
        default: true
    },

    // 在系统不支持webp的情况下是否单独启用webp。默认false，只支持网络资源。
    webp: {
        type: Boolean,
        default: false
    },

    // 开启长按图片显示识别小程序码菜单？
    showMenuByLongpress: {
        type: Boolean,
        default: true
    },

    // 是否能拖动图片？
    draggable: {
        type: Boolean,
        default: false
    },

    // swiper-item 可见时的 class
    activeClass: {
        type: String,
        default: ""
    },

    // acceleration 设置为 true 时且处于滑动过程中，中间若干屏处于可见时的class
    changingClass: {
        type: String,
        default: ""
    },

    // 是否自动切换
    autoplay: {
        type: Boolean,
        default: false
    },

    // 当前所在滑块的 item-id ，不能与 current 被同时指定
    currentItemId: {
        type: String,
        default: ""
    },

    // 自动切换时间间隔
    interval: {
        type: Number,
        default: 5000
    },

    // 滑动动画时长
    duration: {
        type: Number,
        default: 500
    },

    // 是否采用衔接滑动，即播放到末尾后重新回到开头
    circular: {
        type: Boolean,
        default: true
    },

    // 滑动方向是否为纵向
    vertical: {
        type: Boolean,
        default: false
    },

    // 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
    previousMargin: {
        type: String,
        default: "0rpx"
    },

    // 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
    nextMargin: {
        type: String,
        default: "0rpx"
    },

    // 当开启时，会根据滑动速度，连续滑动多屏
    acceleration: {
        type: Boolean,
        default: false
    },

    // 是否禁用代码变动触发 swiper 切换时使用动画
    disableProgrammaticAnimation: {
        type: Boolean,
        default: false
    },

    // 同时显示的滑块数量
    displayMultipleItems: {
        type: Number,
        default: 1
    },

    // 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息
    skipHiddenItemLayout: {
        type: Boolean,
        default: false
    },

    // 是否禁止用户 touch 操作
    disableTouch: {
        type: Boolean,
        default: false
    },

    // 是否监听用户的触摸事件，只在初始化时有效，不能动态变更
    touchable: {
        type: Boolean,
        default: true
    },

    // 指定 swiper 切换缓动动画类型，有效值：default、linear、easeInCubic、easeOutCubic、easeInOutCubic
    easingFunction: {
        type: String,
        default: "default"
    }
};
