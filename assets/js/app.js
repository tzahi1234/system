
// assets/js/app.js
// Minimal helpers and icon rendering
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
});

// Simple nav helper: createPageUrl from page key
function createPageUrl(pageKey) {
  const map = {
    "Homepage": "index.html",
    "ScenarioSelection": "scenario.html",
    "RoleSelection": "roles.html",
    "Instructions": "instructions.html",
    "Checklist": "checklist.html",
    "Resources": "resources.html"
  };
  return map[pageKey] || "index.html";
}
