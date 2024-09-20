import "../../components/jumbotron";

const Home = {
  async render() {
    return `
    <div
        class="jumbotron text-white"
        style="background-image: url('./assets/Jumbotron.png')"
      >
        <div
          class="d-flex align-items-center ps-5 pe-5"
          style="height: 120vh; width: 100%"
        > 
          <div class="jumbotron-text">
            <h1 class="text-white title">SENAT MAHASISWA UNIVERSITAS MDP</h1>
            <p class="descriptions">
              Senat Mahaisswa Universitas MDP merupakan suatu organisasi mahasiswa
              yang menaungi Unit Kegiatan Mahasiswa (UKM) yang ada di lingkungan
              Universitas MDP.
            </p>
            <div class="col-lg-3 col-5 mt-4 mb-3 ms-lg-0 me-lg-0 ms-auto me-auto">
              <a
                class="btn w-100 rounded-pill text-white"
                style="background: #1f4287"
                href="/"
              >
              Form Aspirasi
              </a>
            </div>
          </div>
        <div class="object-image w-50 d-none d-lg-flex"></div>
      </div>
    </div>
    `;
  },
};

export default Home;
