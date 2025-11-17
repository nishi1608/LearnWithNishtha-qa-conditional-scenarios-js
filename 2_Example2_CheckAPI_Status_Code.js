/* API Response Status Code Example
This function demonstrates how to check the API response status code
and log the appropriate message based on success or failure
Output:
        API Status PASS : Successful Response 201
        Response body  { id: 1234, uname: 'Dummy User' }
        
*/
function apiStatuscodeExample() {

    // Simulated API response object
    const response = {
        status: 201,  // HTTP status code returned by the API
        data: {
            id: 1234,         // User ID from API response
            uname: "Dummy User" // Username from API response
        }
    };

    // Check if the API response status indicates success (200 or 201)
    if (response.status === 200 || response.status === 201) {
        // If success, log PASS message and show response data
        console.log("API Status PASS : Successful Response " + response.status);
        console.log("Response body ", response.data);
        
    } 
    else 
        {
        // If not success, log FAIL message
        console.log("API Status FAIL");
    }
}

// Call the function to test API status code logic
apiStatuscodeExample();
