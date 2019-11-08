<template>
    <div>
        <xm-classify-header></xm-classify-header>
        <xm-classify-product v-if="classifyInit" :data="classifyInit.classify"></xm-classify-product>
    </div>
</template>

<script>
    import homeApi from "../apis/homeApi";
    import header from "../components/classify/header";
    import classify_product from "../components/classify/classify_product";
    export default {

        name: "classify",
        data(){
            return{
                classifyInit:[]
            }
        },
        components:{
            'xm-classify-header':header,
            // eslint-disable-next-line vue/no-unused-components
            'xm-classify-product':classify_product
        },
        beforeMount () {
            this._initClassify()
        },
        methods: {
            /**
             * 页面的数据加载
             **/
            async _initClassify(){
                // eslint-disable-next-line no-undef
                let data = await homeApi.getHomeInfo();
                this.classifyInit = data;
                console.log(data)
            }
        }

    }
</script>

<style scoped>

</style>