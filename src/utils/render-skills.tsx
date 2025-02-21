import React from "react";
import { Skill } from "../types/skill";
import Link from "../components/ui/link";
import { Avatar } from "kitchn";

const renderSkills = (skills: Skill[]) => skills.map((skill, index, array) => (
  <React.Fragment key={skill.id}>
    <Link href={skill.url}>
      <Avatar src={skill.imageUrl} size={20} marginRight={5} />
      {skill.name}
    </Link>
    {index < array.length - 1 && ", "}
  </React.Fragment>
));

export default renderSkills;