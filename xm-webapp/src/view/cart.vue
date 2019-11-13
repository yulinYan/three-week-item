<template>
    <div class="cart_boss">
        <c_header></c_header>
        <a href="#/login"  class="header2" >
            <span class="header2_l">登录后享受更多优惠</span>
            <span class="go_login">去登录</span>
        </a>
        <div>
<!--            添加进来的商品-->
            <div >
             <c_product   :data="list" ></c_product>
<!--                v-for="(pp,nn) in list"-->
            </div>
<!--            v-for="(partdata,index) in list" :pid="index" :data="partdata" :key="index"-->
        </div>
        <div class="your_love">
            <div class="your_love_title">
                <img src="../assets/images/cart/cart2.jpg" alt="">
            </div>
            <div class="love_product_boss">
                <a :href="'#/dist'+n.pid" class="love_product" :key="index" v-for="(n,index) in C_cartInfo.your_love" >
                    <div class="img">
                        <img :src="n.pic" alt="">
                    </div>
                    <div class="messiage">
                        <p class="desc">{{n.desc}}</p>
                        <p class="price">￥<span>{{n.price}}</span></p>
                    </div>
                </a>
            </div>
        </div>
        <div class="empty"></div>

    </div>
</template>

<script>
    import cheader from "../components/carts/cheader"
    import c_product from "../components/carts/c_product"
    import homeApi from "../apis/homeApi";
    import { mapGetters } from 'vuex';
    export default {
        name: "cart",
        components: {
            // eslint-disable-next-line vue/no-unused-components
            'c_header': cheader,
            // eslint-disable-next-line vue/no-unused-components
            c_product
        },
        // ------------------------------------------------------------
        computed: {
            ...mapGetters({
                cartInfo: 'GETCART'
            })
        },
        // ----------------------------------------------------------------
        data() {
            return {
                C_cartInfo: [],
                // redbac:"check",
                // flag:true,
                // buydata: "",
                // partdata: "",
                list:[]
            }
        },
        props: ['pid'],

        methods: {
            /**
             * 页面的数据加载
             **/
            async _initPageData() {
                // eslint-disable-next-line no-undef
                let data = await homeApi.getHomeInfo();
                this.C_cartInfo = data.cart;
                console.log(data);

                // --------------------------------------------------
                for (let i = 0; i < this.cartInfo.length; i++) {
                    this.C_cartInfo.your_love.forEach((product) => {
                        if (product.pid == this.cartInfo[i]) {
                            // this.partdata = product;
                            this.list.push(product)


                        }
                    })

                }
            },
            // updatadata(a) {
            //     this.buydata = a
            //     console.log(this.buydata)
            //     // alert(this.buydata)
            //
            // }

        },
        beforeMount() {
            this._initPageData();
            // this.$cart.$on("ca", this.updatadata)
        }
    }
</script>

<style scoped>
.cart_boss{
    width: 100%;
    overflow: hidden;
}
.header2{
    width:100%;
    margin-top: 0.5rem;
    display: block;

    height: 0.54rem;
    line-height: 0.54rem;
    /*padding:0 0.3rem 0 0.16rem;*/


}
    .header2_l{
        font-size: 0.14rem;
        float: left;
margin-left: 0.16rem;
    }
    .go_login{
        font-size: 0.12rem;
        color: #999;
        float: right;
        margin-right: 0.3rem;
        position: relative;
    }
.go_login::after{
    content: "";
    position: absolute;
    right: -0.1rem;
    top: 50%;
    /*width: 0.08px;*/
    width: .08rem;
    /*height: 0.08px;*/
    height: .08rem;
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0,-50%,0) rotate(135deg);
    -webkit-transform: translate3d(0,-50%,0) rotate(135deg);
}
    .your_love img{
        width: 100%;
        height: 0.625rem;
    }
    .img img{
        display: block;
        width: 1.85rem;
        height: 1.85rem;
        margin: 0;
        padding: 0;
    }
    .messiage{
        width: 1.85rem;
        /*height: ;*/
        /*padding: 0.09rem 0 0.13rem 0.11rem ;*/

    }
    .desc{
        width: 1.65rem;
        color: #3c3c3c;
        font-size: 0.14rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 0.1rem;
    }
    .price{
        font-size: 0.16rem;
        color: #ff6700;
        text-align: left;
        padding-left: 0.1rem;
    }
    .love_product_boss{
        display: flex;
        justify-content: space-between;
        flex-wrap:wrap ;
    }
    .empty{
        height: 1rem;
        width: 100%;

    }
</style>