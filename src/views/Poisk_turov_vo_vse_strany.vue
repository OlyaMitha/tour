<template>
    <div class="poisk">
        <h1></h1>
        <Tours/>
    </div>
</template>
<script>

    import Tours from '@/components/Poisk_turov_vo_vse_strany.vue';
    export default {
        name: 'Poisk_turov_vo_vse_strany',
        components: {
           Tours,
        },

    }

</script>
<style lang="scss">
    .poisk{
        margin:-10px;
    }

</style>
