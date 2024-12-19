<script>
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';

export default {
    name: 'OperatorView',
    setup() {
        const operators = ref([]); 
        const error = ref(''); 
        const loading = ref(true); 

        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:4000/operator');
                if (result.data && result.data.data) {
                    operators.value = result.data.data;
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
            fetchData();
            const interval = setInterval(fetchData, 3000);
            onUnmounted(() => clearInterval(interval));
        });

        return {
            operators,
            error,
            loading,
        };
    },
};
</script>

<template>
    <div class="mt-6">
        <!-- Loading state -->
        <div v-if="loading" class="flex justify-center items-center">
            <div class="text-center">
                <svg
                    class="animate-spin h-10 w-10 text-blue-600 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                    ></circle>
                    <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 0112-7.32V4a10 10 0 00-10 10h2z"
                    ></path>
                </svg>
                <p class="mt-2 text-gray-500">Loading operators...</p>
            </div>
        </div>

        <!-- Error state -->
        <div v-if="error" class="text-red-500 text-center">
            {{ error }}
        </div>

        <!-- Operators List -->
        <div
            v-if="!loading && operators.length"
            class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
            <div
                v-for="operator in operators"
                :key="operator._id"
                class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full"
            >
                <div class="flex justify-end px-4 pt-4">
                    <button
                        id="dropdownButton"
                        class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                        type="button"
                    >
                        <span class="sr-only">Open dropdown</span>
                        <svg
                            class="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 3"
                        >
                            <path
                                d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
                            />
                        </svg>
                    </button>
                </div>

                <div class="flex flex-col items-center pb-10">
                    <img
                        class="sm:w-48 sm:h-48 object-cover mb-3 rounded-full shadow-lg w-36 h-36"
                        :src="operator.image || 'https://via.placeholder.com/150'"
                        :alt="operator.name"
                    />
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {{ operator.name }}
                    </h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                        {{ operator.Email }}
                    </span>
                    <div class="flex mt-4 md:mt-6">
                        <a
                            href="#"
                            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >Add friend</a
                        >
                        <a
                            href="#"
                            class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >Message</a
                        >
                    </div>
                </div>
            </div>
        </div>

        <!-- Empty state -->
        <p v-if="!loading && !operators.length" class="text-gray-500 text-center">
            No operators available.
        </p>
    </div>
</template>

<style>
.grid {
    row-gap: 1.5rem; 
}
</style>
