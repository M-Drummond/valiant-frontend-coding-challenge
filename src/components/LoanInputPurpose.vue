<script setup lang="ts">

import { useLoanStore } from '../stores/LoanStore'

const ls = useLoanStore()

ls.fillPurposes()

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
      <option
        v-for="purpose in ls.purposes"
        :key="purpose.id"
      >
        {{ purpose.label }}
      </option>
    </select>
  </div>
</template>
<style scoped></style>
