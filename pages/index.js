import { useEffect } from "react";
import AuthPopup from "../components/Auth";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { supabase } from "../lib/initSupabase";
import { useRouter } from "next/router";

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

      <main className="-mt-24">
        <div className="m-auto overflow-hidden rounded-lg shadow-xl max-w-7xl sm:px-6 lg:px-8 bg-gradient-to-r from-orange-400 to-pink-500 lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="px-6 pt-10 pb-12 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to dive in?</span>
                <span className="block text-red-900">
                  Get started for free.
                </span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-orange-50">
                Find all what Drawshift has to offer free of charge, and
                pay-as-you go for features that you like.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 mt-8 text-base font-medium text-red-600 bg-orange-100 border border-transparent rounded-md shadow hover:text-red-500"
              >
                Sign up for free
              </a>
            </div>
          </div>
          <div className="-mt-6">
            <img
              className="object-cover object-left-top transform translate-x-6 translate-y-6 rounded-md sm:translate-x-16 lg:translate-y-20"
              src="/drawshift.gif"
              alt="App screenshot"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
