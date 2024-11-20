document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-target");
            if (target) {
                window.location.href = target;             }
        });
    });
});
console.log(Works)