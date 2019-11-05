<template>
    <div class="list-boss">
<!--        // eslint-disable-next-line vue/no-unused-vars-->
        <router-link class="list" to="#" v-for="n in 10" :key="n"><img src="../../../assets/images/home/list3.gif"></router-link>
    </div>
</template>

<script>
    export default {
        name: "intelligence_list",
        // data(){
        //     return{
        //         pic:[
        //
        //         ]
        //     }
        // }

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
</style>