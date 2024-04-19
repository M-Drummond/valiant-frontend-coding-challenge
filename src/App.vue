<script setup lang="js">

// import { computed } from 'vue'
import LoanInputAmount from './components/LoanInputAmount.vue'
import LoanInputPurpose from './components/LoanInputPurpose.vue'
import LoanRepaymentPeriods from './components/LoanRepaymentPeriods.vue'
import LoanTermInput from './components/LoanTermInput.vue'

import { useLoanStore } from './stores/LoanStore'

const ls = useLoanStore()

defineOptions({
  name: 'App',
})

</script>

<template>
  <div class="container relative z-10 max-w-screen-md px-8 pb-4 mx-auto text-lg border border-black border-solid rounded-md bg-slate-300 shadow-frame dark:border-white dark:bg-slate-900">
    <div class="">
      <h1 class="py-4 text-xl font-extrabold text-center md:text-4xl md:mb-4">
        Loan Repayment Calculator
      </h1>
      <div
        id="LoanInputs"
        class="flex flex-col justify-center"
      >
        <div class="flex flex-col items-center justify-center w-full md:mb-4 sm:flex-row">
          <LoanInputAmount />

          <LoanInputPurpose />
        </div>

        <div class="flex flex-col items-center justify-center w-full md:mb-4 sm:flex-row">
          <LoanRepaymentPeriods />

          <LoanTermInput />
        </div>
      </div>
      <div
        id="LoanOutPuts"
        class="pt-4 mt-4 text-center border-t-4 border-black border-solid dark:border-white"
      >
        <p class="my-4 font-bold">
          ${{ ls.monthlyRepaymentsAmount() }} {{ ls.selectedPeriod.label }} Repayments
        </p>
        <p class="my-4 font-bold">
          ${{ ls.totalRepaymentsAmount() }} Total Repayment
        </p>
      </div>
    </div>
  </div>
</template>
