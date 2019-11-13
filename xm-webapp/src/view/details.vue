<template>
    <div>
        <div class="top">
            <img :src="detaildata.pic" alt="">
            <div class="active">
                <div class="active_padding">
                    <span class="active1">预约中</span><span class="active2">距离活动结束 1天</span>
                </div>
            </div>
        </div>
        <div class="desc">
            <div class="desc1">
                <span><img src="../assets/images/details/datails2.png" alt=""></span>
                Redmi Note 8 Pro
            </div>
            <div class="desc2">
                <span class="desc2_detail">
                    <span class="desc2_detail_1">
<!--                        「立即预约中，11月11日6GB+128GB闪降200元，到手价仅需1399元」-->
                        {{detaildata.detail_1}}
                    </span>
<!--                    6400万旗舰级全场景四摄 / 前置2000万 AI美颜相机 / G90T专业游戏芯片，-->
<!--                    液冷散热 / 6.53英寸水滴全面屏 / 4500mAh大电量 / 标配18W快充 / 康宁-->
<!--                    大猩猩保护玻璃 / 多功能NFC / 红外遥控功能 / Game Turbo2.0游戏加速-->
                    {{detaildata.detail_2}}
                </span>
            </div>
            <div class="price">￥<span>{{detaildata.price}}</span></div>
        </div>
        <footer>
            <div class="footer">
                <!--        切换图片   利用三目用算-->
                <router-link to="/main/home">
                    <span class="icon iconfont icon-index"><img src="../assets/images/footer1-f.png"></span>首页
                </router-link>
                <router-link to="/main/cart">
                    <span class="icon iconfont icon-index"><img src="../assets/images/footer3-f.png"></span>购物车
                </router-link>
                <a class="buy_now" href="#/main/cart"   @click="cpp">立即预约</a>



            </div>
        </footer>
    </div>
</template>

<script>
    import homeApi from "../apis/homeApi";

    export default {
        name: "dist",
        data(){
          return{
              data:[],
              detaildata:[],
              id:''
          }



        },
        beforeMount() {
            this._datailInft()

        },
        methods:{

            async _datailInft() {
                let datas = await homeApi.getHomeInfo();
                this.data = datas.cart;
                let a = this.$route.params.id;
                this.id=a;
                if (this.data.your_love) {
                    this.data.your_love.forEach((product) => {
                            if (product.pid == a) {
                                this.detaildata = product;
                            }

                    })
                }
            },

            // -------------------------------------------------------------------
            cpp(){
                // this.$cart.$emit("ca", this.detaildata.pId)
                this.$store.dispatch('INITCART',this.id)
                console.log('waw')
            }
            // onClickCart () {
            //     this.$router.push('carts')
            // },
        }

    }
</script>

<style scoped>
.top img{
    width: 100%;
    height: 4.12rem;
    display: block;
}
    .active{
        width: 100%;
        height: 0.5rem;
        background: #ff6700;

    }
    .active_padding{
        width: 90%;
        height: 100%;
        padding: 0 0.166rem;
        display: flex;
        justify-content: space-between;
        color: #FFF;
        font-size: 0.16rem;
        align-items: center;
    }
    .active2{
        font-size: 0.12rem;
    }

    /*下面描述*/
.desc1{
    font-size: 0.2rem;
    color: #3c3c3c;
    text-align: left;
    padding: 0.16rem 0.16rem 0;
}
    .desc1 img{
        width: 0.46rem;
        height: 0.22rem;
        display: block;
        margin-right: 0.05rem;
        float: left;
    }
.desc2{
    width: 90%;
    margin: 0 auto;
    text-align: left;
}
    .desc2_detail_1{
        color: #ff6700;
    }
.price{
    font-size: 0.2rem;
    color: #ff6700;
    text-align: left;
    margin-left: 0.16rem;
}



.footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    text-align: center;
    z-index: 100;
    align-items: center;
    background-color: #fff;
    padding-top: 0.05rem;
}
.footer span{
    display: block;
    width:0.2084rem;
    height: 0.2084rem;
    margin: 0 auto .1rem;
}
.footer img{
    display: block;
    width:0.2084rem;
    height: 0.2084rem;

}
.footer a.router-link-active{
    color: #F56D02;
}
.buy_now{
    width: 1.08rem;
    height: 0.3335rem;
    color: #ffffff;
    font-size: 0.14rem;
    line-height: 0.3335rem;
    display: block;
    border-radius: 0.1rem;
    background-color: #ff6700;
}
</style>