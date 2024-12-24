<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
    name: 'BorrowForm',
    setup() {
        const formData = ref({
            item_name: '',
            amount: '',
            return_date: '',
            borrower_name: '',
            officer_name: ''
        });
        const availableItems = ref([]); // Store available items
        const availableOfficers = ref([]); // Store available officers

        // Fetch available items
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:4000/operator/all-equipment');
                if (response.data && response.data.data) {
                    availableItems.value = response.data.data;
                }
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        // Fetch available officers
        const fetchOfficers = async () => {
            try {
                const response = await axios.get('http://localhost:4000/operator');
                if (response.data && response.data.data) {
                    availableOfficers.value = response.data.data;
                }
            } catch (error) {
                console.error('Error fetching officers:', error);
            }
        };

        // Update amount limits based on selected item
        const selectedItem = ref(null);
        const handleItemSelect = (itemName) => {
            selectedItem.value = availableItems.value.find(item => item.name === itemName);
            formData.value.item_name = itemName;
        };

        // Add function to format the current date and time
        const getCurrentDateTime = () => {
            const now = new Date();
            now.setHours(13, 0, 0); // Set time to 13:00:00
            now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
            // Format: YYYY-MM-DDThh:mm
            return now.toISOString().slice(0, 16);
        };

        const formatDateForInput = (date) => {
            const d = new Date(date);
            const year = d.getFullYear();
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const day = String(d.getDate()).padStart(2, '0');
            const hours = String(d.getHours()).padStart(2, '0');
            const minutes = String(d.getMinutes()).padStart(2, '0');
            return `${year}-${month}-${day}T${hours}:${minutes}`;
        };

        // Set minimum date to current date/time
        const minDateTime = getCurrentDateTime();

        onMounted(() => {
            fetchItems();
            fetchOfficers();
            formData.value.return_date = getCurrentDateTime();
        });

        const submitForm = async () => {
            try {
                if (!formData.value.return_date) {
                    alert('Please select both date and time');
                    return;
                }

                // Format the return_date before sending
                const formattedData = {
                    ...formData.value,
                    return_date: new Date(formData.value.return_date).toISOString()
                };
                
                const response = await axios.post('http://localhost:4000/operator/book-equipment', formattedData);
                console.log('Form submitted:', response.data);
                // Reset form after successful submission
                formData.value = {
                    item_name: '',
                    amount: '',
                    return_date: '',
                    borrower_name: '',
                    officer_name: ''
                };
                alert('Equipment booked successfully!');
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Error booking equipment. Please try again.');
            }
        };

        return {
            formData,
            submitForm,
            availableItems,
            handleItemSelect,
            selectedItem,
            availableOfficers,
            minDateTime,
            formatDateForInput
        };
    }
};
</script>

<template>
    <div class="max-w-2xl mx-auto p-6">
        <form @submit.prevent="submitForm" class="bg-white shadow-md rounded-lg p-8">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">Equipment Borrowing Form</h2>
            
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="item_name">
                    Equipment Name
                </label>
                <select 
                    id="item_name"
                    v-model="formData.item_name"
                    @change="handleItemSelect($event.target.value)"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                >
                    <option value="">Select an item</option>
                    <option v-for="item in availableItems" 
                            :key="item._id" 
                            :value="item.name">
                        {{ item.name }} (Available: {{ item.amount }})
                    </option>
                </select>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="amount">
                    Amount
                </label>
                <input 
                    type="number"
                    id="amount"
                    v-model="formData.amount"
                    :max="selectedItem?.amount || 1"
                    min="1"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
                <p v-if="selectedItem" class="text-sm text-gray-600 mt-1">
                    Maximum available: {{ selectedItem.amount }}
                </p>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="return_date">
                    Return Date and Time
                </label>
                <input 
                    type="datetime-local"
                    id="return_date"
                    v-model="formData.return_date"
                    :min="minDateTime"
                    step="60"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
                <p class="text-sm text-gray-600 mt-1">
                    Please select both date and time
                </p>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="borrower_name">
                    Borrower Name
                </label>
                <input 
                    type="text"
                    id="borrower_name"
                    v-model="formData.borrower_name"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>

            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="officer_name">
                    Officer Name
                </label>
                <select 
                    id="officer_name"
                    v-model="formData.officer_name"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                >
                    <option value="">Select an officer</option>
                    <option v-for="officer in availableOfficers" 
                            :key="officer._id" 
                            :value="officer.name">
                        {{ officer.name }}
                    </option>
                </select>
            </div>

            <div class="flex items-center justify-end">
                <button 
                    type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </div>
        </form>
    </div>
</template>
