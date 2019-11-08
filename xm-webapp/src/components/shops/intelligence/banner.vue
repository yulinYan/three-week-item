<template>
    <div class="swiper-container" >
        <div class="swiper-wrapper">

            <div class="swiper-slide box"  v-for="(num,index) in 3" :key="index">

                <img v-if="data.bannerPic" :src="data.bannerPic[index].name" alt="">

            </div>
<!--            <div class="swiper-slide box">-->
<!--                <img v-if="data.pic" :src="data.pic[1].name" alt="">-->
<!--            </div>-->
<!--            <div class="swiper-slide box">-->
<!--                <img v-if="data.pic" :src="data.pic[2].name" alt="">-->
<!--            </div>-->
        </div>
<!--        分页器-->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    // eslint-disable-next-line no-undef

    import Swiper from "swiper";

    // eslint-disable-next-line vue/no-unused-components

    export default {
        name: "banner",


        props:['data'],
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
        margin-top: 0.43rem;
    }

    /*.box1 {*/
    /*    width: 100%;*/
    /*    height: 1.85rem;*/
    /*    !*background-image: url("../../../assets/images/banner1.jpg");*!*/
    /*    !*background-size: 100%;*!*/
    /*}*/

    /*.box2 {*/
    /*    width: 100%;*/
    /*    height: 1.85rem;*/
    /*    !*background-image: url("../../../assets/images/banner2.jpg");*!*/
    /*    !*background-size: 100%;*!*/
    /*}*/

    /*.box3 {*/
    /*    width: 100%;*/
    /*    height: 1.85rem;*/
    /*    !*background-image: url("../../../assets/images/banner3.jpg");*!*/
    /*    !*background-size: 100%;*!*/
    /*}*/
    .box{
        width: 100%;
        height: 1.85rem;
    }
    .box img{
        width: 100%;
        height: 100%;
    }
</style>