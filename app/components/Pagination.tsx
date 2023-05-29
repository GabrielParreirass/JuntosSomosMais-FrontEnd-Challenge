"use client";

import React, { useState } from "react";
import Image from "next/image";

const Pagination = ({ data }: any) => {
  function capitalizePhrase(str: string) {
    const arr = str.split(" ");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    return str2;
  }

  const[paginationNumber, setPaginationNumber] = useState(0)

  let paginationArray: any = [];

  for (let i = 0; i < Math.ceil(data.results.length / 9); i++) {
    paginationArray.push(i);
  }

  return (
    <>
      <div className="mt-5">Exibindo 9 de {data.results.length}</div>
      <div className="grid grid-cols-3 grid-rows-3 gap-5 place-items-center mt-5">
        {data.results
          .slice(paginationNumber, paginationNumber + 9)
          .map((user: any) => (
            <div className="border border-gray-300 rounded flex flex-col items-center justify-center  w-3/4">
              <Image
                src={user.picture.large}
                height={100}
                width={100}
                alt="foto"
                className="rounded-full mt-12"
              ></Image>
              <div className="font-bold text-lg mb-5 mt-1">
                {user.name.first.charAt(0).toUpperCase() +
                  user.name.first.slice(1)}{" "}
                {user.name.last.charAt(0).toUpperCase() +
                  user.name.last.slice(1)}
              </div>
              <div className="mb-5 text-md">
                {capitalizePhrase(user.location.street)}
              </div>
              <div className="text-sm">
                {capitalizePhrase(user.location.city)}
              </div>
              <div className="text-sm mb-12">
                {user.location.state.charAt(0).toUpperCase() +
                  user.location.state.slice(1)}{" "}
                - CEP: {user.location.postcode}{" "}
              </div>
            </div>
          ))}
      </div>
      <div>
        {paginationArray.map((i: number) => (
          <div onClick={()=> setPaginationNumber(9*i)}>{i}</div>
        ))}
      </div>
    </>
  );
};

export default Pagination;
