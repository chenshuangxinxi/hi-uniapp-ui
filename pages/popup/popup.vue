<!--
 * HiUi - 弹出层
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <view class="demo-module">
            <view class="demo-module__title"></view>
            <view class="demo-module__content">
                <hi-popup v-model="show1" title="标题" @close="handleClose" @asyncClose="handleAsyncClose" overlayClickable showBorder>
                    <view class="content">
                        <view class="content-title">将进酒·君不见</view>
                        <view>君不见，黄河之水天上来，奔流到海不复回。</view>
                        <view>君不见，高堂明镜悲白发，朝如青丝暮成雪。</view>
                        <view>人生得意须尽欢，莫使金樽空对月。</view>
                        <view>天生我材必有用，千金散尽还复来。</view>
                        <view>烹羊宰牛且为乐，会须一饮三百杯。</view>
                        <view>岑夫子，丹丘生，将进酒，杯莫停。</view>
                        <view>与君歌一曲，请君为我倾耳听。</view>
                        <view>钟鼓馔玉不足贵，但愿长醉不愿醒。</view>
                        <view>古来圣贤皆寂寞，惟有饮者留其名。</view>
                        <view>陈王昔时宴平乐，斗酒十千恣欢谑。</view>
                        <view>主人何为言少钱，径须沽取对君酌。</view>
                        <view>五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。</view>
                    </view>
                    <template #footer>
                        <view class="footer">【作者】李白 【朝代】唐</view>
                    </template>
                </hi-popup>
                <hi-button @tap="handleClickBtn1" theme="primary" text="基础使用"></hi-button>
            </view>
        </view>

        <!-- 异步关闭 -->
        <view class="demo-module">
            <view class="demo-module__title"></view>
            <view class="demo-module__content">
                <hi-popup v-model="show2" title="标题" @close="handleClose" @asyncClose="onClose2" async>
                    <view class="content">
                        <view class="content-title">将进酒·君不见</view>
                        <view>君不见，黄河之水天上来，奔流到海不复回。</view>
                        <view>君不见，高堂明镜悲白发，朝如青丝暮成雪。</view>
                        <view>人生得意须尽欢，莫使金樽空对月。</view>
                        <view>天生我材必有用，千金散尽还复来。</view>
                        <view>烹羊宰牛且为乐，会须一饮三百杯。</view>
                        <view>岑夫子，丹丘生，将进酒，杯莫停。</view>
                        <view>与君歌一曲，请君为我倾耳听。</view>
                        <view>钟鼓馔玉不足贵，但愿长醉不愿醒。</view>
                        <view>古来圣贤皆寂寞，惟有饮者留其名。</view>
                        <view>陈王昔时宴平乐，斗酒十千恣欢谑。</view>
                        <view>主人何为言少钱，径须沽取对君酌。</view>
                        <view>五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。</view>
                    </view>
                    <template #footer>
                        <view class="footer">【作者】李白 【朝代】唐</view>
                    </template>
                </hi-popup>
                <hi-button @tap="handleClickBtn2" theme="success" text="异步关闭"></hi-button>
            </view>
        </view>

        <!-- 显示位置 -->
        <view class="demo-module">
            <view class="demo-module__title"></view>
            <view class="demo-module__content">
                <hi-popup v-model="show3" title="标题" @close="handleClose" @asyncClose="handleAsyncClose" :mode="mode">
                    <view class="content">
                        <view class="content-title">将进酒·君不见</view>
                        <view>君不见，黄河之水天上来，奔流到海不复回。</view>
                        <view>君不见，高堂明镜悲白发，朝如青丝暮成雪。</view>
                        <view>人生得意须尽欢，莫使金樽空对月。</view>
                        <view>天生我材必有用，千金散尽还复来。</view>
                        <view>烹羊宰牛且为乐，会须一饮三百杯。</view>
                        <view>岑夫子，丹丘生，将进酒，杯莫停。</view>
                        <view>与君歌一曲，请君为我倾耳听。</view>
                        <view>钟鼓馔玉不足贵，但愿长醉不愿醒。</view>
                        <view>古来圣贤皆寂寞，惟有饮者留其名。</view>
                        <view>陈王昔时宴平乐，斗酒十千恣欢谑。</view>
                        <view>主人何为言少钱，径须沽取对君酌。</view>
                        <view>五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。</view>
                    </view>
                    <template #footer>
                        <view class="footer">【作者】李白 【朝代】唐</view>
                    </template>
                </hi-popup>
                <hi-button @tap="handleClickBtn3('top')" theme="warning" text="内容居上"></hi-button>
                <hi-button @tap="handleClickBtn3('center')" theme="error" text="内容居中"></hi-button>
                <hi-button @tap="handleClickBtn3('bottom')" theme="info" text="内容居下"></hi-button>
                <hi-button @tap="handleClickBtn3('left')" theme="primary" text="内容居左"></hi-button>
                <hi-button @tap="handleClickBtn3('right')" theme="success" text="内容居右"></hi-button>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 显示状态
    const show1 = ref(false);
    const show2 = ref(false);
    const show3 = ref(false);

    // 内容对齐方式
    const mode = ref("");

    /**
     * 基础使用
     */
    function handleClickBtn1() {
        show1.value = true;
    }

    /**
     * 异步关闭
     */
    function handleClickBtn2() {
        show2.value = true;
    }

    /**
     * 异步关闭
     */
    function onClose2() {
        uni.showLoading({
            title: "",
            mask: true
        });
        let timer = setTimeout(() => {
            show2.value = false;
            clearTimeout(timer);
            uni.hideLoading();
        }, 2500);
    }

    /**
     * 嵌入内容
     */
    function handleClickBtn3(align) {
        mode.value = align;
        show3.value = true;
    }

    /**
     * 关闭事件
     */
    function handleClose() {
        console.log("收到关闭事件了~");
    }

    /**
     * 异步关闭事件
     */
    function handleAsyncClose() {
        console.log("收到异步关闭事件了~");
    }
</script>

<style lang="scss" scoped>
    .demo-module {
        &__content {
            display: flex;
            flex-direction: column;
            gap: 20rpx;
        }

        .content {
            padding: 0.5em 1.5em;
            text-align: justify;
            line-height: 1.8;
        }

        .content-title {
            font-size: 1.25em;
            font-weight: bold;
            margin-bottom: 0.25em;
        }

        .footer {
            padding: 1em 2em;
            font-size: 0.85em;
            color: #999999;
            text-align: right;
            width: 100%;
        }
    }
</style>
