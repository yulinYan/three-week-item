<template>
    <div>
        <xm-footer></xm-footer>
        <router-view></router-view>

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