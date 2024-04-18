<script setup lang="ts">
import { useLoanStore } from '../stores/LoanStore'
const ls = useLoanStore()
ls.fillPeriods()

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
      <option
        v-for="period in ls.periods"
        :key="period.value"
      >
        {{ period.label }}
      </option>
    </select>
  </div>
</template>
<style scoped></style>
