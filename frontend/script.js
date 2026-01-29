document.getElementById("testBtn").addEventListener("click", async () => {
  const response = await fetch("http://localhost:3000/");
  const text = await response.text();

  document.getElementById("response").innerText = text;
});
