<script setup lang="js">
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
    class="container relative z-10 mx-auto max-w-screen-sm select-none rounded-md border border-solid border-black bg-slate-300 px-8 pb-4 text-lg shadow-frame transition-all dark:border-white dark:bg-slate-900"
  >
    <div class="">
      <h1 class="py-4 text-center text-xl font-extrabold md:mb-4 md:text-4xl">
        Loan Repayment Calculator
      </h1>
      <div
        id="LoanInputs"
        class="flex flex-col justify-center"
      >
        <div class="flex w-full flex-col items-center justify-center sm:flex-row md:mb-4">
          <LoanInputAmount />

          <LoanInputPurpose />
        </div>

        <div class="flex w-full flex-col items-center justify-center sm:flex-row md:mb-4">
          <LoanRepaymentPeriods />

          <LoanTermInput />
        </div>
      </div>

      <LoanOutputs />
    </div>
  </div>
</template>
