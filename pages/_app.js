import "@/styles/nav.css";
import Index from "./layout/main";
export default function App({ Component, pageProps }) {
  return (
    <Index>
      <Component {...pageProps} />
    </Index>
  );
}
