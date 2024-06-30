document.getElementById("addButton").addEventListener("click", function () {
  const prayerInput = document.getElementById("prayerInput");
  const tagSelect = document.getElementById("tagSelect");
  const prayerList = document.getElementById("prayerList");

  if (prayerInput.value.trim() !== "") {
    const listItem = document.createElement("li");
    listItem.classList.add("prayer-item");

    const prayerText = document.createElement("span");
    prayerText.textContent = `${prayerInput.value} (${tagSelect.value})`;

    const answerCheckbox = document.createElement("input");
    answerCheckbox.type = "checkbox";
    answerCheckbox.classList.add("answered-checkbox");

    listItem.appendChild(prayerText);
    listItem.appendChild(answerCheckbox);
    prayerList.appendChild(listItem);

    prayerInput.value = "";
  }
});
