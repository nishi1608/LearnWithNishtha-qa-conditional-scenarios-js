/* Login Validation Example
This function demonstrates basic login validation by checking if
the username and password fields are not empty

        Output:
        Login successful with User ID nishi@gmail.com
*/
function loginValidationExample() {

    // User credentials
    const userName = "nishi@gmail.com";   // User's email or username
    const userPassword = "Secret!";       // User's password

    // Check if both username and password are not empty
    if (userName !== "" && userPassword !== "") {
        // If both fields are filled, login is successful
        console.log("Login successful with User ID " + userName);
        
    } 
    else 
        {
        // If any field is empty, login fails
        console.log("Invalid Username and Password");
    }
}

// Call the function to test login validation
loginValidationExample();
