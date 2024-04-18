<script setup lang="js">

import { useLoanStore } from '../stores/LoanStore'

const ls = useLoanStore()

ls.fillTerms()

</script>

<template>
  <div class="form-input-container">
    <label
      for="LoanAmount"
      class="form-label"
    >
      over
    </label>
    <select
      v-model="ls.selectedTerm"
      class="form-input"
    >
      <option
        v-for="term in ls.terms"
        :key="term.value"
        :value="term"
      >
        {{ term.label }}
      </option>
    </select>
  </div>
</template>
<style scoped></style>
