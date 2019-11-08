<template>
<div class="shop_boss" v-if="data">
    <div class="list-boss" >
<!--        // eslint-disable-next-line vue/no-unused-vars-->
        <a  class="list" href="#" :key="h" v-for="(n,h) in 10" >
            <img  :src="data.listImg[h].name"/>
        </a>
    </div>
<!--    list下面的图片区-->
    <div>
        <div class="adv-img">
            <div class="adv">
                <div class="adv-1"><img :src="data.adv[0].name" alt=""></div>
                <div class="adv-2">
                    <div class="adv-2-s"><img :src="data.adv[1].name" alt=""></div>
                    <div class="adv-2-s"><img :src="data.adv[2].name" alt=""></div>
                </div>
            </div>
                <div class="adv-3"><img :src="data.adv[3].name" alt=""></div>
                <div class="adv-4"><img :src="data.adv[4].name" alt=""></div>

<!--            这里是小商品-->
            <div class="product-shop" >
                <xm-product1 :data="data.product1[h]" :sid="h" v-for="(n,h) in 4" :key="h"></xm-product1>
            </div>
        </div>
    </div>
    <!--    list下面的图片区结束-->
    <div class="footer_empty"></div>
</div>
</template>

<script>
    import product1 from "./product1";
    export default {
        name: "intelligence_list",
        // data(){
        //     return{
        //         pic:[
        //             {url:'../../../'},
        //             {url:'@/assets/images/home/list2.webp'},
        //             {url:'@/assets/images/home/list3.gif'},
        //             {url:'@/assets/images/home/list4.webp'},
        //             {url:'@/assets/images/home/list5.webp'},
        //             {url:'@/assets/images/home/list6.png'},
        //             {url:'@/assets/images/home/list7.png'},
        //             {url:'@/assets/images/home/list8.png'},
        //             {url:'@/assets/images/home/list9.png'},
        //             {url:'@/assets/images/home/list10.png'},
        //         ]
        //     }
        // },
        components:{
            'xm-product1':product1,
            // eslint-disable-next-line vue/no-unused-components

        },
        props:['data']

    }
</script>

<style scoped>
.list-boss{
     display: flex;
     flex-wrap: wrap;

 }
.list{
    width:0.75rem;
    height: 0.79rem;
}
.list img{
    display: block;
    width: 100%;
    height: 100%;
}

/*list下面广告商品*/
.adv{
    display: flex;
    justify-content: space-between;
    width: 100%;

}
.adv-1{
    width:50%;
    height: 2.64rem;
    background-color: #F56D02;
}
.adv-img img{
    display: block;
    width: 100%;
    height: 100%;
}
.adv-2{
    width:50%;
    height: 2.64rem;

}
.adv-2-s{
    width: 100%;
    height: 50%;
    background-color:yellowgreen;
    border: none;
}
.adv-3{
    width: 100%;
    height: 1.45rem;
    background-color:firebrick ;
}
.adv-4{
    width: 100%;
    height: 2.29rem;
    background-color: yellow;
}
.product-shop{
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    padding:0.04rem 0 0.06rem 0.06rem;
}
.shop_boss{
    background-color: #fff;
}
    .footer_empty{
        width: 100%;
        height: .5rem;
    }
</style>