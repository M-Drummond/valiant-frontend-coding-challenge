<script setup lang="ts">

defineProps({
  loanAmount: {
    type: Number,
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
