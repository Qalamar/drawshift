import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import dynamic from "next/dynamic";


function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
//export default MyApp;
