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
    <!-- <span class="mr-2">$</span> -->
    <input
      id="LoanAmount"
      v-model="ls.loanValue"
      placeholder="$30 000"
      type="text"
      autocomplete="false"
      pattern="[0-9]*"
      min="0"
      class="form-input"
    >
  </div>
</template>
