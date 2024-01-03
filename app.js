const wapper = document.querySelector(".sliderwapper");
const menu = document.querySelectorAll(".menuitems");

menu.forEach((item, index) => {
    item.addEventListener("click", () => {
        wapper.style.transform = `translateX(${-100 * index}vw)`;
    });
});
