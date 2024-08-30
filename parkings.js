const navbar = document.querySelectorAll("nav div ul li a");
const sections = document.querySelectorAll(".section");


navbar.forEach((elemnt) => {
  elemnt.addEventListener("click", () => {
    // Hide all sections first
    sections.forEach(section => {
      section.style.display = "none";
    });

    // Remove 'active' class from all navbar items
    navbar.forEach(item => {
      item.classList.remove("active");
    });

    // Show the corresponding section based on the clicked navbar item
    switch (elemnt.textContent) {
      case "Home":
        document.getElementById("home").style.display = "block";
        //document.getElementById("map").style.display = "block";
        break;
      case "User Guide":
        document.getElementById("search").style.display = "block";
        break;
      case "Add Parking":
        document.getElementById("add-parking").style.display = "block";
        break;
      case "Contact":
        document.getElementById("contact").style.display = "block";
        break;
    }

    // Add 'active' class to the clicked navbar item
    elemnt.classList.add("active");
  });
});

// Add an event listener for form submission
document.getElementById("parkingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get the value from the input field
    const locationUrl = document.getElementById("locationUrl").value;

    if (locationUrl) {
        // Create a new list item and set it to be invisible
        const listItem = document.createElement("li");
        listItem.textContent = locationUrl;
        listItem.style.display = "none"; // Hide the new list item

        // Add the new list item to the list
        document.getElementById("locationList").appendChild(listItem);

        // Optionally, you can clear the input field
        document.getElementById("locationUrl").value = "Thank you ! 🙌";
        setTimeout( (() => {document.getElementById("locationUrl").value = ""}),3000);
    }
});
