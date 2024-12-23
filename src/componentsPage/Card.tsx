interface CardProps {
  cardImg: string;
  title: string;
  description: string;
  avatarImg: string | undefined;
}

const Card = ({ cardImg, title, description, avatarImg }: CardProps) => {
  return (
    <div className="grid gap-[inherit] mx-auto p-[inherit] bg-gray-950 rounded-md">
      <img src={cardImg} alt="" />
      <p>{title}</p>
      <p>{description}</p>
      <div className="flex flex-row items-center">
        <img className="max-w-10 rounded-full" src={avatarImg} alt="" />
        <div className="flex flex-col gap-1 px-5">
          <span>Community</span>
          <span>Nov 15, 2024</span>
        </div>
        <span>5 min read</span>
      </div>
    </div>
  );
};
export default Card;
