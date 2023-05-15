import { Inter } from "@next/font/google";
import "devextreme/dist/css/dx.light.css";
import { AppWrapper } from "../context/state";
import "../styles/_index.scss";

const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <div className="main">
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </div>
    </div>
  );
}
