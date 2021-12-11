<template>
<div class="about">
    <h1></h1>
    <air/>
</div>
</template>
<script>

    import air from '@/components/Flights.vue';
    export default {
        name: 'Flights',
        components: {
            air,
        },

    }

</script>
<style lang="scss">
    .about{
    margin: -80px;
    }

</style>
