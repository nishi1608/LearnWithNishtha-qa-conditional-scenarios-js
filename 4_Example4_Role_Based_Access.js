/*Role Based Access Example
This function demonstrates how to allow or restrict access based on a user's role
Output will be :
System access granted to the user  Nishtha
User details are : { userid: 1001, userName: 'Nishtha', userRole: 'QA Analyst' }
*/
function roleBasedAccessExample() {
    
    // Create a user object containing user details
    const userData = {
        userid: 1001,           // Unique ID of the user
        userName: "Nishtha",    // Name of the user
        userRole: "QA Analyst"  // Role assigned to the user
    };
    
    // Check if the user's role is "QA Analyst"
    if (userData.userRole === "QA Analyst") {
        // If true, grant access and display user details
        console.log("System access granted to the user ", userData.userName);
        console.log("User details are :", userData);
    } else {
        // If false, deny access
        console.log("User cannot access the system");
    }
}

// Call the function to test role-based access
roleBasedAccessExample();


