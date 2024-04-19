<script setup lang="js">

// import { computed } from 'vue'
import LoanInputAmount from './components/LoanInputAmount.vue'
import LoanInputPurpose from './components/LoanInputPurpose.vue'
import LoanRepaymentPeriods from './components/LoanRepaymentPeriods.vue'
import LoanTermInput from './components/LoanTermInput.vue'
import LoanOutputs from './components/LoanOutputs.vue'

defineOptions({
  name: 'App',
})

</script>

<template>
  <div
    class="container relative z-10 max-w-screen-sm px-8 pb-4 mx-auto text-lg transition-all border border-black border-solid rounded-md bg-slate-300 shadow-frame dark:border-white dark:bg-slate-900"
  >
    <div class="">
      <h1 class="py-4 text-xl font-extrabold text-center md:mb-4 md:text-4xl">
        Loan Repayment Calculator
      </h1>
      <div
        id="LoanInputs"
        class="flex flex-col justify-center"
      >
        <div class="flex flex-col items-center justify-center w-full sm:flex-row md:mb-4">
          <LoanInputAmount />

          <LoanInputPurpose />
        </div>

        <div class="flex flex-col items-center justify-center w-full sm:flex-row md:mb-4">
          <LoanRepaymentPeriods />

          <LoanTermInput />
        </div>
      </div>

      <LoanOutputs />
    </div>
  </div>
</template>
