<script setup lang="ts">

defineProps({
  loanAmount: {
    type: Number,
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
      I need
    </label>
    <input
      id="LoanAmount"
      placeholder="$30 000"
      type="number"
      pattern="[0-9]*"
      class="form-input"
    >
  </div>
</template>
