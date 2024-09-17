function footer() {
  return `
    <footer>
      <p>no copyright by Senat</p>
    </footer>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("footer").innerHTML = `${footer()}`;
});
