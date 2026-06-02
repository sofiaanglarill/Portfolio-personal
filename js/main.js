document.querySelectorAll(".slider").forEach((slider) => {
  const imgs = slider.querySelectorAll("img");
  let i = 0;
  setInterval(() => {
    imgs[i].classList.remove("activa");
    i = (i + 1) % imgs.length;
    imgs[i].classList.add("activa");
  }, 2500);
});
