type CardProps = { color: string, title: string; text: string; image: string };

const Card = ({ color, title, text, image }: CardProps) => {
  return (
    <div
    style={{ backgroundColor: color }}
      className={` rounded-[20px] p-[30px] flex flex-col items-center justify-center`}
    >
      <div className="flex items-center gap-5">
        <img src={image} alt={title} />
        <span className="text-[24px] leading-[100%] font-[700] tracking-[0%] text">
          {title}
        </span>
      </div>
      <p className="text-[17px] min-h-[100px] leading-[100%] tracking-[0%] my-[20px] font-[400] text">
        {text}
      </p>
      <button className="py-[10px] w-full bg-[#152032] rounded-[10px] text-white">
        Learn more
      </button>
    </div>
  );
};

export default Card;
