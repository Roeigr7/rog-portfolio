import Skill from "./SkillItem";

const skillsArray = [
  {
    votes: 92,
    name: "Creativity",
  },
  {
    votes: 92,
    name: "Loyality",
  },
  {
    votes: 92,
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
