<script setup lang="js">
import { useLoanStore } from '../stores/LoanStore'
const ls = useLoanStore()
ls.fillPeriods()

</script>

<template>
  <div class="form-input-container">
    <label
      for="LoanPeriod"
      class="form-label"
    >
      repaid
    </label>
    <select
      id="LoanPeriod"
      v-model="ls.selectedPeriod"
      class="form-input"
    >
      <option
        v-for="period in ls.periods"
        :key="period.value"
        :value="period"
      >
        {{ period.label }}
      </option>
    </select>
  </div>
</template>
<style scoped></style>
