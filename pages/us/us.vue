<!--
 * hiui - 关于我们
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- Logo -->
        <view class="logo-wrapper">
            <hi-image class="logo-image" src="/static/logo.jpg"></hi-image>
        </view>

        <!-- Info -->
        <view class="info-wrapper">
            <!-- 公司名称 -->
            <view class="info-row">
                <hi-icon class="info-icon" name="/static/images/icons/company.png"></hi-icon>
                <view class="info-value">济南晨霜信息技术有限公司</view>
            </view>

            <!-- 联系方式 -->
            <view class="info-row">
                <hi-icon class="info-icon" name="/static/images/icons/phone.png"></hi-icon>
                <view class="info-value phonenumber" @tap="handlePhoneNumberClick('18560000860')">18560000860</view>
            </view>

            <!-- 联系方式 -->
            <view class="info-row">
                <hi-icon class="info-icon" name="/static/images/icons/phone.png"></hi-icon>
                <view class="info-value phonenumber" @tap="handlePhoneNumberClick('18754137913')">18754137913</view>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    /**
     * 拨打电话
     * @param {String} phoneNumber 电话号码
     */
    function handlePhoneNumberClick(phoneNumber) {
        uni.makePhoneCall({
            phoneNumber: phoneNumber
        });
    }
</script>

<style lang="scss" scoped>
    .page-view {
        padding-top: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .logo-wrapper {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 30px;
    }

    .logo-image.hi-image {
        width: 100%;
        height: 100%;
    }

    .info-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .info-row {
        display: flex;
        align-items: center;
    }

    .info-icon {
        font-size: 25px;
        margin-right: 5px;
        flex-shrink: 0;
    }

    .info-value {
        font-size: 15px;
        flex: 1;
    }

    .phonenumber {
        text-decoration: underline;
    }
</style>
