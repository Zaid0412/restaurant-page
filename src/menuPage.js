const container = document.querySelector("#content");

export function createMenuPage() {
  container.textContent = "";

  const menuCnt = document.createElement("div");
  menuCnt.classList.add("menu-cnt");

  //  Item 1 //
  const item1 = document.createElement("div");
  item1.classList.add("menu-item");
  item1.classList.add("one");

  const item1Pic = document.createElement("div");
  item1Pic.classList.add("menu-item-pic");
  item1Pic.classList.add("item-1");

  const item1Header = document.createElement("h2");
  item1Header.textContent = "Sushi";

  const item1Para = document.createElement("p");
  item1Para.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quaerat molestiae quibusdam.";

  item1.appendChild(item1Pic);
  item1.appendChild(item1Header);
  item1.appendChild(item1Para);

  //  Item 2 //

  const item2 = document.createElement("div");
  item2.classList.add("menu-item");
  item2.classList.add("two");

  const item2Pic = document.createElement("div");
  item2Pic.classList.add("menu-item-pic");
  item2Pic.classList.add("item-2");

  const item2Header = document.createElement("h2");
  item2Header.textContent = "Steak";

  const item2Para = document.createElement("p");
  item2Para.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quaerat molestiae quibusdam.";

  item2.appendChild(item2Pic);
  item2.appendChild(item2Header);
  item2.appendChild(item2Para);

  // Item 3 //

  const item3 = document.createElement("div");
  item3.classList.add("menu-item");
  item3.classList.add("three");

  const item3Pic = document.createElement("div");
  item3Pic.classList.add("menu-item-pic");
  item3Pic.classList.add("item-3");

  const item3Header = document.createElement("h2");
  item3Header.textContent = "Pizza";

  const item3Para = document.createElement("p");
  item3Para.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quaerat molestiae quibusdam.";

  item3.appendChild(item3Pic);
  item3.appendChild(item3Header);
  item3.appendChild(item3Para);

  // Item 4 //

  const item4 = document.createElement("div");
  item4.classList.add("menu-item");
  item4.classList.add("four");

  const item4Pic = document.createElement("div");
  item4Pic.classList.add("menu-item-pic");
  item4Pic.classList.add("item-4");

  const item4Header = document.createElement("h2");
  item4Header.textContent = "Burger";

  const item4Para = document.createElement("p");
  item4Para.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quaerat molestiae quibusdam.";

  item4.appendChild(item4Pic);
  item4.appendChild(item4Header);
  item4.appendChild(item4Para);

  // Item 5 //

  const item5 = document.createElement("div");
  item5.classList.add("menu-item");
  item5.classList.add("five");

  const item5Pic = document.createElement("div");
  item5Pic.classList.add("menu-item-pic");
  item5Pic.classList.add("item-5");

  const item5Header = document.createElement("h2");
  item5Header.textContent = "Spaghetti";

  const item5Para = document.createElement("p");
  item5Para.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quaerat molestiae quibusdam.";

  item5.appendChild(item5Pic);
  item5.appendChild(item5Header);
  item5.appendChild(item5Para);

  // Item 6 //

  const item6 = document.createElement("div");
  item6.classList.add("menu-item");
  item6.classList.add("six");

  const item6Pic = document.createElement("div");
  item6Pic.classList.add("menu-item-pic");
  item6Pic.classList.add("item-6");

  const item6Header = document.createElement("h2");
  item6Header.textContent = "Dumplings";

  const item6Para = document.createElement("p");
  item6Para.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quaerat molestiae quibusdam.";

  item6.appendChild(item6Pic);
  item6.appendChild(item6Header);
  item6.appendChild(item6Para);

  // Appending all of them to menuCnt //

  menuCnt.appendChild(item1);
  menuCnt.appendChild(item2);
  menuCnt.appendChild(item3);
  menuCnt.appendChild(item4);
  menuCnt.appendChild(item5);
  menuCnt.appendChild(item6);

  // Appending menuCnt to container //

  container.appendChild(menuCnt);
}
