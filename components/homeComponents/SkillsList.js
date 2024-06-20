import Skill from "./SkillItem";

const skillsArray = [
  {
    name: "Creativity",
  },
  {
    name: "Loyality",
  },
  {
    name: "Motivation",
  },
];
const SkillsList = () => {
  return (
    <>
      {skillsArray &&
        skillsArray.map((el, i) => (
          <Skill key={i} votes={el.votes} name={el.name} id={el._id} />
        ))}
    </>
  );
};

export default SkillsList;
