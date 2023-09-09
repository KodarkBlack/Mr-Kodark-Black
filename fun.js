// Helper function to animate a value with a specific element ID
function animateValue(obj, start, end, duration, suffix) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    // We put this in a requestAnimationFrame to make sure that the value is updated before the tween
    // starts its animation. Otherwise, it would jump from the final value to the initial one.
    window.requestAnimationFrame(step);
}

// Function to handle the intersection of elements
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // When the element becomes visible, start the animation
            animateValue(entry.target.querySelector('h5'), 0, 50, 5700, '+');
            animateValue(entry.target.querySelector('h5'), 0, 50, 5800, '% OFF');
            // Stop observing the element once the animation is triggered
            observer.unobserve(entry.target);
        }
    });
}

// Create an IntersectionObserver to watch for element visibility
const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No additional margin
    threshold: 0.5, // Trigger the callback when 50% of the element is visible
};

const observer = new IntersectionObserver(handleIntersection, options);

// Observe the elements you want to animate
const elementsToAnimate = document.querySelectorAll('.benefit-section-offer > div');
elementsToAnimate.forEach((element) => {
    observer.observe(element);
});




const subform = document.getElementById("subform");
const subBtn = document.getElementById("sub-btn");
const emailInput = document.getElementById("email");

subform.addEventListener("submit", formSubmit);

function formSubmit(e) {
    e.preventDefault();
    const button = subBtn;
    const email = emailInput.value; // Use .value to get the email input value

    button.textContent = "Subscribing...";

    const formData = new FormData(e.target);

    fetch("https://getform.io/f/7af0e2fa-abb4-47f8-b53c-448fea6f9c49", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json",
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`An error occurred: ${response.statusText}`);
        }
        return response.json(); // Parse the response JSON
    })
    .then(data => {
        if (data.success) {
            // The form submission was successful
            console.log("Form submitted successfully.");
            // You can perform actions like showing a success message, redirecting the user, etc.
        } else {
            // The form submission had errors
            console.log("Form submission failed.");
            // You can display error messages or handle the errors in a way that suits your application.
        }
        console.log(data); // You can handle the response data here
    })
    .catch(error => {
        console.error("An error occurred:", error);
    })
    .finally(() => {
        button.textContent = "Subscribed";
        emailInput.value = " "; // Clear the email input
    });
}
