// Echtzeit
setInterval(() => {
  document.getElementById("clock-real").innerText =
    new Date().toLocaleTimeString();
}, 1000);

// Arbeitszeit
let workSeconds = 0;
setInterval(() => {
  workSeconds++;
  document.getElementById("clock-work").innerText =
    new Date(workSeconds * 1000).toISOString().substr(11, 8);
}, 1000);
