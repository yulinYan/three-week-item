<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide box1"></div>
            <div class="swiper-slide box2"></div>
            <div class="swiper-slide box3"></div>
        </div>
<!--        分页器-->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>

    import Swiper from "swiper";

    // eslint-disable-next-line vue/no-unused-components

    export default {
        name: "banner",
        mounted() {
            this._initSwiper()
        },
        methods: {
            _initSwiper() {
                new Swiper(".swiper-container", {
                    // direction: "vertical",
                    // effect: "flip",

                    // 如果需要分页器
                    pagination: {
                        el: ".swiper-pagination"
                    }

                })
            }
        }
    }

</script>

<style scoped>
    @import "../../../../node_modules/swiper/css/swiper.css";

    .swiper-container {
        width: 100%;
        height: 1.85rem;
    }

    .box1 {
        width: 100%;
        height: 1.85rem;
        background-image: url("../../../assets/images/banner1.jpg");
        background-size: 100%;
    }

    .box2 {
        width: 100%;
        height: 1.85rem;
        background-image: url("../../../assets/images/banner1.jpg");
        background-size: 100%;
    }

    .box3 {
        width: 100%;
        height: 1.85rem;
        background-image: url("../../../assets/images/banner1.jpg");
        background-size: 100%;
    }
</style>