document.addEventListener("mousemove", parallax);

function parallax(event) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');

        const x = (window.innerWidth - event.pageX * speed) / 100;
        const y = (window.innerWidth - event.pageY * speed) / 100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    });;
}