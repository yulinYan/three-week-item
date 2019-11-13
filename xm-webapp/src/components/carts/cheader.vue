<template>
    <div class="c_boss">
        <div class="back"><img src="../../assets/images/classify/top-more.png" alt=""></div>
        <div class="text"> 购物车</div>
        <div class="seach"><img src="../../assets/images/classify/search.png" alt=""></div>

    </div>
</template>

<script>
    export default {
        name: "cheader"
    }
</script>

<style scoped>
.c_boss{
    position: fixed;
    top: 0;
    height: 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 0.1rem;
    background-color: #F2F2F2;
}
.back img{
    width: 0.26rem;
    height: 0.26rem;
    transform: rotate(90deg);
}
.seach img{
    width:0.31rem;
    height: 0.31rem;
}
.text{
    font-size: 0.15rem;
    width: 3rem;
}
</style>