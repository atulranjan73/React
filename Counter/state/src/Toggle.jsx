import { useState } from "react";
import image1 from "./assets/1.jpg"; // Assuming image is named 1.jpg
import image2 from "./assets/2.jpg"; // Optional: Image to display when hidden
import "./togglea.css"; // Assuming you have a CSS file for styling

function Toggle() {
  const [isVisible, setIsVisible] = useState(true); // Use a descriptive variable name
  const hiddenImage = image2 || null; // Optional: Provide a default hidden image (or null)

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  console.log("Current visibility:", isVisible); // Optional for debugging

  return (
    <>
      <h1>This is a toggle image</h1>
      <img
        src={isVisible ? image1 : hiddenImage}
        alt="Toggle image"
        style={{ width: "200px" }} // Use consistent style formatting
      />
      <button onClick={toggleVisibility}>Show / Hide</button>
    </>
  );
}

export default Toggle