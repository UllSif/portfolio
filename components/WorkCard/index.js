import React from "react";

const WorkCard = ({ img, name, description, onClick, language, technology, competences, url }) => {
  return (
    <div
      className="rounded-lg p-2 laptop:p-4 first:ml-0 link cursor-pointer"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "600px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-contain hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
      <p className="text-xl">
        Langages : {language}
      </p>
      <p className="text-xl">
        Technologies : {technology}
      </p>
      <span className="text-xl">Compétences :</span>
      <ul className="list-disc text-xl">
        {competences.map((competence, key) => (
          <li key={key}>{competence}</li>
        ))}
      </ul>
      {/*<a href={url} className="text-xl">Lien Github</a>*/}
    </div>
  );
};

export default WorkCard;
