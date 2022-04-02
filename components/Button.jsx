const Button = ({ text, active, extraClasses, textClass }) => {
  return (
    <button
      className={`${
        extraClasses ? extraClasses : "w-20 h-8 bg-[#e7e5e5]"
      } rounded-md cursor-pointer flex items-center justify-center group ${
        active
          ? "bg-[#FF1534] hover:bg-textPlayRed text-white"
          : ""
      }`}
    >
      <p className={`${textClass ? textClass : "text-sm font-semibold"} `}>
        {text}
      </p>
    </button>
  );
};

export default Button;
