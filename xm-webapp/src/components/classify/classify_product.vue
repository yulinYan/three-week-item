<template>
    <div class="boss" v-if="data">
        <div class="classify_list">
            <ul class="list-ul">
                <li class="list_title"><span>新品</span></li>
<!--                :class="index==0?'catgCurrent':''"-->
                <li class="xm_type catg-list-nav-cur"  v-for="(n,index) in data.xm_type" :key="index">{{n.name}}</li>
            </ul>
        </div>
        <div class="classify_product">
            <div class="classify_product_s" >
                <div class="right catg-item-main" v-for="(item,index) in data.product"  :key="index">
                    <div>
                        <img :src="data.title_pic">
                    </div>
                    <div v-for="(n,index) in data.xm_type" :key="index">
                        <div class="type" >
                            <span >{{item.title}}</span>
                        </div>
                        <div class="adv_product">
                            <div class="adv_product_s" v-for="(n,h) in item.goods" :key="h">
                                <img :src="n.pic" alt="">
                                <p class="adv_product_p">{{n.dec}}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    </div>
</template>

<script>
    // eslint-disable-next-line no-unused-vars
    import $ from 'jquery'
    export default {
        name: "classify_product",
        data(){
            return{
                 scroll:'',
                // top:'',
                length:''

            }
        },
        props:['data'],
        methods:{
            dataScroll: function () {
                this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
                console.log(666)

            },
            _getType_title:function () {
                console.log(888)
                let top=document.getElementsByClassName("type");
                for(let i=0;i<top.length;i++){
                    this.length = top[i].offsetTop;
                    console.log(this.length)
                    // eslint-disable-next-line no-unused-vars
                    var $navs = $(".catg-list-nav-cur");
                    // eslint-disable-next-line no-empty
                    if(this.length<500){
                        $navs.eq(i).addClass("catgCurrent").siblings().removeClass("catgCurrent")
                    }
                }
            }

            // loadSroll: function () {
            //     var self = this;
            //     // eslint-disable-next-line no-undef
            //     var $navs = $(".catg-list-nav-cur");
            //     // eslint-disable-next-line no-console
            //     console.log($navs)
            //     var sections = document.getElementsByClassName('catg-item-main');
            //     for (var i = sections.length - 1; i >= 0; i--) {
            //         if (self.scroll >= sections[i].offsetTop - 100) {
            //             $navs.eq(i).addClass("current").siblings().removeClass("current")
            //             break;
            //         }
            //     }
            // }
        },
        // watch: {
        //     scroll: function () {
        //         this.loadSroll()
        //     }
        // },
        // mounted() {
        //     window.addEventListener('scroll', this.dataScroll);
        // }

        watch: {
            length: function () {
                    this._getType_title()

                }

            },

            mounted() {
                window.addEventListener('length',this._getType_title);
                console.log(222)
                console.log(this.length)
                this._getType_title
            }
    }
</script>

<style scoped>
.boss{
    background-color: #ffffff;
    font-size: 0;
    width: auto;
    height: auto;
    margin-top: 0.5rem;
    overflow: hidden;
}
.classify_list{
    width: 0.78rem;
    border-right: 0.01rem solid #efefef;
    /*height: 8rem;*/
    overflow-y: auto;
    height: calc(100vh - 0.44rem);
    float: left;
    position: fixed;
}
.list-ul li{
    font-size:0.12rem ;
    height: 0.35rem;
    line-height: 0.35rem;
    text-align: center;
    margin-bottom: 0.1rem;
}
.list_title{
    font-size: .16rem!important;
    color: #F56D02;
    margin-top: 0.1rem;
}

/*------------------------------------------------*/
.classify_product{
    width: 2.95rem;
    /*height: 10rem;*/
    overflow-y: auto;
    height: calc(100vh - 0.44rem);
    float: right;
    box-sizing: border-box;
    overflow: auto;
    z-index: -1;
}
.classify_product_s img{
    padding: 0 0.16rem 0 0.1rem;
    width: 2.62rem;
    height: 1.04rem;
}

.type{
    background: #fff;
    font-size: .14rem;
    text-align: center;
    font-weight: 400;
    margin-top: .1rem;
    height: 0.64rem;
    /*width: 2.62rem;*/
    line-height: 0.64rem;
    overflow: hidden;
}


.type span{
position: relative;
}
.type span::before{
    content: "";
    position: absolute;
    top: 50%;
    left: 0;

    width: .2rem;
    border-top: 0.01rem solid #e0e0e0;
    transform: translate3d(-150%,-50%,0);
    -webkit-transform: translate3d(-150%,-50%,0);
}
.type span::after{
    left: auto;
    right: -0.6rem;
    right: -0.6rem;
    content: "";
    position: absolute;
    top: 50%;
    width: .2rem;
    border-top: 0.01rem solid #e0e0e0;
    transform: translate3d(-150%,-50%,0);
    -webkit-transform: translate3d(-150%,-50%,0);
}
.adv_product{
    width: 2.62rem;
    margin: 0 auto;
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
}
.adv_product_s{
    width: 0.87rem;
    height: 0.80rem;
    text-align: center;
}
.adv_product_s img{
    width: 0.52rem;
    height: 0.52rem;
    margin: 0 auto;
}
.adv_product_p{
    margin-top: 0.14rem;
    font-size: 0.12rem;
    color: rgba(0,0,0,0.54);
    overflow: hidden;
}
/*.catg-list-right{*/
/*   */
/*}*/
.catg-item-main{
    position: relative;
}
.catgCurrent{
    color:#F56D02!important;
}
</style>