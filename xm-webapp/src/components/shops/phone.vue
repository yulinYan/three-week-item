<template>
    <div>
        <div class="top">
            <div class="first">
                <img src="../../assets/images/phone/phone1.jpg" >
            </div>
            <div class="second">
                <img src="../../assets/images/phone/phone2.jpg" >
            </div>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">slider1</div>
                <div class="swiper-slide">slider2</div>
                <div class="swiper-slide">slider3</div>
            </div>
        </div>
    </div>
</template>

<script>

    import Swiper from "swiper";

    export default {
        name: "phone",
        mounted() {
            this._initSwiper()
        },
        methods: {
            _initSwiper() {
                new Swiper(".swiper-container", {
                    // direction: "vertical",
                    // effect: "flip",
                    // autoplay: true,
                    // 如果需要分页器
                    // pagination: {
                    //     el: ".swiper-pagination"
                    // }


                    loop: true,
                    slidesPerView: 2,
                    spaceBetween:5,
                    // loopedSlides: 3,
                    centeredSlides:true,
                    grabCursor:true,
                    history: true,

                })
            }
        }
    }
</script>

<style scoped>
    @import "../../../node_modules/swiper/css/swiper.css";
.swiper-container {
    width: 100%;
    height: 1.85rem;
    margin-top: 0.43rem;
}
    .swiper-slide{
        width: 30%;
        height: 1rem;
        background-color: #ff6700;
    }
.top{
width: 100%;
    margin-top: 0.45rem;
}
.first img{
    width: 100%;
    height: 4rem;
    display: block;
}
.second img{
    width: 100%;
    height:0.47rem;
    display: block;
}
</style>