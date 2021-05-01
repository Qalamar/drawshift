import { useEffect } from "react";
import AuthPopup from "../components/Auth";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { supabase } from "../lib/initSupabase";
import { useRouter } from "next/router";
import Card from "../components/landing/Card";

const contest = {
  description:
    "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus eturquidem assumenda.",
  firstPrize: 50,
  secondPrize: 30,
  thirdPrize: 15,
};

export default function Home() {
  const router = useRouter();

  useEffect(() => {}, []);

  supabase.auth.getSessionFromUrl().then((res) => {
    if (!!res.data) router.push("/home");
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
