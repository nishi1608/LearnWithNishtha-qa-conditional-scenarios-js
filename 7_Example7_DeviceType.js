/* Browser Device Conditional Logic (Responsive layout)
*/
function deviceTypeExample() {
  // Dummy device detection (in real test use window.innerWidth or UA detection)
  const deviceType = "tablet"; 

  // Conditional UI expectations
  if (deviceType === "mobile") 
  {
    console.log("Device Check PASS: On mobile -> expect hamburger menu and stacked layout.");
  } else if (deviceType === "tablet") 
  {
    console.log("Device Check PASS: On tablet -> expect medium layout and touch-friendly controls.");
  } else 
  {
    console.log("Device Check PASS: On desktop -> expect full-width menu and multi-column layout.");
  }
}
deviceTypeExample();