const cards = document.querySelectorAll(".link-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(59,130,246,0.16), rgba(255,255,255,0.04))`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "rgba(255,255,255,0.04)";
  });
});
