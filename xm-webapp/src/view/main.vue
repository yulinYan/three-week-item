<template>
    <div>

        <router-view></router-view>
        <xm-footer></xm-footer>
    </div>
</template>

<script>

    import footer from "../components/footer";
    export default {
        name: "vmain",
        components:{
            'xm-footer':footer,
            // eslint-disable-next-line vue/no-unused-components

        }
    }
</script>

<style scoped>

</style>