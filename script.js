fetch("data.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("h1").textContent = data.headings.h1;
    document.getElementById("h2").textContent = data.headings.h2;
    document.getElementById("h3").textContent = data.headings.h3;
    document.getElementById("h4").textContent = data.headings.h4;
    document.getElementById("h5").textContent = data.headings.h5;
    document.getElementById("h6").textContent = data.headings.h6;
  })
  .catch(error => console.error("Error loading JSON:", error));
