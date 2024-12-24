<template>
  <div>
    <h1 class="font-bold text-3xl mb-4 text-center">Operator Dashboard</h1>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <h2 class="text-xl font-semibold mb-2">View Operators</h2>
        <OperatorView />
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-2">Add Operator</h2>
        <OperatorAdd />
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-2">Edit Operator</h2>
        <OperatorEdit />
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-2">Equipment List</h2>
        <DisplayEquipment />
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-2">Borrowed Items</h2>
        <DisplayBorrowed />
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-2">Borrow Form</h2>
        <BorrowForm />
      </div>
    </div>
  </div>
</template>

<script>
import BorrowForm from "@/components/Operator/BorrowForm.vue";
import DisplayBorrowed from "@/components/Operator/DisplayBorrowed.vue";
import DisplayEquipment from "@/components/Operator/DisplayEquipment.vue";
import OperatorAdd from "@/components/Operator/OperatorAdd.vue";
import OperatorEdit from "@/components/Operator/OperatorEdit.vue";
import OperatorView from "@/components/Operator/OperatorView.vue";

export default {
  name: "HomePageOperator",
  components: {
    BorrowForm,
    DisplayBorrowed,
    DisplayEquipment,
    OperatorAdd,
    OperatorEdit,
    OperatorView,
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>
