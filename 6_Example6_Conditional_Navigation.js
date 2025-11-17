/* Conditional Navigation Test (Payment success -> Order Confirmation)
Output will be:
PASS: Payment success -> redirect to Order Confirmation page.
*/
function conditionalNavigationExample() {
  // Dummy payment result
  const paymentStatus = "success";

  // Expected navigation depending on payment outcome
  if (paymentStatus === "success") {
    console.log("PASS: Payment success -> redirect to Order Confirmation page.");
  } else if (paymentStatus === "pending") {
    console.log("INFO: Payment pending -> show pending payment page or status.");
  } else {
    // For all other statuses treat as failure and send to Payment Failed page
    console.log("FAIL: Payment failed -> redirect to Payment Failed page.");
  }
}
conditionalNavigationExample();