/* UI Visibility Example
This function demonstrates how to control the visibility of the "Add to Cart" button based on product stock
Output will be:
Add to Cart button should be visible. Stock is : 20
Product info is { id: 'sku-1234', name: 'Laptop' }
*/
function uiVisibilityExample() {

    // Number of items available in stock
    const productStock = 20;  
    
    // Product details stored as an object
    const productInfo = {
        id: "sku-1234",  // Unique product ID
        name: "Laptop"   // Product name
    };

    // Check if the product is in stock
    if (productStock > 0) {
        // If stock is available, show Add to Cart button and product info
        console.log("Add to Cart button should be visible. Stock is :", productStock);
        console.log("Product info is", productInfo);
        /*
        Output:
        Add to Cart button should be visible. Stock is : 20
        Product info is { id: 'sku-1234', name: 'Laptop' }
        */
    } else {
        // If no stock, hide Add to Cart button
        console.log("Add to Cart should not be visible");
    }
}

// Call the function to test UI visibility logic
uiVisibilityExample();
