import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Layout } from "./templates/layout";
import { Home } from "./views/home/home";
import { ErrorPage } from "./views/ErorrPage";
import { About } from "./views/about/about";
import { Sosmed } from "./views/contact/medsos/medsos";
import { FormAspirasi } from "./views/contact/formAspirasi/formAspirasi";

function App() {
  AOS.init();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact/social-media" element={<Sosmed />} />
          <Route path="/contact/form-aspirasi" element={<FormAspirasi />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
