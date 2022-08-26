type Props = {
  skill: string;
  s: any;
  children: any;
};

const SkillCard = ({ skill, s, children }: Props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.skillsWrapper}>
        <div className={s.skillsBody}>
          <div className={s.skillBox}>{children}</div>
          <div className={s.skillName}>
            <p className={s.font}>{skill}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
