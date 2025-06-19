import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <>
      <div className="h-screen min-h-fit w-[100vw] bg-linear-to-t from-fuchsia-200 via-blue-500 to-sky-800 flex flex-col justify-between ">
        <div className="container px-4 mx-auto">
          <Header />
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            dolores vitae odit expedita exercitationem repellendus quod at
            aliquid iusto quisquam? Facere ducimus optio cumque deleniti
            voluptatem fugit atque, magni neque laborum laboriosam consectetur!
            Quod eum officia iusto molestiae ipsum ut!
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
