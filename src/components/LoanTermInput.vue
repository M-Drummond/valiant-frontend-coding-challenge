<script setup lang="ts">

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
    <select class="form-input">
      <option
        v-for="term in ls.terms"
        :key="term.value"
      >
        {{ term.label }}
      </option>
    </select>
  </div>
</template>
<style scoped></style>
