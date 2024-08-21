<!--
 * hi-region-picker - 省市区选择器
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 提示 -->
        <module-demo
            title="提示"
            tips="由于 region.json 文件有点大，所以没内置到此组件中，建议自行引入 hi-region-data 组件，hi-region-data 组件中放置了最新的省市区 json 数据"
        ></module-demo>

        <!-- 一次性配置地理数据 -->
        <module-demo
            title="一次性配置地理数据"
            tips="通过 region 属性一次性配置地理数据，该数据应该是一个有 3 级结构的数组，其中第一级为省，第二级为市，第三级为区"
        >
            <hi-cell leftIconName="__dizhi" :title="address1 || placeholder" :class="{ 'hi-placeholder': !address1 }" @tap="showPicker1 = true"></hi-cell>
        </module-demo>

        <!-- 一次性配置地理数据 -->
        <hi-region-picker
            :region="region"
            v-model="values1"
            title="选择地区"
            :show="showPicker1"
            @close="showPicker1 = false"
            @confirm="showPicker1 = false"
            @change="handleChangeAddress1"
        ></hi-region-picker>

        <!-- 单独配置省、市、区数据 -->
        <module-demo
            title="单独配置省、市、区数据"
            tips="通过 provinces、cities、areas 单独配置省、市、区数据，此模式可以通过接口动态获取数据然后配置到组件中"
        >
            <hi-cell leftIconName="__dizhi" :title="address2 || placeholder" :class="{ 'hi-placeholder': !address2 }" @tap="handlesShowPicker2"></hi-cell>
        </module-demo>

        <!-- 单独配置省、市、区数据 -->
        <hi-region-picker
            :provinces="provinces"
            :cities="cities"
            :areas="areas"
            v-model="values2"
            title="选择地区"
            :show="showPicker2"
            @close="showPicker2 = false"
            @confirm="showPicker2 = false"
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

    // placeholder
    const placeholder = ref("请选择您的收货地区");

    // demo1 数据
    const address1 = ref("");
    const showPicker1 = ref(false);
    const values1 = ref([0, 0, 0]);

    // demo2 数据
    const address2 = ref("");
    const showPicker2 = ref(false);
    const values2 = ref([0, 0, 0]);
    const provinces = ref([]);
    const cities = ref([]);
    const areas = ref([]);
    const loading = ref(false);

    /**
     * 改变地址事件
     * @param {Array} values 选中的下标
     * @param {Object} region 选中的地区数据
     */
    function handleChangeAddress1(values, region) {
        console.log("values ->", values);
        console.log("region ->", region);
        address1.value = region.province?.name + region.city?.name + region.area?.name;
    }

    /**
     * 显示 demo2 选择器
     */
    function handlesShowPicker2() {
        showPicker2.value = true;
        loading.value = true;
        let timer = setTimeout(() => {
            provinces.value = region;
            cities.value = region[0].children;
            areas.value = region[0].children[0].children;
            loading.value = false;
            clearTimeout(timer);
        }, 2500);
    }

    /**
     * demo2 省份切换事件
     * @param {Number} index 当前下标
     * @param {Object} province 当前省份数据
     */
    function handleChangeProvince(index, province) {
        console.log("demo2 省份切换事件 ->", index, province);
        loading.value = true;
        let timer = setTimeout(() => {
            cities.value = province.children;
            areas.value = province.children[0].children;
            loading.value = false;
            address2.value = provinces.value[values2.value[0]].name + cities.value[values2.value[1]].name + areas.value[values2.value[2]].name;
            clearTimeout(timer);
        }, 2500);
    }

    /**
     * demo2 城市切换事件
     * @param {Number} index 当前下标
     * @param {Object} city 当前城市数据
     */
    function handleChangeCity(index, city) {
        console.log("demo2 城市切换事件 ->", index, city);
        loading.value = true;
        let timer = setTimeout(() => {
            areas.value = city.children;
            loading.value = false;
            address2.value = provinces.value[values2.value[0]].name + cities.value[values2.value[1]].name + areas.value[values2.value[2]].name;
            clearTimeout(timer);
        }, 2500);
    }

    /**
     * demo2 区切换事件
     * @param {Number} index 当前下标
     * @param {Object} area 当前区数据
     */
    function handleChangeArea(index, area) {
        console.log("demo2 区切换事件 ->", index, area);
        address2.value = provinces.value[values2.value[0]].name + cities.value[values2.value[1]].name + areas.value[values2.value[2]].name;
    }
</script>

<style lang="scss" scoped>
    .hi-cell {
        width: 100%;
    }
</style>
