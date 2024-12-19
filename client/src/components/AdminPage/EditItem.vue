<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
    name: 'EditItem',
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const item = ref(null);
        const form = ref({
            pic: '',
            name: '',
            amount: '',
            condition: '',
        });

        const fetchItem = async () => {
            try {
                const result = await axios.get(`http://localhost:4000/admin/${props.id}`);
                item.value = result.data;
                form.value = { ...item.value };
            } catch (error) {
                console.error('Error fetching item:', error);
            }
        };

        const submitForm = async () => {
            const updatedItem = {
                pic: form.value.pic,
                name: form.value.name,
                amount: form.value.amount,
                condition: form.value.condition,
            };

            try {
                await axios.patch(`http://localhost:4000/admin/${props.id}`, updatedItem);
                alert('Item updated successfully!');
            } catch (error) {
                console.error('Error updating item:', error);
                alert('Failed to update item. Please try again.');
            }
        };

        onMounted(() => {
            fetchItem();
        });

        return {
            item,
            form,
            submitForm,
        };
    },
};
</script>

<template>
    <div class="overlay">
        <div class="form md:w-2/4 w-5/6">
            <button @click="$router.push('/admin')" class="close-button">X</button>
            <h1 class="mb-3 text-white text-center md:text-2xl text-xl">Edit Item</h1>

            <form @submit.prevent="submitForm">
                <div class="mb-5">
                    <label for="pic" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
                    <input
                        type="text"
                        id="pic"
                        v-model="form.pic"
                        placeholder="https://example.com/image.jpg"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        required
                    />
                </div>

                <div class="mb-5">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Name</label>
                    <input
                        type="text"
                        id="name"
                        v-model="form.name"
                        placeholder="Computer"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        required
                    />
                </div>

                <div class="mb-5">
                    <label for="amount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        v-model="form.amount"
                        placeholder="15"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        required
                        min="0"
                    />
                </div>

                <div class="mb-5">
                    <label for="condition" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Condition</label>
                    <select
                        id="condition"
                        v-model="form.condition"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        required
                    >
                        <option value="" disabled>Select Condition</option>
                        <option value="New">New</option>
                        <option value="Used">Used</option>
                        <option value="Bad">Bad</option>
                        <option value="Broken">Broken</option>
                    </select>
                </div>

                <button
                    type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Save Changes
                </button>
            </form>
        </div>
    </div>
</template>
