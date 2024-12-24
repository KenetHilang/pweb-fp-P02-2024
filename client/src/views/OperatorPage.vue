<script>
import OperatorView from '@/components/Operator/OperatorView.vue';
import OperatorAdd from '@/components/Operator/OperatorAdd.vue';

    export default {
        name: 'OperatorPage',
        components: {
            OperatorView,
            OperatorAdd,
        },
        data() {
            return {
                formActive: false,
            };
        },
        methods: {
            toggleForm() {
                this.formActive = !this.formActive;
            },
            closeForm() {
                this.formActive = false;
            },
        },
    };
</script>

<template>
    <h1 class="font-bold text-3xl mb-2 text-center text-black md:text-slate-50">
        List of Operators
    </h1>
    <OperatorView />

    <button class="tombol" @click="toggleForm">+</button>
    <OperatorAdd v-if="formActive" @close="closeForm" />
    
</template>

<style>
.tombol {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #4CAF50;
    color: white;
    text-align: center;
    font-size: 30px;
}
</style>