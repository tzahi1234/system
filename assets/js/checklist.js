
// assets/js/checklist.js
document.addEventListener("DOMContentLoaded", () => {
  const s = getSavedScenario();
  const r = getSavedRole();
  const missing = document.getElementById("missing-checklist");

  if (!s || !r) {
    if (missing) missing.classList.remove("hidden");
    return;
  }

  // Badges
  const badgeScenario = document.getElementById("cl-badge-scenario");
  const badgeRole = document.getElementById("cl-badge-role");
  if (badgeScenario) badgeScenario.textContent = s.name;
  if (badgeRole) badgeRole.textContent = r.name;

  // Tabs
  let activePhase = "during";
  const phases = ["before", "during", "after"];
  const tabs = phases.reduce((acc, phase) => {
    acc[phase] = {
      btn: document.getElementById(`tab-${phase}`),
      panel: document.getElementById(`panel-${phase}`)
    };
    return acc;
  }, {});

  function setActive(phase) {
    activePhase = phase;
    phases.forEach(p => {
      tabs[p].btn.classList.toggle("bg-blue-600", p === phase);
      tabs[p].btn.classList.toggle("text-white", p === phase);
      tabs[p].btn.classList.toggle("bg-gray-100", p !== phase);
      tabs[p].btn.classList.toggle("text-gray-700", p !== phase);
      tabs[p].panel.classList.toggle("hidden", p !== phase);
    });
  }

  phases.forEach(p => tabs[p].btn.addEventListener("click", () => setActive(p)));
  setActive(activePhase);

  // Render tasks
  const checklist = getChecklist(s.id, r.id);
  const completed = new Set();

  function renderTaskList(listEl, items, phase) {
    listEl.innerHTML = "";
    if (!items || items.length === 0) {
      listEl.innerHTML = `<p class="text-gray-500 text-center py-8">אין משימות לשלב זה</p>`;
      return;
    }
    items.forEach((item, index) => {
      const id = `${phase}-${index}`;
      const row = document.createElement("div");
      row.className = "flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all bg-gray-50 border-gray-200 hover:border-gray-300";
      row.innerHTML = `
        <div class="mt-1 check-icon"><i data-lucide="circle" class="w-6 h-6 text-gray-400"></i></div>
        <div class="flex-1 space-y-2">
          <p class="text-lg leading-relaxed text-gray-800">${item.task}</p>
          <div class="flex items-center gap-3 text-sm">
            <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${PRIORITY_COLORS[item.priority]}">
              ${PRIORITY_HE[item.priority]}
            </span>
            <div class="flex items-center gap-1 text-gray-500">
              <i data-lucide="clock" class="w-4 h-4"></i>
              ${item.estimatedTime || item.estimated_time || ""}
            </div>
          </div>
        </div>
      `;
      row.addEventListener("click", () => {
        if (completed.has(id)) {
          completed.delete(id);
          row.className = "flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all bg-gray-50 border-gray-200 hover:border-gray-300";
          row.querySelector(".check-icon").innerHTML = `<i data-lucide="circle" class="w-6 h-6 text-gray-400"></i>`;
          row.querySelector("p").className = "text-lg leading-relaxed text-gray-800";
        } else {
          completed.add(id);
          row.className = "flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all bg-green-50 border-green-200";
          row.querySelector(".check-icon").innerHTML = `<i data-lucide="check-circle" class="w-6 h-6 text-green-600"></i>`;
          row.querySelector("p").className = "text-lg leading-relaxed text-green-800 line-through";
        }
        updateProgress();
        if (window.lucide) window.lucide.createIcons();
      });
      listEl.appendChild(row);
    });
  }

  const listBefore = document.getElementById("list-before");
  const listDuring = document.getElementById("list-during");
  const listAfter = document.getElementById("list-after");

  renderTaskList(listBefore, checklist.before, "before");
  renderTaskList(listDuring, checklist.during, "during");
  renderTaskList(listAfter, checklist.after, "after");

  // Progress
  const totalTasks = (checklist.before?.length || 0) + (checklist.during?.length || 0) + (checklist.after?.length || 0);
  function updateProgress() {
    const completedCount = completed.size;
    const pct = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;
    document.getElementById("progress-count").textContent = `${completedCount}/${totalTasks}`;
    document.getElementById("progress-percent").textContent = `${pct}%`;
    document.getElementById("progress-bar").style.width = pct + "%";

    // Criticals
    const all = [...(checklist.before || []), ...(checklist.during || []), ...(checklist.after || [])];
    const critical = all.filter(t => t.priority === "critical");
    let completedCritical = 0;
    // Walk through completed ids and check if they map to a critical task
    completed.forEach(id => {
      const [phase, idxStr] = id.split("-");
      const idx = parseInt(idxStr, 10);
      const src = checklist[phase] || [];
      if (src[idx] && src[idx].priority === "critical") completedCritical += 1;
    });
    document.getElementById("crit-count").textContent = `${completedCritical}/${critical.length}`;

    // Trophy
    const trophy = document.getElementById("trophy-card");
    if (pct === 100) {
      trophy.classList.remove("hidden");
    } else {
      trophy.classList.add("hidden");
    }
  }
  updateProgress();

  // Reset
  document.getElementById("reset-btn").addEventListener("click", () => {
    // easiest: reload page
    window.location.reload();
  });

  if (window.lucide) window.lucide.createIcons();
});
