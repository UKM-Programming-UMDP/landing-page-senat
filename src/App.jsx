import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./templates/layout";
import { Home } from "./views/home";
import { ErrorPage } from "./views/ErorrPage";
import { About } from "./views/about";
import { Sosmed } from "./views/contact/medsos/medsos";
import { FormAspirasi } from "./views/contact/formAspirasi/formAspirasi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import "./App.css";

function App() {
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
