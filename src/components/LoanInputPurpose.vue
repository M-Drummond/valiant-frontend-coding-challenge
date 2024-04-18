<script setup lang="ts">
defineProps({
  loanPurposes: {
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
      for
    </label>
    <select class="form-input">
      <option v-for="purpose in loanPurposes" :key="purpose.id">
        {{ purpose.name }}
      </option>
    </select>
  </div>
</template>
<style scoped></style>
