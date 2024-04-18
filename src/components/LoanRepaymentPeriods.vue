<script setup lang="ts">
defineProps({
  loanPeriods: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="form-input-container">
    <label
      for="LoanAmount"
      class="form-label"
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
