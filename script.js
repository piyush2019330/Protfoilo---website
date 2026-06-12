console.log("SCRIPT LOADED");
const words = [
    "Data Analyst",
    "Python Developer",
    "SQL Specialist",
    "Power BI Enthusiast"
];

let index = 0;

function changeText() {

    document.getElementById("typing").textContent =
    words[index];

    index++;

    if(index >= words.length){
        index = 0;
    }
}

setInterval(changeText, 2000);

changeText();

function toggleTheme(){
    document.body.classList.toggle("light");
}

const images = [
    "image/img1.png",
    "image/img2.png"
];

let currentImage = 0;

const projectImage = document.getElementById("ProjectImage");

setInterval(() => {

    projectImage.style.opacity = 0;

    setTimeout(() => {

        currentImage = (currentImage + 1) % images.length;

        projectImage.src = images[currentImage];

        projectImage.style.opacity = 1;

    }, 500);

}, 3000);

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (!form) {
        console.log("Form not found!");
        return;
    }

    form.addEventListener("submit", async function(e){
        e.preventDefault();

        const data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        const response = await fetch("http://127.0.0.1:5001/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        alert(result.message);
    });

});
console.log("JS IS WORKING");



/* Contact Section */
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (!form) {
        console.log("Form not found!");
        return;
    }

    form.addEventListener("submit", async function(e){
        e.preventDefault();

        const data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        try {
            const res = await fetch("http://127.0.0.1:5001/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await res.json();

            alert(result.message || "Message sent!");
            form.reset();

        } catch (error) {
            console.log(error);
            alert("Server not connected");
        }
    });

});