<template>
    <div class="home-content">

        <xm-header></xm-header>
        <xm-home-nav v-if="homeInfo" :data="homeInfo" ></xm-home-nav>
<!--        <div class="bb"><img v-if="homeInfo" :src="homeInfo.src" alt=""/>{{homeInfo.src}}</div>-->
    </div>
</template>

<script>
    import homeApi from "../apis/homeApi";
    import header from "../components/header";
    import home_nav from "../components/home_nav";
    export default {
        name: "home",
        data(){
            // eslint-disable-next-line no-undef
           return{
               // eslint-disable-next-line no-undef
               homeInfo:[]
           }
        },
        components: {
            'xm-header': header,
            'xm-home-nav': home_nav,
            // eslint-disable-next-line vue/no-unused-components
            // homeInfo: []
        },
        beforeMount () {
            this._initPageData()
        },
        methods: {
            /**
             * 页面的数据加载
             **/
            async _initPageData() {
                // eslint-disable-next-line no-undef
                let data = await homeApi.getHomeInfo();
                this.homeInfo = data;
                // console.log(data)
            }
        }
    }
</script>

<style scoped>
.home-content{
    overflow: hidden;
}
    /*.bb{*/
    /*    width: 3rem;*/
    /*    height: 3rem;*/
    /*}*/
    /*.bb img{*/
    /*    width: 100%;*/
    /*    height: 100%;*/
    /*}*/
</style>