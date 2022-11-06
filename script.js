const card = document.querySelector(".card");
const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 15;

function handleHover(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

  card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(e) {
  card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia.matches) {
  card.addEventListener("mousemove", handleHover);
  card.addEventListener("mouseleave", resetStyles);
}

particlesJS.load('particles-js', './particles.json', function() {
  console.log('callback - particles.js config loaded');
})

let nt = document.getElementById("toggler");
let nb = document.getElementById("navs");
let ld = document.getElementById("loading-box")
let body = document.querySelector("body");
let isnt = false;

function toggleNavbar(e) {

	if (isnt) {
		e.classList.remove("fa-times");
		e.classList.add("fa-bars");
		nb.classList.remove("on")
		body.classList.remove("on")
		isnt = false;
	} else if (!isnt) {
		e.classList.add("fa-times");
		e.classList.remove("fa-bars");
		nb.classList.add("on")
		body.classList.add("on")
		isnt = true;
	}

}

window.onload = () => {
	setTimeout(() => {
		ld.classList.add("off");
		body.classList.remove("on")
	}, 1510);
}
