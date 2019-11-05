<template>
    <div>
        <intelligence-banner></intelligence-banner>
         <intelligence_list></intelligence_list>
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
            intelligence_list
        }
    }
</script>

<style scoped>

</style>