const container = document.querySelector("#content");

export function createAboutPage() {
  container.textContent = "";

  const abtCnt = document.createElement("div");
  abtCnt.classList.add("about");

  const abtCntHeader = document.createElement("h1");
  abtCntHeader.textContent = "About";

  const abtCntContent = document.createElement("p");
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eveniet. Soluta repudiandae aliquid, incidunt numquam architecto aperiam tenetur commodi error praesentium, sunt nam voluptates, tempora vitae! Necessitatibus nobis nisi similique.";
  abtCntContent.textContent = text + text + text + text;

  abtCnt.appendChild(abtCntHeader);
  abtCnt.appendChild(abtCntContent);

  container.appendChild(abtCnt);
}
