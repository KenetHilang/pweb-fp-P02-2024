<script>
import OperatorView from '@/components/OperatorPage/OperatorView.vue';

    export default {
        name: 'OperatorPage',
        components: {
            OperatorView,
        },
        data() {
            return {
            };
        },
        methods: {
        },
    }
</script>

<template>
    <h1 class="font-bold text-3xl mb-2 text-center text-black md:text-slate-50">
        List of Operators
    </h1>
    <OperatorView />
    
</template>

<style>

</style>