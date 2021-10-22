import AuthPopup from "components/Auth";
import Navbar from "components/Navbar";
import { supabase } from "lib/initSupabase";
import { useRouter } from "next/router";
import Head from "next/head";
import Showcase from "components/showcase";
import { Toaster } from "react-hot-toast";
import {
  LandingWrapper,
  LandingContent,
} from "components/primitives/containers";
import Header from "components/header";

export default function Home() {
  const router = useRouter();
  supabase.auth.getSessionFromUrl().then((res) => {
    if (!!res.data) router.push("/dashboard");
  });

  return (
    <LandingWrapper>
      <Head>
        <title>Drawshift</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Toaster />
      <AuthPopup />
      <LandingContent>
        <Navbar />
        <Header />
      </LandingContent>
      <Showcase />
    </LandingWrapper>
  );
}
