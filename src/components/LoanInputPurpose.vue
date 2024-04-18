<script setup lang="js">

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
    <select
      v-model="ls.selectedPurpose"
      class="form-input"
    >
      <option
        v-for="purpose in ls.purposes"
        :key="purpose.id"
        :value="purpose"
      >
        {{ purpose.label }}
      </option>
    </select>
  </div>
</template>
<style scoped></style>
