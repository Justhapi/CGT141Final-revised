document.addEventListener("DOMContentLoaded", () => {

    //index
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", () => {
            
            const target = button.getAttribute("data-target");
            if (target) {
                window.location.href = target;
            }
        });
    });
    //dorm location
    const location=document.querySelector('.location');
    location.onmouseover = () => {
        location.style.transition = 'background .2s ease';
        location.style.backgroundSize= "101%";
    };
    location.onmouseout = () => {
        location.style.transition = 'background .2s ease';
        location.style.backgroundSize= "150%";
    };
})
