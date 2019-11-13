<template>
    <div>
        <div class="free" v-show="flag" >
            <router-link to="/main/home">
                <span class="free-s">购物车还是空的</span>
                <span class="go_see">去逛逛</span>
            </router-link>
        </div>
        <div class="cart_product" v-show="!flag"  v-for="(pp,nn) in data" :key="nn">
            <div class="checked">
                <input type="checkbox">
            </div>
            <div  class="img"><img v-if="pp.pic" :src="pp.pic"></div>
<!--            ../../assets/logo.png" alt="-->
            <div class="desc">
                <p>{{pp.desc}}</p>
                <p class="price">￥<span>{{pp.price}}</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "c_product",
        props:['data'],
        data(){
            return{
                flag:true
            }
        },
        watch:{
          data:{
              handler:function (n) {
              let a=n;
              console.log(a)
                  if(a.length>0){
                      this.flag=false
                  }

          },
              deep:true
          }

        },
        // beforeMount() {
        //     this.listen()
        //
        // }
    }
</script>

<style scoped>
.free{
    width: 100%;
    height: 0.62rem;
    background-color: #EBEBEB;
    padding: 0.1rem;
    line-height: 0.62rem;
}
    .free-s{
        display: inline-block;
        padding: 0 0.08rem 0 0.6rem;
        font-size: 0.13rem;
        color: rgba(0,0,0,0.27);
        background-image: url("../../assets/images/cart/cart1.png");
        background-repeat: no-repeat;
        background-size: auto 100%;
    }
    .go_see{
        display: inline-block;
        border: 0.01rem solid #999;
        height: 0.2rem;
        line-height: 0.2rem;
        padding: 0 0.1rem;
        border-radius: 0.03rem;

    }
    .cart_product{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;

    }
    .img{
        width: 0.5rem;
        height: 0.5rem;

    }
    .img img{
        width: 100%;
        height: 100%;
    }
</style>