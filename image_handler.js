const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const zoomables = Array.from(document.querySelectorAll(".zoomable"));
let currentIndex = 0;

  function showModal(index) {
    const img = zoomables[index];
    if (!img) return;
    modalImg.src = img.src;
    modal.style.display = "flex";
    currentIndex = index;
  }

  zoomables.forEach((img, index) => {
    img.addEventListener("click", () => showModal(index));
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % zoomables.length;
    showModal(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + zoomables.length) % zoomables.length;
    showModal(currentIndex);
  });

  // Optional: left/right arrow key support
  window.addEventListener("keydown", (e) => {
    if (modal.style.display === "flex") {
      if (e.key === "ArrowRight") nextBtn.click();
      if (e.key === "ArrowLeft") prevBtn.click();
      if (e.key === "Escape") closeBtn.click();
    }
  });