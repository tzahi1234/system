
// assets/js/instructions.js
document.addEventListener("DOMContentLoaded", () => {
  const s = getSavedScenario();
  const r = getSavedRole();

  if (!s || !r) {
    const missing = document.getElementById("missing-info");
    if (missing) missing.classList.remove("hidden");
    return;
  }

  // Fill badges
  const badgeScenario = document.getElementById("ins-badge-scenario");
  const badgeRole = document.getElementById("ins-badge-role");
  if (badgeScenario) badgeScenario.textContent = s.name;
  if (badgeRole) badgeRole.textContent = r.name;

  const list = document.getElementById("instructions-list");
  const items = getInstructions(s.id, r.id);
  const completed = new Set();

  items.forEach((text, idx) => {
    const row = document.createElement("div");
    row.className = "flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all bg-gray-50 border-gray-200 hover:border-gray-300";
    row.innerHTML = `
      <div class="mt-1 check-icon">
        <div class="w-6 h-6 border-2 border-gray-400 rounded-full"></div>
      </div>
      <div class="flex-1">
        <p class="text-lg leading-relaxed text-gray-800">${text}</p>
      </div>
    `;
    row.addEventListener("click", () => {
      const done = completed.has(idx);
      if (done) {
        completed.delete(idx);
        row.className = "flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all bg-gray-50 border-gray-200 hover:border-gray-300";
        row.querySelector(".check-icon").innerHTML = `<div class="w-6 h-6 border-2 border-gray-400 rounded-full"></div>`;
        row.querySelector("p").className = "text-lg leading-relaxed text-gray-800";
      } else {
        completed.add(idx);
        row.className = "flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all bg-green-50 border-green-200";
        row.querySelector(".check-icon").innerHTML = `<i data-lucide="check-circle" class="w-6 h-6 text-green-600"></i>`;
        row.querySelector("p").className = "text-lg leading-relaxed text-green-800 line-through";
        if (window.lucide) window.lucide.createIcons();
      }
    });
    list.appendChild(row);
  });

  if (window.lucide) window.lucide.createIcons();
});
