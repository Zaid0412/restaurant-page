const container = document.querySelector("#content");

export function createHomePage() {
  container.textContent = "";

  const hrsCnt = document.createElement("div");
  hrsCnt.classList.add("hrs-cnt");

  const hrsCntHeader = document.createElement("h1");
  hrsCntHeader.textContent = "Hours";

  const hrsCntTxt = document.createElement("pre");
  hrsCntTxt.textContent = `
    Sunday: 8am - 8pm
    
    Monday: 6am - 6pm

    Tuesday: 6am - 6pm
                         
    Wednesday: 6am - 6pm
                         
    Thursday: 6am - 10pm
                         
    Friday: 6am - 10pm
                         
    Saturday: 8am - 10pm`;

  hrsCnt.appendChild(hrsCntHeader);
  hrsCnt.appendChild(hrsCntTxt);

  const locationCnt = document.createElement("div");
  locationCnt.classList.add("location-cnt");

  const locationCntHeader = document.createElement("h1");
  locationCntHeader.textContent = "Location";

  const locationCntTxt = document.createElement("p");
  locationCntTxt.textContent =
    "602 Ned Highway, Port Darellbury, MS 53899-0228";

  locationCnt.appendChild(locationCntHeader);
  locationCnt.appendChild(locationCntTxt);

  container.appendChild(hrsCnt);
  container.appendChild(locationCnt);
}
