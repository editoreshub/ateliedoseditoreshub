document.addEventListener("DOMContentLoaded", () => {

// Navbar ao scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(11,17,32,.95)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    } else {

        navbar.style.background = "rgba(15,23,42,.7)";
        navbar.style.boxShadow = "none";

    }

});



// Animação dos números

const stats = document.querySelectorAll(".stat h2");

stats.forEach(stat => {

    const finalValue =
        parseInt(stat.innerText.replace("+",""));

    let current = 0;

    const speed = finalValue / 100;

    const counter = setInterval(() => {

        current += speed;

        if(current >= finalValue){

            stat.innerText = finalValue + "+";
            clearInterval(counter);

        } else {

            stat.innerText =
                Math.floor(current) + "+";

        }

    },15);

});



// Fade ao aparecer

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform =
            "translateY(0)";

        }

    });

},{
    threshold:0.1
});



document.querySelectorAll(".card, .stat")
.forEach(el => {

    el.style.opacity = "0";
    el.style.transform =
    "translateY(50px)";
    el.style.transition =
    "all .8s ease";

    observer.observe(el);

});



// Efeito 3D Cards

const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateX =
        ((y / rect.height) - .5) * -15;

        const rotateY =
        ((x / rect.width) - .5) * 15;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});



// Botões com efeito ripple

document.querySelectorAll(".btn, .btn-outline")
.forEach(button => {

    button.addEventListener("click", function(e){

        const ripple =
        document.createElement("span");

        const rect =
        this.getBoundingClientRect();

        const size =
        Math.max(rect.width, rect.height);

        ripple.style.width =
        ripple.style.height =
        size + "px";

        ripple.style.left =
        e.clientX - rect.left - size/2 + "px";

        ripple.style.top =
        e.clientY - rect.top - size/2 + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        },600);

    });

});

});
