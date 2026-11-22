const filters = document.querySelector("[data-card-filter]");
const list = document.querySelector("[data-card-list]");
const cards = [...list.children];
const status = filters.querySelector('[role="status"]');
const labels = new Map();

for (const tag of list.querySelectorAll("[data-tag]")) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = tag.className;
  button.dataset.tag = tag.dataset.tag;
  button.textContent = tag.textContent;
  labels.set(button.dataset.tag, button.textContent);
  tag.replaceWith(button);
}

const buttons = [...filters.querySelectorAll("button[data-tag]"), ...list.querySelectorAll("button[data-tag]")];

function showFilter() {
  const selected = new URLSearchParams(location.search).get("tag");
  const active = labels.has(selected) ? selected : "";
  let count = 0;

  for (const card of cards) {
    card.hidden = Boolean(active && !card.querySelector(`[data-tag="${active}"]`));
    if (!card.hidden) count += 1;
  }

  for (const button of buttons) {
    button.setAttribute("aria-pressed", String(button.dataset.tag === active));
  }

  const noun = filters.dataset.cardFilter + (count === 1 ? "" : "s");
  status.textContent = active ? `${count} ${noun} tagged ${labels.get(active)}` : `All ${count} ${noun}`;
}

function chooseFilter(event) {
  const button = event.target.closest("button[data-tag]");
  if (!button) return;

  const url = new URL(location.href);
  const tag = button.dataset.tag;
  if (tag) url.searchParams.set("tag", tag);
  else url.searchParams.delete("tag");

  if (url.href !== location.href) history.pushState(null, "", url);
  showFilter();
}

filters.addEventListener("click", chooseFilter);
list.addEventListener("click", chooseFilter);
window.addEventListener("popstate", showFilter);
showFilter();
filters.hidden = false;
