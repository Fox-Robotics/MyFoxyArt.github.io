import Header from "../components/header";
import Footer from "../components/footer";
import { useLocation } from "react-router-dom";

import { FiFacebook, FiInstagram, FiDownload } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useEffect, useState } from "react";
import { adjectives } from "../constants/constants";

export default function FoxyImage() {
  const [imageData, setSetImageData] = useState(null);
  const [imageName, setImageName] = useState("");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    if (queryParams.get("q")) {
      (async () => {
        const res = await fetch(
          "https://myfoxyart.azurewebsites.net/generateImage?key=" +
            queryParams.get("q")
        );
        const data = await res.json();
        setSetImageData(data);
        setImageName(
          "MY " +
            adjectives[
              Math.floor(Math.random() * adjectives.length)
            ].toUpperCase() +
            " " +
            queryParams.get("q")?.toUpperCase()
        );
      })();
    }
  }, [queryParams]);

  return (
    <div className="flex flex-col min-h-screen justify-between bg-fox-pattern">
      <Header />

      <main className="flex flex-col w-full items-center">
        <div className="relative">
          <h1 className="font-bold text-2xl mb-9 triangle-decoration">
            MY FOXY IMAGE
          </h1>
        </div>
        <section className="flex flex-col gap-x-10 items-center justify-start px-1">
          <div className="max-w-sm">
            {imageData?.image && (
              <img src={"data:image/jpeg;base64, " + imageData.image} />
            )}
          </div>
          <a
            href={imageData?.original_image}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Original
          </a>
          <h2 className="font-bold text-2xl sm:text-3xl">{imageName}</h2>

          <div className="flex flex-col gap-y-3 items-center mt-6">
            {imageData?.image && (
              <a
                download={imageName + ".jpeg"}
                href={"data:image/jpeg;base64, " + imageData.image}
                className="hover:cursor-pointer transform hover:scale-105 rounded flex flex-row items-center gap-x-4 py-2 pl-6 pr-6 text-white font-semibold bg-[#D1415A]"
              >
                <FiDownload className="text-[27px] sm:text-[27px]" />
                <span>DOWNLOAD</span>
              </a>
            )}
            <div className="flex flex-col sm:flex-row gap-x-10 w-full gap-y-3">
              <div className="hover:cursor-pointer transform hover:scale-105 rounded flex flex-row items-center gap-x-4 py-2 pl-6 pr-6 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <FiInstagram className="text-[27px] sm:text-[27px]" />
                <span>SHARE</span>
              </div>
              <div className="hover:cursor-pointer transform hover:scale-105 rounded flex flex-row items-center gap-x-4 py-2 pl-6 pr-6 text-white font-semibold bg-blue-500">
                <FiFacebook className="text-[27px] sm:text-[27px]" />
                <span>SHARE</span>
              </div>
            </div>
          </div>
        </section>

        {!imageData && (
          <div className="flex flex-col items-center justify-center w-screen h-full bg-white absolute top-24 sm:top-32 z-100 p-1">
            <span className=" font-bold text-[27px] ">
              This make take a while
            </span>
            <AiOutlineLoading3Quarters
              size={90}
              className="text-cetys-yellow animate-spin"
            />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
