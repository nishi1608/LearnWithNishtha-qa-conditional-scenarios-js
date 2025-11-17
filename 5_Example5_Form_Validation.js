/* Function to validate form data using regular expression
Output will be 
Form Validation: PASS. ZIP code is valid for USA.
Form data: { country: 'USA', zipCode: '94107' }
*/
function formValidationExample() {
  // Step 1: Define form data
  const formData = {
    country: "USA",       // Country selected by the user
    zipCode: "94107"      // ZIP code entered by the user
                           // You can test with "", "123", "94107-1" to see different results
  };

// Step 2: Check if the country is USA
  if (formData.country === "USA") {

/* Step 3: Check if ZIP code exists AND is valid
   Explanation of the condition: formData.zipCode && /^\d{5}$/.test(formData.zipCode)

   1) formData.zipCode
      - Checks if a value was entered (not empty or undefined)
      - Returns true if a value exists

   2) /^\d{5}$/
      - This is a regular expression (regex) pattern
      - ^   -> Start of the string
      - \d  -> Any digit from 0-9
      - {5} -> Exactly 5 digits
      - $   -> End of the string
      - Together /^\d{5}$/ ensures the string contains exactly 5 digits

   3) .test(formData.zipCode)
      - .test() is a method of RegExp in JavaScript
      - It checks if the string matches the regex
      - Returns true if it matches, false if it doesn't

   4) && (AND operator)
      - Ensures both conditions are true: ZIP exists AND it matches the regex
*/


    if (formData.zipCode && /^\d{5}$/.test(formData.zipCode)) {
      console.log("Form Validation: PASS. ZIP code is valid for USA.");
    } else {
      console.log("Form Validation: FAIL. ZIP code is missing or invalid for USA.");
    }

  } else {
    // For countries other than USA, ZIP code is not required
    console.log("Form Validation: PASS. ZIP not required for", formData.country);
  }

  // Step 4: Display the form data (like a response body)
  console.log("Form data:", formData);
}

// Call the function to run the validation
formValidationExample();
