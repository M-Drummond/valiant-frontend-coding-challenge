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
  <div class="container mx-auto ">
    <div class="">
      <div
        id="LoanInputs"
        class="flex flex-col items-center"
      >
        <div class="flex flex-col items-center justify-center md:mb-4 md:flex-row">
          <LoanInputAmount />

          <LoanInputPurpose />
        </div>

        <div class="flex flex-col items-center justify-center md:mb-4 md:flex-row">
          <LoanRepaymentPeriods />

          <LoanTermInput />
        </div>
      </div>
      <div
        id="LoanOutPuts"
        class="pt-4 mt-4 text-center border-t-4 border-black border-solid"
      >
        <p>
          {{ ls.calculate() }}
          {{ ls.monthlyRepaymentAmount }} Monthly Repayments
        </p>
        <p>{{ ls.toalRepayments }} Total Repayments</p>
      </div>
    </div>
  </div>
</template>
