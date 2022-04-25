const elsPaymentPeriodRadio = document.querySelectorAll('[name="payment_period"]');
const elsPricingPlanValue = document.querySelectorAll('.pricing-plan-value');

elsPaymentPeriodRadio.forEach(function (elPaymentPeriodRadio) {
  elPaymentPeriodRadio.addEventListener('change', function () {
    const period = elPaymentPeriodRadio.value;

    if (period === 'annualy') {
      elsPricingPlanValue.forEach(function (elPrice) {
        elPrice.textContent = elPrice.closest('.pricing-plan').dataset.paymentAnnualy;
      });
    }
    else {
      elsPricingPlanValue.forEach(function (elPrice) {
        elPrice.textContent = elPrice.closest('.pricing-plan').dataset.paymentMonthly;
      });
    }
  });
});