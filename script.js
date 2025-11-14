const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleSidebar");

// DEFAULT: sidebar langsung tertutup ketika halaman pertama kali dibuka
sidebar.classList.add("collapsed");

// Toggle buka/tutup
toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});
