<!--
 * hi-region-picker - 省市区选择器
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <view class="demo-module">
            <view class="demo-module__title">基础使用</view>
            <view class="demo-module__tips">由于 region.json 文件有点大，所以没内置到此组件中，建议自行引入 hi-region-data 文件</view>
            <view class="demo-module__tips">此组件有两种模式：</view>
            <view class="demo-module__tips">一：只配置 region 数据，该数据应该是一个有 3 级结构的数组，其中第一级为省，第二级为市，第三级为区</view>
            <view class="demo-module__content">
                <view class="row" hover-class="hi-hover" @tap="show1 = true">
                    <view class="row-value" :class="{ placeholder: !regionStr1 }">{{ regionStr1 || "请选择收货地区" }}</view>
                    <hi-icon class="row-arrow" name="__you"></hi-icon>
                </view>
            </view>
        </view>

        <hi-region-picker
            :region="region"
            v-model="regionValues1"
            title="选择地区"
            :show="show1"
            @close="show1 = false"
            @confirm="show1 = false"
            @change="handleChange1"
        ></hi-region-picker>

        <view class="demo-module">
            <view class="demo-module__tips">二：设置 provinces、cities 和 areas 数据，以便异步设置数据</view>
            <view class="demo-module__content">
                <view class="row" hover-class="hi-hover" @tap="handleRegionRowClick">
                    <view class="row-value" :class="{ placeholder: !regionStr2 }">{{ regionStr2 || "请选择收货地区" }}</view>
                    <hi-icon class="row-arrow" name="__you"></hi-icon>
                </view>
            </view>
        </view>

        <hi-region-picker
            :provinces="provinces"
            :cities="cities"
            :areas="areas"
            v-model="regionValues2"
            title="选择地区"
            :show="show2"
            @close="show2 = false"
            @confirm="show2 = false"
            @changeProvince="handleChangeProvince"
            @changeCity="handleChangeCity"
            @changeArea="handleChangeArea"
            :loading="loading"
        ></hi-region-picker>
    </view>
</template>

<script setup>
    import { ref, computed } from "vue";
    import region from "@/uni_modules/hi-region-data/region.json";
    console.log("region ->", region);

    const show1 = ref(false);
    const regionValues1 = ref([0, 0, 0]);
    const regionStr1 = ref("");

    const show2 = ref(false);
    const regionValues2 = ref([0, 0, 0]);
    const regionStr2 = ref("");
    const provinces = ref([]);
    const cities = ref([]);
    const areas = ref([]);
    const loading = ref(false);

    // demo1 change 事件
    function handleChange1(value, region) {
        // console.log("value ->", value, regionValues1.value);
        // console.log("region ->", region);
        regionStr1.value = region.province?.name + region.city?.name + region.area?.name;
    }

    // demo2 点击展示事件
    function handleRegionRowClick() {
        show2.value = true;
        loading.value = true;
        let timer = setTimeout(() => {
            provinces.value = region;
            cities.value = region[0].children;
            areas.value = region[0].children[0].children;
            loading.value = false;
            clearTimeout(timer);
        }, 2500);
    }

    // demo2 省份切换事件
    function handleChangeProvince(index, province) {
        console.log("demo2 省份切换事件 ->", index, province);
        loading.value = true;
        let timer = setTimeout(() => {
            cities.value = province.children;
            areas.value = province.children[0].children;
            loading.value = false;
            regionStr2.value =
                provinces.value[regionValues2.value[0]].name + cities.value[regionValues2.value[1]].name + areas.value[regionValues2.value[2]].name;
            clearTimeout(timer);
        }, 2500);
    }

    // demo2 城市切换事件
    function handleChangeCity(index, city) {
        console.log("demo2 城市切换事件 ->", index, city);
        loading.value = true;
        let timer = setTimeout(() => {
            areas.value = city.children;
            loading.value = false;
            regionStr2.value =
                provinces.value[regionValues2.value[0]].name + cities.value[regionValues2.value[1]].name + areas.value[regionValues2.value[2]].name;
            clearTimeout(timer);
        }, 2500);
    }

    // demo2 区切换事件
    function handleChangeArea(index, area) {
        console.log("demo2 区切换事件 ->", index, area);
        regionStr2.value =
            provinces.value[regionValues2.value[0]].name + cities.value[regionValues2.value[1]].name + areas.value[regionValues2.value[2]].name;
    }
</script>

<style lang="scss" scoped>
    .demo-module {
        .row {
            padding: 10px;
            background: #ffffff;
            display: flex;
            align-items: center;

            &-value {
                flex: 1;
            }

            .placeholder {
                color: #999999;
            }

            .arrow {
                color: #999999;
            }
        }
    }
</style>
