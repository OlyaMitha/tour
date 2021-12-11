<template>
    <div class="friend">
        <h1></h1>
        <cooperation/>
    </div>
</template>
<script>

    import Cooperation from '@/components/Agents.vue';
    export default {
        name: 'Agents',
        components: {
           Cooperation,
        },

    }

</script>
<style lang="scss">
    .friend{
      margin: -50p;
    }


</style>
