/*8) Automation Retry Logic (Retry flaky element check)
Output will be:
Retry Logic: WARNING - element not found on attempt 1 . Retrying...
Retry Logic: PASS - element found on attempt 2
*/
function automationRetryExample() {
  // Step 1: Initialize retry parameters
  let attempt = 0;             // Current attempt counter
  const maxRetries = 3;        // Maximum number of retry attempts
  let elementFound = false;    // Flag to track if element is found

  // Step 2: Try to find the element until maxRetries or until found
  while (attempt < maxRetries && !elementFound) {
    attempt++; // Increment attempt counter

    // Step 3: Simulate finding the element
    // We'll pretend the element appears on the 2nd attempt
    elementFound = (attempt >= 2);

    // Step 4: Log result of this attempt
    if (elementFound) {
      console.log("Retry Logic: PASS - element found on attempt", attempt);
    } else {
      console.log("Retry Logic: WARNING - element not found on attempt", attempt, ". Retrying...");
      // In real automation, you might refresh the page, wait, or re-locate the element here
    }
  }

  // Step 5: Final check if element was never found
  if (!elementFound) {
    console.log("Retry Logic: FAIL - element not found after", maxRetries, "attempts.");
  }
}

// Call the function
automationRetryExample();
