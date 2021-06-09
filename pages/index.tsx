import { useEffect } from "react";
import AuthPopup from "components/Auth";
import Header from "components/Header";
import Navbar from "components/Navbar";
import { supabase } from "lib/initSupabase";
import { useRouter } from "next/router";
import Head from "next/head";
import Card from "components/landing/Card";

export default function Home() {
  const router = useRouter();

  useEffect(() => {}, []);

  supabase.auth.getSessionFromUrl().then((res) => {
    if (!!res.data) router.push("/dashboard");
  });

  return (
    <div className="h-screen lg:overflow-y-hidden">
      <Head>
        <title>Drawshift</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <AuthPopup />
      <div className="fixed">
        <img className="w-screen" src="./wave.svg" />
      </div>
      <div className="pb-32 relative bg-gray-800">
        <Navbar />
        <Header name="Start" />
      </div>

      <Card />
    </div>
  );
}
