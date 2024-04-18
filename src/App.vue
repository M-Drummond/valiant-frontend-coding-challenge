<script setup>

import LoanInputAmount from './components/LoanInputAmount.vue'
import LoanInputPurpose from './components/LoanInputPurpose.vue'
import LoanRepaymentPeriods from './components/LoanRepaymentPeriods.vue'
import LoanTermInput from './components/LoanTermInput.vue'

defineOptions({
  name: 'App',
})
</script>

<template>
  <div class="container px-4 mx-auto ">
    <div class="">
      <div
        id="LoanInputs"
        class="grid grid-cols-2 gap-4"
      >
        <p>I need <LoanInputAmount /></p>
        <p>For <LoanInputPurpose /></p>
        <p>Repaid: <LoanRepaymentPeriods /></p>
        <p>Over:  <LoanTermInput /></p>
      </div>
      <div>
        {{ monthlyRepaymentAmount }}
        {{ yearlyyRepaymentAmount }}
      </div>
    </div>
  </div>
</template>
