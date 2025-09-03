
// assets/js/scenario.js
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("scenarios-grid");
  if (!grid) return;

  SCENARIOS.forEach((scenario) => {
    const card = document.createElement("div");
    card.className = `cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${scenario.bgColor} ${scenario.borderColor} border-2 hover:border-current rounded-xl`;

    card.innerHTML = `
      <div class="p-6">
        <div class="flex items-center justify-between">
          <div class="w-12 h-12 bg-gradient-to-r ${scenario.color} rounded-xl flex items-center justify-center shadow-lg">
            <i data-lucide="${scenario.icon}" class="w-6 h-6 text-white"></i>
          </div>
          <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${PRIORITY_LABELS[scenario.priority].color}">
            ${PRIORITY_LABELS[scenario.priority].text}
          </span>
        </div>
        <h3 class="text-lg font-semibold mt-4">${scenario.name}</h3>
        <p class="text-gray-600 text-sm leading-relaxed mt-2">${scenario.description}</p>
        <button class="mt-4 w-full bg-gray-800 hover:bg-gray-900 text-white rounded-md py-2 flex items-center justify-center gap-2">
          <i data-lucide="arrow-left" class="w-4 h-4"></i>
          בחר תרחיש זה
        </button>
      </div>
    `;

    card.addEventListener("click", () => {
      saveScenario(scenario);
      // Go to Role selection
      window.location.href = createPageUrl("RoleSelection");
    });

    grid.appendChild(card);
  });

  if (window.lucide) window.lucide.createIcons();
});
