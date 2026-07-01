// Nayron Digital — Standalone JS

// ⬇️ ATUALIZE ESTES DOIS VALORES ⬇️
const WHATSAPP_NUMBER = "5500000000000"; // formato: 55 + DDD + número
const INSTAGRAM_HANDLE = "nayron.digital";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá Nayron! Vim pelo seu site e quero um orçamento."
)}`;
const INSTAGRAM_LINK = `https://instagram.com/${INSTAGRAM_HANDLE}`;

// Aplica links dinâmicos
["aboutWhats", "ctaWhats", "footWhats", "floatWhats"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = WHATSAPP_LINK;
});
["aboutInsta", "footInsta"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = INSTAGRAM_LINK;
});

// Ano dinâmico
document.getElementById("year").textContent = new Date().getFullYear();

// Nav scroll
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Menu mobile
const toggle = document.getElementById("navToggle");
const mobile = document.getElementById("navMobile");
toggle.addEventListener("click", () => mobile.classList.toggle("open"));
mobile.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => mobile.classList.remove("open"))
);

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("is-visible");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));