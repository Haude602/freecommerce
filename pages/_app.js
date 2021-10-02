import "../styles/globals.scss";
import useSWR, { SWRConfig } from "swr";
import axios from "axios";

function MyApp({ Component, pageProps }) {
  function localStorageProvider() {
    if (typeof window === "undefined") {
      return new Map();
    }
    // When initializing, we restore the data from `localStorage` into a map.
    const map = new Map(JSON.parse(localStorage.getItem("app-cache") || "[]"));

    // Before unloading the app, we write back all the data into `localStorage`.
    window.addEventListener("beforeunload", () => {
      const appCache = JSON.stringify(Array.from(map.entries()));
      localStorage.setItem("app-cache", appCache);
    });

    // We still use the map for write & read for performance.
    return map;
  }
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        provider: localStorageProvider,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Config Component={Component} pageProps={pageProps} />
    </SWRConfig>
  );
}

export default MyApp;

function Config({ Component, pageProps }) {
  const config = useSWR("/api/config");
  const home = useSWR("/api/home");

  if (!config.data && !home.data) <h1>Loading...</h1>;

  return <Component {...pageProps} />;
}
