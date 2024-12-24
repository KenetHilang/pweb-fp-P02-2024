<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const equipments = ref([]);
const error = ref('');
const loading = ref(true);
const router = useRouter();

const fetchEquipments = async () => {
    loading.value = true;
    try {
        const result = await axios.get('http://localhost:4000/operator/all-equipment');
        if (result.data && result.data.data) {
            equipments.value = result.data.data;
        } else {
            error.value = 'Data not in expected format.';
        }
    } catch (err) {
        error.value = 'Error fetching data. Please try again later.';
    } finally {
        loading.value = false;
    }
};

const handleBorrow = (equipmentId) => {
    router.push({
        name: 'book-equipment',
        query: { equipmentId }
    });
};

onMounted(() => {
    fetchEquipments();
});
</script>

<template>
    <div class="container mx-auto px-4 py-8">
        <h2 class="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Available Equipment</h2>

        <!-- Loading state -->
        <div v-if="loading" class="flex justify-center items-center">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>

        <!-- Error state -->
        <div v-if="error" class="text-red-500 text-center mb-4">
            {{ error }}
        </div>

        <!-- Table -->
        <div v-if="!loading && equipments.length" class="overflow-x-auto">
            <table class="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                <thead class="bg-gray-100 dark:bg-gray-700">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Equipment
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Available Amount
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Condition
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-600">
                    <tr v-for="item in equipments" :key="item._id" class="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                                <img :src="item.pic" class="h-10 w-10 rounded-full mr-3" :alt="item.name">
                                <div class="text-sm font-medium text-gray-900 dark:text-gray-100">
                                    {{ item.name }}
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                            {{ item.amount }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                            {{ item.condition }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm">
                            <button 
                                @click="handleBorrow(item._id)"
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                :disabled="item.amount <= 0"
                            >
                                Borrow
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Empty state -->
        <div v-if="!loading && !equipments.length" class="text-center text-gray-500 dark:text-gray-400">
            No equipment available.
        </div>
    </div>
</template>
