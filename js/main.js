document.querySelectorAll(".slider").forEach((slider) => {
  const imgs = slider.querySelectorAll("img");
  let i = 0;

  imgs.forEach((img, index) => {
    img.style.position = "absolute";
    img.style.top = "0";
    img.style.left = index === 0 ? "0%" : "100%";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "contain";
    img.style.transition = "left 0.6s ease";
    img.style.display = "block";
  });

  setInterval(() => {
    const current = imgs[i];
    i = (i + 1) % imgs.length;
    const next = imgs[i];

    next.style.transition = "none";
    next.style.left = "100%";

    setTimeout(() => {
      next.style.transition = "left 0.6s ease";
      current.style.left = "-100%";
      next.style.left = "0%";
    }, 20);
  }, 2500);
});
