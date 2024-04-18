<script setup lang="js">
import { useLoanStore } from '../stores/LoanStore'

const ls = useLoanStore()

</script>

<template>
  <div class="form-input-container">
    <label
      for="LoanAmount"
      class="form-label"
    >
      I need
    </label>
    <input
      id="LoanAmount"
      v-model="ls.loanValue"
      placeholder="$30 000"
      type="text"
      pattern="[0-9]*"
      class="form-input"
    >
  </div>
</template>
