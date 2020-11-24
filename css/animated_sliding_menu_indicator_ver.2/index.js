const marker = document.querySelector("#marker");
const item = document.querySelectorAll("nav a");

function indicator(event) {
    marker.style.left = event.offsetLeft + 'px';
    marker.style.width = event.offsetWidth + 'px';
}

item.forEach(link => {
    link.addEventListener('mousemove', (event) => {
        indicator(event.target);
    })

});

