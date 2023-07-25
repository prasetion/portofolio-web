import Head from "next/head";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import prasetion from "../public/dev-ed-wave.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState, Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "../components/Model";
import { Environment, OrbitControls, Stage, Gltf } from "@react-three/drei";
import Link from "next/link";
import { suspend } from "suspend-react";

const city = import("@pmndrs/assets/hdri/city.exr");

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const ref = useRef();

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Prasetio Nugroho Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div></div>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <section className="min-h-screen">
            <nav className="py-10 flex justify-between">
              <h1 className="text-xl font-burtons dark:text-gray-200">
                PRASETION
              </h1>
              <ul className="flex items-center">
                <li>
                  {darkMode ? (
                    <BsFillSunFill
                      onClick={() => setDarkMode(!darkMode)}
                      className="cursor-pointer text-2xl fill-white"
                    />
                  ) : (
                    <BsFillMoonStarsFill
                      onClick={() => setDarkMode(!darkMode)}
                      className="cursor-pointer text-2xl fill-black"
                    />
                  )}
                </li>
              </ul>
            </nav>
            <div className="h-96 mb-10">
              <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                <Suspense fallback={null}>
                  <Environment files={suspend(city).default} />
                  <Gltf castShadow receiveShadow src="suzanne.gltf" />
                </Suspense>
                <OrbitControls ref={ref} autoRotate />
              </Canvas>
              {/* <div className="text-center">
                <Link
                  href="https://skfb.ly/6WExH"
                  className=" text-gray-700 no-underline hover:underline text-sm dark:text-gray-300"
                  target={"_blank"}
                >
                  Model by Roman Mad
                </Link>
              </div> */}
            </div>
            <div className="rounded bg-gray-200 p-4 text-center dark:text-gray-200 dark:bg-slate-600">
              Hello, I am Software Engineer from Indonesia
            </div>
            <div className="flex mb-4 py-10">
              <div className="w-3/4">
                <h2 className="text-4xl py-2 text-teal-600 font-medium">
                  Prasetio Nugroho
                </h2>
                <h3 className="text-1xl dark:text-gray-200">
                  Normal people and usually type Helllo World
                </h3>
              </div>
              <div className="w-1/4">
                <div className="relative bg-gradient-to-b from-teal-500 rounded-full overflow-hidden w-24 h-24 mx-auto">
                  <Image src={prasetion} fill className="object-cover"></Image>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold dark:text-gray-200">
                About Me
              </h3>
              <p className="py-2 text-lg leading-8 text-gray-800 dark:text-gray-200 indent-8">
                More than 5 year as software engineer and self-taught learning
                in programming. I have worked on several projects from concept
                to completion. I am specialist in react to create front end and
                unity engine to create AR/VR/MR. I am open and willing to learn
                whatever is necessary to accomplish my client&apos;s goal.
              </p>
            </div>
          </section>
          <section>
            <div className="py-5">
              <h3 className="text-2xl font-semibold dark:text-gray-200">
                Journey
              </h3>
              <ul className="list-disc p-4 text-md dark:text-gray-200 pl-8">
                <li>
                  <div className="flex mb-1">
                    <div className="w-1/5 font-semibold">1993</div>
                    <div className="w-4/5">Born in Sidoarjo</div>
                  </div>
                </li>
                <li>
                  <div className="flex mb-1">
                    <div className="w-1/5 font-semibold">2015</div>
                    <div className="w-4/5">
                      Graduated Diploma Program (Multimedia Broadcasting Major)
                      from Electronic Engineering Polytechnic Institute of
                      Surabaya
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex mb-1">
                    <div className="w-1/5 font-semibold">2016-2019</div>
                    <div className="w-4/5">
                      Worked in Octagon Studio Bandung as Unity Developer
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex mb-1">
                    <div className="w-1/5 font-semibold">2018-Present</div>
                    <div className="w-4/5">Freelance</div>
                  </div>
                </li>
                <li>
                  <div className="flex mb-1">
                    <div className="w-1/5 font-semibold">2020-Present</div>
                    <div className="w-4/5">
                      Worked in Virtu as Software Engineer
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex mb-1">
                    <div className="w-1/5 font-semibold">2021</div>
                    <div className="w-4/5">
                      Graduated Bachelor Program (Communications Major) from
                      Universitas Dr.Soetomo
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <div>
              <h3 className="text-2xl font-semibold dark:text-gray-200">
                Portofolio
              </h3>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/4 flex-1">
                <Image
                  src={web1}
                  className="rounded-lg object-cover "
                  width={"100%"}
                  height={"100%"}
                  alt=""
                ></Image>
              </div>
              <div className="basis-1/4 flex-1">
                <Image
                  src={web2}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  alt=""
                ></Image>
              </div>
              <div className="basis-1/4 flex-1">
                <Image
                  src={web3}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  alt=""
                ></Image>
              </div>
              <div className="basis-1/4 flex-1">
                <Image
                  src={web4}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  alt=""
                ></Image>
              </div>
              <div className="basis-1/4 flex-1">
                <Image
                  src={web5}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  alt=""
                ></Image>
              </div>
              <div className="basis-1/4 flex-1">
                <Image
                  src={web6}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  alt=""
                ></Image>
              </div>
            </div>
          </section>
          <section className="text-center py-10">
            <h3 className="text-2xl font-semibold dark:text-gray-200">
              Connect with me
            </h3>
            <div className="text-5xl flex justify-center gap-10 py-6 text-gray-600">
              <AiFillTwitterCircle
                className="dark:fill-white hover:cursor-pointer"
                onClick={() => openInNewTab("https://twitter.com/seti0n")}
              ></AiFillTwitterCircle>
              <AiFillLinkedin
                className="dark:fill-white hover:cursor-pointer"
                onClick={() =>
                  openInNewTab(
                    "https://www.linkedin.com/in/prasetio-nugroho-295865ba/"
                  )
                }
              ></AiFillLinkedin>
              <AiFillGithub
                className="dark:fill-white hover:cursor-pointer"
                onClick={() => openInNewTab("https://github.com/prasetion")}
              ></AiFillGithub>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
