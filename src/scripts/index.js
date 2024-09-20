import "../styles/main.css";
import App from "./views/app";

const app = new App({
  content: document.querySelector("#main-content"),
});

window.addEventListener("hashchange", () => {
  console.log("aktif");
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});
