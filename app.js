let terms = JSON.parse(localStorage.getItem("terms")) || [];

function addTerm() {
  const term = {
    term: document.getElementById("term").value,
    abbr: document.getElementById("abbr").value,
    full: document.getElementById("full").value,
    myDesc: document.getElementById("myDesc").value,
    officialDesc: document.getElementById("officialDesc").value
  };

  terms.push(term);

  localStorage.setItem("terms", JSON.stringify(terms));

  renderList();
}

function renderList() {
  const list = document.getElementById("list");
  const keyword = document.getElementById("search").value.toLowerCase();

  list.innerHTML = "";

  terms
    .filter(t =>
      t.term.toLowerCase().includes(keyword) ||
      (t.abbr && t.abbr.toLowerCase().includes(keyword)) ||
      (t.full && t.full.toLowerCase().includes(keyword))
    )
    .forEach(t => {
      const li = document.createElement("li");
      li.textContent = `${t.term}（${t.abbr || "略語なし"}）`;
      list.appendChild(li);
    });
}

document.getElementById("search").addEventListener("input", renderList);

renderList();
