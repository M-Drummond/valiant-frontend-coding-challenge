<script setup lang="ts">
defineProps({
  loanTerms: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-row items-center justify-center">
    <label
      for="LoanAmount"
      class="mr-2 shrink-0"
    >
      Over
    </label>
    <select class="form-input">
      <option v-for="purpose in loanTerms" :key="purpose.id">
        {{ purpose.name }}
      </option>
    </select>
  </div>
</template>
<style scoped></style>
