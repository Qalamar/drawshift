import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import dynamic from "next/dynamic";
import { Auth } from "@supabase/ui";
import { supabase } from "../lib/initSupabase";
import GlobalStyles from "./../components/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <GlobalStyles />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </Auth.UserContextProvider>
  );
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
//export default MyApp;
