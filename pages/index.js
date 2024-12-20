import { useRef } from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Head from "next/head";
import Cursor from "../components/Cursor";
import About from "../components/About";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10 grid grid-cols-3">
          <div className="mt-5 col-span-2">
            <h1
              ref={textOne}
              className="text-1xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-1xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-1xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
          </div>
          <div className="mt-5 col-span-1">
            <img
                src={data.headerImage}
                alt="Photo Guillaume Weckering"
                className="object-cover profile-pic"
            />
          </div>
        </div>
        <Socials className="mt-2 laptop:mt-5" />

        {/********************/}
        {/*A PROPROS*******************/}
        {/********************/}
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h2 className="text-2xl text-bold">À PROPOS</h2>

          <p className="tablet:m-10 text-l laptop:text-3l w-full laptop:w-5/5">
            {data.resume.tagline}
          </p>
          <p className="tablet:m-10 text-l laptop:text-3l w-full laptop:w-5/5">
            {data.resume.description}
          </p>

          {data.aboutpara.map((about, key) =>
             <About
                 key={key}
                 tagline={about.tagline}
                 diploma={about.diploma}
                 school={about.school}
                 date={about.date}
                 tasks={about.tasks}
             />
          )}
        </div>

        {/********************/}
        {/*MES REALISATIONS*******************/}
        {/********************/}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h2 className="text-2xl text-bold">MES REALISATIONS</h2>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
                language={project.language}
                technology={project.technology}
                competences={project.competence}
                url={project.url}
              />
            ))}
          </div>
        </div>

        {/*<div className="mt-10 laptop:mt-30 p-2 laptop:p-0">*/}
        {/*  <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>*/}
        {/*  <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">*/}
        {/*    {data.services.map((service, index) => (*/}
        {/*      <ServiceCard*/}
        {/*        key={index}*/}
        {/*        name={service.title}*/}
        {/*        description={service.description}*/}
        {/*      />*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/* This button should not go into production */}
        {/*{process.env.NODE_ENV === "development" && (*/}
        {/*  <div className="fixed bottom-5 right-5">*/}
        {/*    <Link href="/edit">*/}
        {/*      <Button type="primary">Edit Data</Button>*/}
        {/*    </Link>*/}
        {/*  </div>*/}
        {/*)}*/}

        {/*<Footer />*/}
      </div>
    </div>
  );
}
