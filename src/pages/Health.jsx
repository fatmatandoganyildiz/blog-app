import React from "react";

function Health() {
  return (
    
    <>
      <h1 className="text-center my-16 mx-16 text-6xl font-extralight tracking-widest">
        HEALTH{" "}
      </h1>
      <div className="mx-16 my-16">
        <div>
          <img
            className="w-full h-[240px] object-cover"
            src="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg"
            alt="pic"
          />
        </div>
        <div className="my-10 border w-1/4 h-[240px] ">
          <img
            className="w-full h-[200px] object-cover"
            src="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg"
            alt="pic"
          />
          <h4 className="text-2xl my-2">Makale-1</h4>
          <p className="ml-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
            dolore officiis accusamus atque illo, cupiditate iste illum eveniet
            unde, eos quas iusto, corrupti expedita ratione quidem? Obcaecati
            dolorem at unde?
          </p>
        </div>
      </div>
    </>
  );
}

export default Health;
