// Test Scenario: Validate whether a given URL is active or not
// QA Perspective: We check if the link value exists (not null) before using it in any test actions.

// Sample URL to validate
let hrefLink = "www.cute-penguins.com";

// Step 1: Log which link we are checking
console.log("Testing link:", hrefLink);

// Step 2: Validate if link is present (not null)
// In real automation we would check HTTP status, but for now we are checking just the value
if (hrefLink !== null && hrefLink !== "") {
    console.log("Result: Link is active");
} else {
    console.log("Result: Link is not active");
}
