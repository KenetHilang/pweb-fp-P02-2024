<script>
import AddForm from '@/components/AdminPage/AddForm.vue';
import FullView from '@/components/AdminPage/FullView.vue';

export default {
    name: 'AdminPage',
    components: {
        FullView,
        AddForm,
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
    <div @click="closeForm" class="overlay" v-if="formActive"></div>
    <div>
        <h1 class="font-bold text-3xl mb-2 text-center text-black md:text-slate-50">List of Items Available</h1>
        <FullView />
    </div>
    <button class="tombol" @click="toggleForm">+</button>

    <div v-if="formActive" @click.stop>
        <button class="close-button" @click="closeForm">x</button>
        <AddForm />
    </div>
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

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1001;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #4CAF50;
    color: white;
    text-align: center;
    font-size: 20px;
    z-index: 1004;
}
</style>
