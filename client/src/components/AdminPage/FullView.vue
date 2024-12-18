<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
    name: 'FullView',
    setup() {
        const Items = ref([]);

        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:4000/admin');
                if (result.data && result.data.data) {
                    Items.value = result.data.data;
                } else {
                    console.error("Data not in expected format");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();

        return { Items };
    }
};
</script>

<template>
    <div class="columns-4">
        <div v-for="item in Items" :key="item._id" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
            <a v-if="item.pic" href="#">
                <img class="rounded-t-lg" :src="item.pic" alt="Item image" />
            </a>
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.name }}</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Amount: {{ item.amount }}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Condition: {{ item.condition }}</p>
            </div>
        </div>
    </div>
</template>



