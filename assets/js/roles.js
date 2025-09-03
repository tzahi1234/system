
// assets/js/roles.js
document.addEventListener("DOMContentLoaded", () => {
  const s = getSavedScenario();
  const container = document.getElementById("roles-container");

  if (!s) {
    const missing = document.getElementById("missing-scenario");
    if (missing) missing.classList.remove("hidden");
    return;
  }

  // Header badges
  const badgeScenario = document.getElementById("badge-scenario");
  if (badgeScenario) badgeScenario.textContent = `תרחיש נבחר: ${s.name}`;

  // Render cards
  ROLES.forEach((role) => {
    const card = document.createElement("div");
    card.className = `cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${role.bgColor} ${role.borderColor} border-2 hover:border-current rounded-xl`;
    card.innerHTML = `
      <div class="p-6">
        <div class="flex items-center justify-center mb-4">
          <div class="w-16 h-16 bg-gradient-to-r ${role.color} rounded-xl flex items-center justify-center shadow-lg">
            <i data-lucide="${role.icon}" class="w-8 h-8 text-white"></i>
          </div>
        </div>
        <h3 class="text-lg font-semibold text-center">${role.name}</h3>
        <p class="text-gray-600 text-sm leading-relaxed text-center mt-2">${role.description}</p>
        <div class="mt-4 space-y-2">
          <h4 class="font-semibold text-gray-800 text-sm">אחריות עיקרית:</h4>
          <ul class="text-xs text-gray-600 space-y-1">
            ${role.responsibilities.map(r => `<li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-current rounded-full"></span>${r}</li>`).join("")}
          </ul>
        </div>
        <button class="mt-4 w-full bg-gray-800 hover:bg-gray-900 text-white rounded-md py-2 flex items-center justify-center gap-2">
          <i data-lucide="arrow-left" class="w-4 h-4"></i>
          בחר תפקיד זה
        </button>
      </div>
    `;
    card.addEventListener("click", () => {
      saveRole(role);
      window.location.href = createPageUrl("Checklist");
    });
    container.appendChild(card);
  });

  if (window.lucide) window.lucide.createIcons();
});
