// SLIDES
let slideIndex = 0;
let slides, dots;

function showSlides(n) {
  slides = document.getElementsByClassName("mySlides");
  dots = document.getElementsByClassName("dot");
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  for (let i = 0; i < dots.length; i++) dots[i].className = dots[i].className.replace(" active", "");

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function autoSlides() {
  slideIndex++;
  showSlides(slideIndex);
  setTimeout(autoSlides, 5000); // troca a cada 5s
}

window.onload = function() {
  let dotContainer = document.getElementById("dots");
  for (let i = 0; i < document.getElementsByClassName("mySlides").length; i++) {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => currentSlide(i));
    dotContainer.appendChild(dot);
  }
  showSlides(slideIndex);
  autoSlides();
};

// BOTÃO VOLTAR AO TOPO
let btnTopo = document.getElementById("btnTopo");

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
};

btnTopo.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
