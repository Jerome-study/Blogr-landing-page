const navBar = document.getElementById('navigation-bar');
const exitNavBar = document.getElementById('exit-navigation-bar');
const navList = document.querySelector("navbar");
const dropDownBar = document.querySelectorAll(".dropdown");
const productList = document.getElementById("product-list");
const companyList = document.getElementById("company-list");
const connectList = document.getElementById("connect-list");
const productTitle = document.getElementById("product-title");
const companyTitle = document.getElementById("company-title");
const connectTitle = document.getElementById("connect-title");




navBar.addEventListener("click", () => {
    navList.classList.remove("nav-hide");
    navBar.classList.add("nav-hide");
    exitNavBar.classList.add("nav-show");
});


exitNavBar.addEventListener("click", () => {
    navList.classList.add("nav-hide");
    exitNavBar.classList.remove("nav-show");
    navBar.classList.remove("nav-hide");

    reset();
});





dropDownBar.forEach(arrow => {
    arrow.addEventListener("click", () => {
        if (arrow.id === "product") {
            if (productList.style.display === "block") {
                return reset();
            };
            reset();
            productList.style.display = "block";
            productTitle.classList.add("bold");
            productTitle.classList.add("underline");
            return;
        };

        if (arrow.id === "company") {
            if (companyList.style.display === "block") {
                return reset();
            };
            reset();
            companyList.style.display = "block";
            companyTitle.classList.add("bold");
            companyTitle.classList.add("underline");
            return;
        };

        if (arrow.id === "connect") {
            if (connectList.style.display === "block") {
                return reset();
            };
            reset();
            connectList.style.display = "block";
            connectTitle.classList.add("bold");
            connectTitle.classList.add("underline");
            return;
        };
    });
});


function reset() {
    productList.style.display = "none";
    connectList.style.display = "none";
    companyList.style.display = "none";

    removeBold();
}



function removeBold() {
    productTitle.classList.remove("bold");
    companyTitle.classList.remove("bold");
    connectTitle.classList.remove("bold");

    productTitle.classList.remove("underline");
    companyTitle.classList.remove("underline");
    connectTitle.classList.remove("underline");
}
