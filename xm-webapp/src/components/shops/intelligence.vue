<template>
    <div>
        <intelligence-banner v-if="data" :data="data"></intelligence-banner>
         <intelligence_list v-if="data" :data="data.listPic"></intelligence_list>
    </div>
</template>

<script>
    import banner from "./intelligence/banner";
    import intelligence_list from "./intelligence/intelligence_list";
    export default {
        name: "intelligence",
        components:{
            "intelligence-banner":banner,
            // eslint-disable-next-line vue/no-unused-components
            intelligence_list,
            // eslint-disable-next-line vue/no-unused-components

    },
        props:['data']

    }
</script>

<style scoped>

</style>