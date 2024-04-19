<script setup lang="js">
import { useLoanStore } from '../stores/LoanStore'
const ls = useLoanStore()
</script>

<template>
  <div
    id="LoanOutputs"
    class="mt-4 border-t-4 border-solid border-black pt-4 text-center dark:border-white"
  >
    <div class="relative">
      <div v-if="ls.monthlyRepaymentsAmount()">
        <p class="my-4 font-bold">
          ${{ ls.monthlyRepaymentsAmount() }} {{ ls.selectedPeriod.label }} Repayments
        </p>
        <p class="my-4 text-sm font-bold">
          ${{ ls.totalRepaymentsAmount() }} Total Repayments
        </p>
      </div>
      <div v-else>
        <p class="my-4 font-bold">
          Enter some details to get started.
        </p>
        <p class="my-4 text-sm font-bold">
          Your loan will be calculated as you go.
        </p>
      </div>
    </div>
  </div>
</template>
