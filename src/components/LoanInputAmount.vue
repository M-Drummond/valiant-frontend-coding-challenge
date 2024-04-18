<script setup lang="ts">
import { ref } from 'vue'
const loanAmount = ref(30000)

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
      v-model="loanAmount"
      placeholder="$30 000"
      type="number"
      pattern="[0-9]*"
      class="form-input"
    >
  </div>
</template>
