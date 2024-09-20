function footer() {
  return `
    <footer class="mt-3 mb-auto bg-dark-blue text-white ps-5 pe-5" style="overflow: hidden">
      <div class="row mt-3 mb-3">
        <h4 class="text-center mt-5 sub-title">COLLABORATION WITH</h4>
      </div>
      <div class="row d-flex gap-3 justify-content-center align-items-center">
        <div class="col-lg-2 col-4">
          <img src="../../assets/logo_senat.png" class="w-100" alt="Logo Senat"/>
        </div>
        <div class="col-lg-2 col-4">
          <img src="../../assets/Logo-Programming.png" class="w-100" alt="Programming Logo"/>
        </div>
      </div>
      <p class="mt-3 mb-3 text-start">Copyright © 2024 | Universitas MDP</p>
    </footer>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("footer").innerHTML = footer();
});
