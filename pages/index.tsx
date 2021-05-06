import { useEffect } from "react";
import AuthPopup from "components/Auth";
import Header from "components/Header";
import Navbar from "components/Navbar";
import { supabase } from "lib/initSupabase";
import { useRouter } from "next/router";
import Card from "components/landing/Card";

export default function Home() {
  const router = useRouter();

  useEffect(() => {}, []);

  supabase.auth.getSessionFromUrl().then((res) => {
    if (!!res.data) router.push("/dashboard");
  });

  return (
    <div className="h-screen">
      <AuthPopup />
      <div className="pb-32 bg-gray-800">
        <Navbar />
        <Header name="Start" />
      </div>
      <Card />
    </div>
  );
}
