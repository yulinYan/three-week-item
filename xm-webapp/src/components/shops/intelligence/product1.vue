<template>
    <div class="product1" v-if="data">
        <div class="pic">
            <img :src="data.pic" alt="">
            <img id="show"  v-if="data.discount" :src="data.discount">
        </div>
<!--        <div class="discount"></div>-->
        <div class="product1-b">
            <p class="edition">{{data.title}}</p>
            <p class="l-product">{{data.desc}}</p>
            <p class="price">￥<span>{{data.price}}</span>起<span>￥<span class="old_price">{{data.oldPrice}}</span></span></p>
            <br/>
            <a href="#" class="buy_now">立即购买</a>
        </div>
<!--        <div class="empty"></div>-->
    </div>
</template>

<script>
    export default {
        name: "product1",
        props:['data','sid']
    }
</script>

<style scoped>
.product1{
    background-color: #fff;
    width: 1.78rem;
    margin-right:0.06rem;
    position: relative;
    /*height: 1.45rem;*/
    /*padding:0.04rem 0.06rem;*/
    /*margin-top: 0.0346rem;*/}
.pic{
    width: 1.78rem;
    height: 1.45rem;
    position: relative;
    /*margin-right:0.12rem;*/
}
.pic img{
    width: 100%;
    height: 100%;
}
/*.empty{*/
/*    width: 100%;*/
/*    height: 1rem;*/
/*    background-color: #F56D02;*/
/*}*/
.edition{
    font-size: .14rem;
    color: rgba(0,0,0,0.87);
}
.product1-b{
    padding: .2rem .27rem;
}
.l-product{
    font-size: .12rem;
    margin: 0.03rem 0 0;
    color: rgba(0,0,0,0.54);
}
.price{
    font-size: .14rem;
    color: #ea625b;
    height: 1.5em;
    line-height: 1.5em;
    /*position: relative;*/
    display: inline-block;

}
.old_price{
    font-size: 0.12rem;
    text-decoration: line-through;
    color: #999;
}
.buy_now{
    width: 1.04rem;
    height: 0.3rem;
    line-height: 0.3rem;
    background: #ea625b;
    border-radius: .05rem;
    text-align: center;
    color: #fff;
    font-size: .15rem;
    /*padding: .08rem 0;*/
    font-weight: 500;
    margin: 0 auto;
    display: block;
}
#show{
    display: block;
    width:0.52rem;
    height: 0.52rem;
    position: absolute;
    right: 0;
bottom: 0;
}
#show img{
    width: 100%;
    height: 100%;
}
</style>