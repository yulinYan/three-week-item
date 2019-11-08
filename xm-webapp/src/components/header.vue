<template>
    <div class="header">
        <div class="header-top">
            <div class="logo"><img src="../assets/images/header1.png" alt=""></div>
            <div class="h-ipt">
                <i><span class="h-i"></span><span class="h-i-2">请搜索商品</span></i>
            </div>
            <div class="header-mine" ><img src="../assets/images/header2.png" ></div>
        </div>
<!--        <div class="h-nav-boss">-->
<!--            <div class="h-nav">-->
<!--                <div class="h-nav-item" @click="flag='intelligence'"><span>推荐</span></div>-->
<!--                <div class="h-nav-item" @click="flag='Notebook'"><span>手机</span></div>-->
<!--                <div class="h-nav-item" @click="flag='phone'"><span>智能</span></div>-->
<!--                <div class="h-nav-item" @click="flag='Recommend'"><span>电视</span></div>-->
<!--                <div class="h-nav-item" @click="flag='TV'"><span>笔记本</span></div>-->
<!--                <div class="h-nav-item" @click="flag='Notebook'"><span>家电</span></div>-->
<!--                <div class="h-nav-item" @click="flag='Notebook'"><span>生活周边</span></div>-->
<!--                <div class="nav-show" ><img src="../assets/images/header4.png" alt=""></div>-->
<!--            </div>-->

<!--        </div>-->
<!--        <div :is="flag"></div>-->

    </div>
</template>

<script>
    // import intelligence from "./shops/intelligence";
    // import Notebook from "./shops/Notebook";
    // import phone from "./shops/phone";
    // import Recommend from "./shops/Recommend";
    // import TV from "./shops/TV";
    // import banner from "./shops/intelligence/banner";
    export default {

        name: "vheader",
        // data(){
        //     return{
        //         flag:"intelligence"
        //     }
        // },
        // components:{
        //     // eslint-disable-next-line vue/no-unused-components
        //     intelligence,
        //     // eslint-disable-next-line vue/no-unused-components
        //     Notebook,
        //     // eslint-disable-next-line vue/no-unused-components,no-undef
        //     phone,
        //     // eslint-disable-next-line vue/no-unused-components,no-undef
        //     Recommend,
        //     // eslint-disable-next-line vue/no-unused-components,no-undef
        //     TV,
        //     "xm-banner":banner
        //
        // }
    }
</script>

<style scoped>
    .header{
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 99;
        box-shadow: 0 0.02rem 0.04rem -0.01rem rgba(0,0,0,.2);
        background: #f2f2f2;

    }
    .header-top{
        width: 100%;
        height: 0.43rem;
        /*margin-top: 0.03rem;*/
        color: #666;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        overflow: hidden;
    }
    .logo{
        /*display: inline-block;*/
        width: 14%;
        height: 0.1884rem;
        text-align: center;
    }
    .logo img{
        width: 0.25rem;
        height: 0.1644rem;
    }
    .h-ipt{
        width:100%;
        height: 0.3326rem;

    }
    .h-ipt i{
        display: inline-block;
        width: 100%;
        height: 100%;

        border: 1px solid #e5e5e5;
        text-align: left;
        width: 100%;
        color: rgba(0,0,0,.3);
        background-color: #fff;
        border-radius: .04rem;
        font-size: 0.13rem;
    }
    .h-i{
        display: inline-block;
        width:0.31rem ;
        height: 0.31rem;
        line-height: 0.31rem;
        background-image: url("../assets/images/header3.png");
        background-size: 100%;
        align-items: center;
        float: left;
    }
    .h-i-2{
        display: inline-block;
        width: auto;
        height: 0.31rem;
        line-height: 0.31rem;
        float: left;
    }
    .h-ipt  span img{
        width: 80%;
        height: 80%;
        margin: 0.05rem auto;

    }

    .header-mine{
        /*display: inline-block;*/
        width: 0.52rem;
        height: 0.2rem;
        text-align: center;

    }
    .header-mine img{
        width: 0.2rem;
        height: 0.2rem;
    }

    /*头部导航栏*/
    /*.h-nav-boss{*/
    /*    overflow: hidden;*/
    /*    position: relative;*/
    /*}*/
    /*.h-nav{*/
    /*    overflow-x:auto ;*/
    /*    !*white-space: normal;*!*/
    /*    !*position: relative;*!*/
    /*    display: -webkit-box;*/
    /*    justify-content: left;*/

    /*}*/
    /*.h-nav::-webkit-scrollbar{*/
    /*    display: none;*/
    /*}*/
    /*.h-nav-item{*/
    /*    padding:0 0.13rem;*/
    /*}*/
    /*.h-nav-item span{*/
    /*    display: block;*/
    /*    width: auto;*/
    /*    height: 0.4rem;*/
    /*    line-height: 0.4rem;*/
    /*    border-bottom: 0.01rem solid firebrick;*/

    /*    font-size: 0.13rem;*/
    /*}*/
    /*.nav-show{*/
    /*    position: absolute;*/
    /*    top: 0.1rem;*/
    /*    right: 0;*/
    /*    width: .35rem;*/
    /*    height: .2865rem;*/
    /*    line-height: .2865rem;*/
    /*    background-color: #f2f2f2;*/
    /*    box-shadow: -15px 0 15px 0 #f2f2f2;*/
    /*    z-index: 99;*/
    /*}*/

    /*.nav-show img{*/
    /*    width: 70%;*/
    /*}*/
</style>