import { HelmetProvider, Helmet } from "react-helmet-async";
import useWindowSize from "@common/hooks/useWindowSize";

export const FormAspirasi = () => {
  const windowSize = useWindowSize();
  return (
    <HelmetProvider>
      <section
        className={`${
          windowSize["1.5xl"] ? "form-aspirasi" : "form-aspirasi-mobile"
        } bg-gray-300 flex justify-center items-center`}
      >
        <Helmet>
          <title>Sema Confess Pages</title>
        </Helmet>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd1UfOyXQuY6JdEVT-3DHZQgTRoxiKEOEe9qWcru6NN0CuQqA/viewform?embedded=true"
          width="100%"
          height="1210"
          className="rounded-lg shadow-2xl bg-gray-400 border-4 border-opacity-30 border-gray-400 bg-opacity-30 shadow-inner-xl lg:w-1/2 w-4/5 pt-12 backdrop-blur-lg"
        >
          Loading…
        </iframe>
      </section>
    </HelmetProvider>
  );
};
