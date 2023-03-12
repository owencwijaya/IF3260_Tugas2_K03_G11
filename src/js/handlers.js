// untuk projection select

const projectionSelect = document.getElementById("projection-select");
projectionSelect.addEventListener("change", () => {
  requestAnimationFrame(render);
});
