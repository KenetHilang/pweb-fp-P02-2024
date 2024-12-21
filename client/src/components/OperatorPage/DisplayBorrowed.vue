<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
    name: 'DisplayBorrowed',
    setup() {
        const borrowedItems = ref([]);
        const error = ref('');
        const loading = ref(true);

        const fetchBorrowedItems = async () => {
            loading.value = true;
            try {
                const result = await axios.get('http://localhost:4000/operator/all-equipment/borrows');
                if (result.data && result.data.data) {
                    borrowedItems.value = result.data.data;
                } else {
                    error.value = 'Data not in expected format.';
                }
            } catch (err) {
                error.value = 'Error fetching data. Please try again later.';
            } finally {
                loading.value = false;
            }
        };

        onMounted(() => {
            fetchBorrowedItems();
        });

        return {
            borrowedItems,
            error,
            loading
        };
    }
};
</script>

<template>
    <div class="container mx-auto px-4 py-8">
        <h2 class="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Borrowed Items List</h2>

        <!-- Loading state -->
        <div v-if="loading" class="flex justify-center items-center">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>

        <!-- Error state -->
        <div v-if="error" class="text-red-500 text-center mb-4">
            {{ error }}
        </div>

        <!-- Table -->
        <div v-if="!loading && borrowedItems.length" class="overflow-x-auto">
            <table class="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                <thead class="bg-gray-100 dark:bg-gray-700">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Item Name
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Amount
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Borrower
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Officer
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Borrow Date
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Return Date
                        </th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-600">
                    <tr v-for="item in borrowedItems" :key="item._id" class="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                            {{ item.item_name }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                            {{ item.amount }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                            {{ item.borrower_name }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                            {{ item.officer_name }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                            {{ new Date(item.borrow_date).toLocaleDateString() }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                            {{ new Date(item.return_date).toLocaleDateString() }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Empty state -->
        <div v-if="!loading && !borrowedItems.length" class="text-center text-gray-500 dark:text-gray-400">
            No items are currently borrowed.
        </div>
    </div>
</template>
