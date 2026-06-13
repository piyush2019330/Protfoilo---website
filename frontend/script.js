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

function toggleTheme() {
    document.body.classList.toggle("light");
}

/* -------------------- PROJECT 1 -------------------- */

const images1 = [
    "image/img1.png",
    "image/img2.png"
];

let current1 = 0;

const img1 = document.getElementById("ProjectImage");

setInterval(() => {

    img1.style.opacity = 0;

    setTimeout(() => {
        current1 = (current1 + 1) % images1.length;
        img1.src = images1[current1];
        img1.style.opacity = 1;
    }, 500);

}, 3000);


/* -------------------- PROJECT 2 -------------------- */

const images2 = [
    "image/Hr_Anlystic.png",
    "image/Hr_Anlystics.png"
];

let current2 = 0;

const img2 = document.getElementById("ProjectImage2");

setInterval(() => {

    img2.style.opacity = 0;

    setTimeout(() => {
        current2 = (current2 + 1) % images2.length;
        img2.src = images2[current2];
        img2.style.opacity = 1;
    }, 500);

}, 3000);

/*------------PROJECT 3 ----------- */
const images3 = [
    "image/img.jpeg",
    "image/img2.jpeg"
];

let current3 = 0;

const img3 = document.getElementById("ProjectImage3");

setInterval(() => {

    img3.style.opacity = 0;

    setTimeout(() => {
        current3 = (current3 + 1) % images3.length;
        img3.src = images3[current3];
        img3.style.opacity = 1;
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