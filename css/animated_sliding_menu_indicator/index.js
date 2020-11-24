const marker = document.querySelector("#marker");
const item = document.querySelectorAll("ul li a");

function indicator(event) {
    marker.style.top = event.offsetTop + 'px';
    marker.style.width = event.offsetWidth + 'px';
}

item.forEach(link => {
    link.addEventListener('mousemove', (event) => {
        indicator(event.target);
    })

});

