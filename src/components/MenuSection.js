import React from "react";

const MenuSection = ({ data, menuTitle }) => {
  console.log(data);
  return (
    <div className="flex flex-col justify-center justify-items-center gap-10 border-2 border-gray-100 py-5">
      <h1 className="self-center font-serif uppercase tracking-[0.2em]">
        {menuTitle}
      </h1>
      {data?.map((item) => (
        <article className="max-w-[30rem] px-10">
          <h1 className="uppercase font-semibold">{item.name}</h1>
          <p className="text-sm">{item.description}</p>
        </article>
      ))}
    </div>
  );
};

export default MenuSection;
