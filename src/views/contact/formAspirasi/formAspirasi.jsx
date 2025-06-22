import { HelmetProvider, Helmet } from "react-helmet-async";
import useWindowSize from "@common/hooks/useWindowSize";

export const FormAspirasi = () => {
  const windowSize = useWindowSize();
  return (
    <HelmetProvider>
      <Helmet>
        <title>Sema Confess Pages</title>
      </Helmet>
      <section
        className={`${
          windowSize["1.5xl"] ? "form-aspirasi" : "form-aspirasi-mobile"
        } bg-gray-300 flex justify-center items-center`}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd1UfOyXQuY6JdEVT-3DHZQgTRoxiKEOEe9qWcru6NN0CuQqA/viewform?embedded=true"
          width="100%"
          height="1210"
          className="w-4/5 pt-12 bg-gray-400 border-4 border-gray-400 rounded-lg shadow-2xl border-opacity-30 bg-opacity-30 shadow-inner-xl lg:w-1/2 backdrop-blur-lg"
        >
          Loading…
        </iframe>
      </section>
    </HelmetProvider>
  );
};
