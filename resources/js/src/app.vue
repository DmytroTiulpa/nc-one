<!--
<script setup>

</script>

<template>

</template>

<style scoped>

</style>
-->

<template>
    <h1>Привет {{ username }}!</h1>
</template>

<script>
    import {defineComponent} from "vue";

    export default defineComponent({
        components: {},
        setup() {
            return {
                username: 'dimon'
            };
        },
    });
</script>

<style scoped>

</style>
