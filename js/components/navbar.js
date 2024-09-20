function navbar() {
  return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark-blue fixed-top pt-0 pb-0">
      <div class="container-fluid pe-5 ps-5  d-flex align-items-center">
        <a class="navbar-brand" href="#"><img  src="/../assets/Logo_senat.png" width="100px" alt="photo" /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about.html">About</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contact
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Contact 1</a></li>
                <li><a class="dropdown-item" href="#">Contact 2</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Contact 3</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("navbar").innerHTML = navbar();

  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (currentPath === href || (currentPath === "/" && href === "/home")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
