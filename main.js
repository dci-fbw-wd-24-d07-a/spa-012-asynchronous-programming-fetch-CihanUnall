function processData() {
  fetch("data.txt")
    .then((response) => response.text())
    .then((data) => {
      //----
      const wordsArray = data.split("\n");

      wordsArray.sort();
      const listElement = document.getElementById("sortedList");
      listElement.innerHTML = "";

      wordsArray.forEach((word) => {
        const listItem = document.createElement("li");
        listItem.textContent = word;
        listElement.appendChild(listItem);
      });
    }) //------
    .catch((error) => console.error("Error fetching data:", error));
}

document.getElementById("loadDataBtn").addEventListener("click", processData);
