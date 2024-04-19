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
      v-model="ls.loanValue"
      type="text"
      class="hidden"
    >
    <input
      id="LoanAmountInputNumber"
      v-model="ls.loanValue"
      placeholder="$30 000"
      min="1000"
      max="20000000"
      type="number"
      autocomplete="false"
      pattern="[0-9]*"
      class="form-input"
      step="1000"
      required
      @input="ls.loanValueIsValid()"
    >
  </div>
</template>
