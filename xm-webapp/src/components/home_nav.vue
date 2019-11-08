<template>
    <div class="h-nav-boss">
        <div class="h-nav">
            <div class="h-nav-l-row" v-if="show">
                <div class="h-nav-item" @click="styleItem(n,h)" :key="h" v-for="(n,h) in arrlist">
                    <span :class="{cheched_item:i===h}">{{n.name}}</span>
                </div>

            </div>
            <div class="h-nav-l-list" v-else >
                <h4>全部</h4>
                <div class="h-nav-l-list-n">

                    <div class="h-nav-item nav-b "  @click="styleItem(n,h)" :key="h" v-for="(n,h) in arrlist" :class="{checked_list:i===h}">
                        <span >{{n.name}}</span>
                    </div>

                </div>

            </div>
            <div class="mask" v-if="show==false"></div>
            <div class="h-nav-show-more">
                <div class="nav-show"   @click="show=!show" :class="{tip:show===false}" ><img src="../assets/images/header4.png" alt=""></div>
            </div>
        </div>


        <div class="empty"></div>
        // eslint-disable-next-line vue/no-parsing-error
        <div :is="flag"  :data="data" ></div>
    </div>
</template>

<script>
    import intelligence from "./shops/intelligence";
    import Notebook from "./shops/Notebook";
    import phone from "./shops/phone";
    import Recommend from "./shops/Recommend";
    import TV from "./shops/TV";
    import banner from "./shops/intelligence/banner";
    export default {
        name: "home_nav",
        data(){
            return{
                flag:"intelligence",
                show:true,
                i:0,
                arrlist:[
                    {name:'推荐',flag:'intelligence'},
                    {name:'手机',flag:'phone'},
                    {name:'智能',flag:'Recommend'},
                    {name:'电视',flag:'TV'},
                    {name:'笔记本',flag:'Notebook'},
                    {name:'家电',flag:'phone'},
                    {name:'生活周边',flag:'phone'},

                ],

            }
        },
        methods:{
            styleItem(n,h){
                this.i=h;
                this.flag = n.flag;
                this.show = true
            }
        },
        components:{
            // eslint-disable-next-line vue/no-unused-components
            intelligence,
            // eslint-disable-next-line vue/no-unused-components
            Notebook,
            // eslint-disable-next-line vue/no-unused-components,no-undef
            phone,
            // eslint-disable-next-line vue/no-unused-components,no-undef
            Recommend,
            // eslint-disable-next-line vue/no-unused-components,no-undef
            TV,

            "xm-banner":banner

        },
        props:['data']
    }
</script>

<style scoped>
    .h-nav-boss{
        position: relative;
        z-index: 10;
    }
    .h-nav{
        position: fixed;
        top: 0.43rem;
        z-index: 100;
        background:#f2f2f2;
        transition: max-height .3s ease-in-out;
    }
    .h-nav-l-row{
        overflow-x:auto ;
        display: -webkit-box;
        justify-content: left;

    }
    .h-nav-item{
        padding:0 0.13rem;
    }
    .h-nav-item span{
        display: block;
        width: auto;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.13rem;
    }
    .cheched_item{
        border-bottom: 0.01rem solid #ff6700;
        color: #ff6700;
    }
    .tip{
        transform: rotate(180deg);
        /*transition: max-height .3s ease-in-out;*/
    }
    .h-nav-l-list{
        padding-left:0.1rem;
        transition: max-height 3s ease-in-out;
    }
    .h-nav-l-list h4{
        padding-top: .05rem;
        padding-left: 0.2rem;
        font-size: 0.14rem;
        text-align: left;
        margin-bottom: 0.34rem;
        margin-top: 0.13rem;
        font-size: 0.14rem;
        color: #3c3c3c;
    }
    .h-nav-l-list-n{
        display: flex;
        justify-content: left;
        flex-wrap:wrap ;
    }
    .nav-b{
        width: .79rem;
        height: .29rem;
        background-color: #fff;
        color: #3c3c3c!important;
        text-align: center;
        line-height: .29rem;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        margin: 0 0.1rem 0.12rem 0;
        padding: 0!important;
    }
    .nav-b span{
        height: .29rem;
        border: none;
        font-size: .13rem;
        line-height: .29rem;
    }
    .checked_list{
        text-align: center;
        line-height: .29rem;
        width: .79rem;
        height: .29rem;
        background-color: #fde0d5;
        border-color: #ff6700;
        color: #ff6700;
        border-radius: 4px;
    }
    .mask{
        width: 100%;
        height: 800%;
        position:absolute;
        background-color: rgba(0,0,0,.3);
    }
    .h-nav-show-more{
        position: absolute;
        right: 0;
        top: 0.1rem;
        z-index: 101;
        height:0.25rem ;
        width: 0.35rem;
    }

    .empty{
        height: .25rem;

    }
    /*去滚动条*/
    .h-nav-l-row::-webkit-scrollbar{
        display: none;
    }

    .nav-show{
        position: fixed;
        /*top: 0rem;*/
        right: 0;
        width: .35rem;
        height: .2865rem;
        line-height: .2865rem;
        background-color: #f2f2f2;
        box-shadow: -15px 0 15px 0 #f2f2f2;
        z-index: 199;
    }
    .nav-show img{
        width: 70%;
    }
</style>