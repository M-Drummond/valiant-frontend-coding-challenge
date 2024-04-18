<script setup>

import { ref, computed } from 'vue'

import LoanInputAmount from './components/LoanInputAmount.vue'
import LoanInputPurpose from './components/LoanInputPurpose.vue'
import LoanRepaymentPeriods from './components/LoanRepaymentPeriods.vue'
import LoanTermInput from './components/LoanTermInput.vue'

defineOptions({
  name: 'App',
})

const calculation = ref(2)

const monthlyRepaymentAmount = computed(() => {
  return Math.round(calculation)
})

</script>

<template>
  <div class="container mx-auto ">
    <div class="">
      <div
        id="LoanInputs"
        class="grid grid-cols-2 gap-4"
      >
        <LoanInputAmount />

        <LoanInputPurpose />

        <LoanRepaymentPeriods />

        <LoanTermInput />
      </div>
      <div
        id="LoanOutPuts"
        class="pt-4 mt-4 text-center border-t-4 border-black border-solid"
      >
        <p>
          {{ monthlyRepaymentAmount }} Monthly Repayments
        </p>
        <p>{{ toalRepayments }} Total Repayments</p>
      </div>
    </div>
  </div>
</template>
