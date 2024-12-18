<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
    name: 'FullView',
    setup() {
        const Items = ref([]);

        // Function to format timestamps
        const formatDate = (apiTimestamp) => {
            const date = new Date(apiTimestamp);

            const day = date.getUTCDate();
            const month = date.toLocaleString('en-US', { month: 'long', timeZone: 'UTC' });
            const year = date.getUTCFullYear();
            const hours = String(date.getUTCHours()).padStart(2, '0');
            const minutes = String(date.getUTCMinutes()).padStart(2, '0');

            return `${day} ${month} ${year} at ${hours}:${minutes}`;
        };

        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:4000/admin');
                if (result.data && result.data.data) {
                    Items.value = result.data.data.map(item => ({
                        ...item,
                        created_at: formatDate(item.created_at)
                    }));
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
    <div class="md:columns-2 columns-1">
        <div v-for="item in Items" :key="item._id" class="rounded-lg shadow mb-5 bg-neutral-900 hover:border-current transition-all hover:bg-gray-800 ">
                <img class="rounded-t-lg" :src="item.pic" alt="Item image" />
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.name }}</h5>
                <p class="text-xl text-gray-700 dark:text-gray-400">Amount: {{ item.amount }}</p>
                <p class="text-xl text-gray-700 dark:text-gray-400">Condition: {{ item.condition }}</p>
                <p class="text-xl text-gray-700 dark:text-gray-400">Registered At: {{ item.created_at }}</p>
            </div>
        </div>
    </div>
</template>
