<script setup lang="ts">
defineProps({
  loanTerms: {
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
      over
    </label>
    <select class="form-input">
      <option v-for="purpose in loanTerms" :key="purpose.id">
        {{ purpose.name }}
      </option>
    </select>
  </div>
</template>
<style scoped></style>
