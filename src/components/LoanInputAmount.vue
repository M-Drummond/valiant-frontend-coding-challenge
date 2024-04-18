<script setup lang="ts">

defineProps({
  loanAmount: {
    type: Number,
    required: true,
  },
})

</script>

<template>
  <input
    placeholder="$30 000"
    type="number"
    pattern="[0-9]*"
  >
</template>
<style scoped></style>
