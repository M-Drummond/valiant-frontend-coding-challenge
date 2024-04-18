<script setup lang="ts">
defineProps({
  loanPeriods: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-row items-center justify-center">
    <label
      for="LoanAmount"
      class="mr-2 shrink-0"
    >
      repaid
    </label>
    <select class="form-input">
      <option v-for="period in loanPeriods" :key="period.id">
        {{ period.name }}
      </option>
    </select>
  </div>
</template>
<style scoped></style>
