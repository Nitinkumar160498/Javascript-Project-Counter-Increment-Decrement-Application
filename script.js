let count = 0;
document.querySelector(".value").innerHTML = count;
updateColor(count);
document.querySelector("#decrementValue").addEventListener("click", () => {
    if (count != 0) {
        count--;
        document.querySelector(".value").innerHTML = count;
        updateColor(count);
    }
});
document.querySelector("#incrementValue").addEventListener("click", () => {
    if (count < 15) {
        count++;
        document.querySelector(".value").innerHTML = count;
        updateColor(count);
    }
});
let resetValue = document.querySelector("#resetValue");
resetValue.addEventListener("click", () => {
    count = 0;
    document.querySelector(".value").innerHTML = count;
    updateColor(count);
});

function updateColor(count) {
    if (count >= 0 && count <= 5) {
        document.querySelector(".value").classList.add("bg-danger");
        document.querySelector(".value").classList.remove("bg-primary");
        document.querySelector(".value").classList.remove("bg-success");
    } else if (count >= 5 && count <= 10) {
        document.querySelector(".value").classList.remove("bg-danger");
        document.querySelector(".value").classList.add("bg-primary");
        document.querySelector(".value").classList.remove("bg-success");
    } else if (count >= 10 && count <= 15) {
        document.querySelector(".value").classList.remove("bg-danger");
        document.querySelector(".value").classList.remove("bg-primary");
        document.querySelector(".value").classList.add("bg-success");
    } else {
        document.querySelector(".value").classList.remove("bg-danger");
        document.querySelector(".value").classList.remove("bg-primary");
        document.querySelector(".value").classList.remove("bg-success");
    }
}