export const PopularCuisines = ({ image, title }) => {
  return (
    <div className="px-3 flex flex-col justify-center items-center">
      <img
        className="w-[3rem] h-[3rem] lg:w-[6rem] lg:h-[6rem] rounded-full object-cover object-center"
        src={image}
        alt={title}
      />
      <span className="py-2 font-semibold text-xs text-gray-200">
        {title.length > 6 ? title.substring(0, 12) + "..." : title}
      </span>
    </div>
  );
};
