const kitchen = document.getElementById("kitchen");
let cakeBottom = 20;

function isMobile() {
  return window.innerWidth <= 768;
}

document.querySelectorAll(".ingredient").forEach((img) => {
  img.addEventListener("click", () => {
    const newLayer = document.createElement("img");
    newLayer.src = img.src;
    newLayer.classList.add("layer");

    const isCream = img.classList.contains("cream");

    if (isCream) {
      newLayer.classList.add("cream");
      newLayer.style.bottom = cakeBottom + "px";
      cakeBottom += isMobile() ? 30 : 40; // smaller gap on mobile
    } else {
      newLayer.classList.add("cake");
      newLayer.style.bottom = cakeBottom + "px";
      cakeBottom += isMobile() ? 50 : 70; // smaller cake gap on mobile
    }

    kitchen.appendChild(newLayer);
  });
});
//undo a layer
document.getElementById("undoBtn").addEventListener("click", () => {
  const layers = kitchen.querySelectorAll(".layer");
  if (layers.length > 0) {
    const last = layers[layers.length - 1];
    const height = last.classList.contains("cream")
      ? isMobile()
        ? 30
        : 40
      : isMobile()
      ? 50
      : 70;
    kitchen.removeChild(last);
    cakeBottom -= height;
  }
});
