
// assets/js/resources.js
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("res-search");
  let activeTab = "contacts";

  const tabs = {
    contacts: document.getElementById("tab-contacts"),
    procedures: document.getElementById("tab-procedures"),
    equipment: document.getElementById("tab-equipment"),
    forms: document.getElementById("tab-forms")
  };
  const panels = {
    contacts: document.getElementById("panel-contacts"),
    procedures: document.getElementById("panel-procedures"),
    equipment: document.getElementById("panel-equipment"),
    forms: document.getElementById("panel-forms")
  };

  function setActiveTab(tab) {
    activeTab = tab;
    Object.keys(tabs).forEach(k => {
      tabs[k].classList.toggle("bg-blue-600", k === tab);
      tabs[k].classList.toggle("text-white", k === tab);
      tabs[k].classList.toggle("bg-gray-100", k !== tab);
      tabs[k].classList.toggle("text-gray-700", k !== tab);
      panels[k].classList.toggle("hidden", k !== tab);
    });
  }

  Object.keys(tabs).forEach(k => tabs[k].addEventListener("click", () => setActiveTab(k)));
  setActiveTab("contacts");

  function iconForCategory(category) {
    const map = {
      'מועצה': 'users',
      'צח\"י': 'shield',
      'חירום': 'alert-triangle',
      'רפואה': 'heart',
      'ביטחון': 'shield',
      'פיקע\"ר': 'alert-triangle',
      'פינוי': 'truck',
      'הגנה': 'shield',
      'תקשורת': 'phone',
      'כיבוי': 'alert-triangle',
      'חשמל': 'wrench',
      'דיווחים': 'file-text',
      'ניהול': 'users',
      'הערכה': 'file-text'
    };
    return map[category] || 'file-text';
  }

  function colorForCategory(category) {
    const map = {
      'חירום': 'bg-red-100 text-red-800',
      'רפואה': 'bg-pink-100 text-pink-800',
      'ביטחון': 'bg-blue-100 text-blue-800',
      'מועצה': 'bg-purple-100 text-purple-800',
      'צח\"י': 'bg-green-100 text-green-800',
      'default': 'bg-gray-100 text-gray-800'
    };
    return map[category] || map['default'];
  }

  function filter(list) {
    const q = (searchInput.value || "").toLowerCase();
    return list.filter(x =>
      (x.title || "").toLowerCase().includes(q) ||
      (x.content || "").toLowerCase().includes(q) ||
      (x.description || "").toLowerCase().includes(q) ||
      (x.category || "").toLowerCase().includes(q)
    );
  }

  function renderContacts() {
    const wrap = document.getElementById("grid-contacts");
    wrap.innerHTML = "";
    filter(RESOURCES_DATA.contacts).forEach((c) => {
      const Icon = iconForCategory(c.category);
      const badge = colorForCategory(c.category);
      const card = document.createElement("div");
      card.className = "bg-white rounded-xl border hover:shadow-lg transition-shadow";
      card.innerHTML = `
        <div class="p-6">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <i data-lucide="${Icon}" class="w-5 h-5 text-blue-600"></i>
              </div>
              <h3 class="text-lg font-semibold">${c.title}</h3>
            </div>
            <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${badge}">${c.category}</span>
          </div>
          <p class="text-gray-600 text-sm mt-3 mb-4">${c.description || ""}</p>
          <div class="flex items-center justify-between">
            <div class="text-2xl font-bold text-blue-800">${c.phone || ""}</div>
            ${c.phone ? `<a href="tel:${c.phone}" class="text-blue-600 hover:text-blue-800 transition-colors"><i data-lucide="phone" class="w-5 h-5"></i></a>` : ""}
          </div>
        </div>
      `;
      wrap.appendChild(card);
    });
  }

  function renderSimple(list, gridId, color) {
    const wrap = document.getElementById(gridId);
    wrap.innerHTML = "";
    filter(list).forEach((item) => {
      const Icon = iconForCategory(item.category);
      const badge = colorForCategory(item.category);
      const card = document.createElement("div");
      card.className = "bg-white rounded-xl border hover:shadow-lg transition-shadow";
      card.innerHTML = `
        <div class="p-6">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 ${color} rounded-lg flex items-center justify-center">
                <i data-lucide="${Icon}" class="w-5 h-5"></i>
              </div>
              <h3 class="text-lg font-semibold">${item.title}</h3>
            </div>
            <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${badge}">${item.category}</span>
          </div>
          <p class="text-gray-600 mt-3 mb-4">${item.content || ""}</p>
          <div class="flex items-center gap-2 text-blue-600 hover:text-blue-800 cursor-pointer transition-colors">
            <i data-lucide="external-link" class="w-4 h-4"></i>
            <span class="text-sm">פתח</span>
          </div>
        </div>
      `;
      wrap.appendChild(card);
    });
  }

  function renderAll() {
    renderContacts();
    renderSimple(RESOURCES_DATA.procedures, "grid-procedures", "bg-green-100 text-green-600");
    renderSimple(RESOURCES_DATA.equipment, "grid-equipment", "bg-orange-100 text-orange-600");
    renderSimple(RESOURCES_DATA.forms, "grid-forms", "bg-purple-100 text-purple-600");
    if (window.lucide) window.lucide.createIcons();
  }

  searchInput.addEventListener("input", renderAll);
  renderAll();
});
