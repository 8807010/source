document.addEventListener("mousemove", parallax);
function parallax(e) {
  document.querySelectorAll(".object").forEach(function (move) {
    // this.querySelectorAll(".object").forEach((move) => {
    const moving_value = move.getAttribute("data-value");

    const x = (e.clientX * moving_value) / 250;
    // const x = (window.innerWidth - e.pageX * moving_value) / 100;

    const y = (e.clientY * moving_value) / 250;
    // const y = (window.innerHeight - e.pageY * moving_value) / 100;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    // move.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}