const card = document.querySelectorAll(".cart");
const total = document.querySelector(".price");

let sum = 0;

card.forEach((elem) => {
    elem.addEventListener("click", () => {
        elem.classList.toggle("cart-active");
        if (elem.classList.contains("cart-active")) {
            sum = sum + Number(elem.getAttribute("data-price"));
        }else {
            sum = sum - Number(elem.getAttribute("data-price"));
        }
        total.textContent = (sum + "$")
    })
});