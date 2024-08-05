const starbucks = [
  { name: "americano", price: 3000, shots: 2, ingredients: ["water", "been"] },
  {
    name: "latte",
    price: 4000,
    shots: 2,
    ingredients: ["water", "been", "milk"],
  },
  {
    name: "frappuccino",
    price: 4000,
    shots: 2,
    ingredients: ["water", "been", "milk", "shake"],
  },
  {
    name: "mocha",
    price: 5000,
    shots: 2,
    ingredients: ["water", "been", "milk", "chocolate"],
  },
];

const menu = document.createElement("div");
menu.style.display = "grid";
menu.style.gridTemplateColumns = "repeat(2,1fr)";
starbucks.forEach((x) => {
  const box = document.createElement("div");
  box.innerHTML = `
    <h4>${x.name + "🧊"}</h4>
    <h5>${x.price + 1000 + "원"} ${x.shots + "샷"}</h5> 
    `;
  box.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
  box.style.display = "flex";
  box.style.flexDirection = "column";
  box.style.justifyContent = "center";
  box.style.alignItems = "center";
  box.style.padding = "20px";
  menu.appendChild(box);
});

document.body.appendChild(menu);
