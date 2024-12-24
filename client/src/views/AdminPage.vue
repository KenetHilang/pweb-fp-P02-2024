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
    <div>
        <!-- FullView Section -->
        <div class="mb-4 mt-10">
            <h1 class="font-bold text-3xl mb-2 text-center text-black md:text-slate-50">List of Items Available</h1>
            <FullView />
        </div>

        <!-- Open Form Button -->
        <button class="tombol" @click="toggleForm">+</button>

        <!-- AddForm Component -->
        <AddForm v-if="formActive" :onClose="closeForm" />
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
</style>
