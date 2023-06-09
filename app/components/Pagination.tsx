"use client";

import React, { useState } from "react";
import Image from "next/image";

import Logo from '../logo.svg'


const Pagination = ({ data }: any) => {
  function capitalizePhrase(str: string) {
    const arr = str.split(" ");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    return str2;
  }

  const [paginationNumber, setPaginationNumber] = useState(0);

  const [genderFilter, setGenderFilter] = useState("");

  const [stateFilter, setStateFilter] = useState("");

  const [defaultData, setDefaultData] = useState(data.results);

  const [usersData, setUsersData] = useState(data.results);

  const [nameFilter, setNameFilter] = useState("")

  let paginationArray: any = [];

  for (let i = 0; i < Math.ceil(usersData.length / 9); i++) {
    paginationArray.push(i);
  }

  const handleClickFilter = () => {
    if (genderFilter && stateFilter != "") {
      const newData2 = data.results.filter(
        (person: any) =>
          person.location.state.toLowerCase() === stateFilter.toLowerCase() &&
          person.gender === genderFilter
      );
      setUsersData(newData2);
    } else if (genderFilter != "") {
      const newData2 = data.results.filter(
        (person: any) => person.gender === genderFilter
      );
      setUsersData(newData2);
    } else if (stateFilter != "") {
      const newData2 = data.results.filter(
        (person: any) =>
          person.location.state.toLowerCase() === stateFilter.toLowerCase()
      );
      setUsersData(newData2);
    }
  };

  const handleClearFilter = () => {
    const radios: any = document.getElementsByName("genderFilter");
    for (let i = 0; i < radios.length; i++) {
      radios[i].checked = false;
    }

    const radios2: any = document.getElementsByName("stateFilter");
    for (let i = 0; i < radios2.length; i++) {
      radios2[i].checked = false;
    }
    setGenderFilter("");
    setStateFilter("");
    setUsersData(defaultData);
  };

  const handleClickNameFilter = () =>{
    const newData = data.results.filter((person:any) => person.name.first.includes(nameFilter.toLowerCase()))
    setUsersData(newData)
    }

  return (
    <>
      <header className='flex justify-around items-center backgroundHeader p-6'>
        <div className='w-1/3 flex justify-center'>
            <Image src={Logo} width={150} height={150} alt='logo'></Image>
        </div>
        <div className='w-1/3 text-center'>
            <input type="text" name="searchBar" id="" placeholder='Buscar aqui' className='p-2 rounded-l-full w-11/12 border border-gray-400' onChange={(e)=> setNameFilter(e.target.value)} />
            <button className="p-2 rounded-r-full bg-white border border-gray-400" onClick={()=> handleClickNameFilter()}>🔍</button>
        </div>
        <nav className='w-1/3 flex justify-center'>
            <ul className='flex gap-5 text-center'>
                <li className='bg-gray-400 w-52 h-5 rounded-full'></li>
                <li className='bg-gray-400 w-52 h-5 rounded-full'></li>
            </ul>
        </nav>
      </header>
      <div className=" p-10 w-10/12 m-auto flex gap-5">
        <div className="w-1/6 h-fit border-2  border-gray-300 p-5 rounded">
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-lg font-semibold mb-2">Por Gênero</h3>
            <div className="flex flex-col gap-2">
              <div className="">
                <input
                  type="radio"
                  name="genderFilter"
                  value="male"
                  id=""
                  onChange={(e) => {
                    setGenderFilter(e.target.value);
                  }}
                />{" "}
                Masculino
              </div>
              <div>
                <input
                  type="radio"
                  name="genderFilter"
                  value="female"
                  id=""
                  onChange={(e) => {
                    setGenderFilter(e.target.value);
                  }}
                />{" "}
                Feminino
              </div>
              <div>
                <input
                  type="radio"
                  name="genderFilter"
                  value="outro"
                  id=""
                  onChange={(e) => {
                    setGenderFilter(e.target.value);
                  }}
                />{" "}
                Outros
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-lg font-semibold mb-2 mt-6">Por Estado</h3>
            <div className="flex flex-col gap-2">
              <div className="">
                <input
                  type="radio"
                  name="stateFilter"
                  value="São Paulo"
                  id=""
                  onChange={(e) => {
                    setStateFilter(e.target.value);
                  }}
                />{" "}
                São Paulo
              </div>
              <div>
                <input
                  type="radio"
                  name="stateFilter"
                  value="Rio de Janeiro"
                  id=""
                  onChange={(e) => {
                    setStateFilter(e.target.value);
                  }}
                />{" "}
                Rio de Janeiro
              </div>
              <div>
                <input
                  type="radio"
                  name="stateFilter"
                  value="Minas Gerais"
                  id=""
                  onChange={(e) => {
                    setStateFilter(e.target.value);
                  }}
                />{" "}
                Minas Gerais
              </div>
              <div>
                <input
                  type="radio"
                  name="stateFilter"
                  value="Espírito Santo"
                  id=""
                  onChange={(e) => {
                    setStateFilter(e.target.value);
                  }}
                />{" "}
                Espírito Santo
              </div>
              <div>
                <input
                  type="radio"
                  name="stateFilter"
                  value="Bahia"
                  id=""
                  onChange={(e) => {
                    setStateFilter(e.target.value);
                  }}
                />{" "}
                Bahia
              </div>
              <div>
                <p className="border-b-2 border-gray-400 w-fit ">Ver todos</p>
              </div>
            </div>
            <button
              onClick={() => handleClickFilter()}
              className="bg-cyan-300 rounded px-2 py-1 mt-5"
            >
              Filtrar
            </button>
            <button
              onClick={() => handleClearFilter()}
              className="bg-yellow-300 rounded px-2 py-1 mt-5"
            >
              Limpar Filtros
            </button>
          </div>
        </div>
        <div className=" w-3/4">
          <div className="flex justify-between border-b-2 border-gray-300 p-2">
            <h2 className="text-2xl font-bold">Lista de membros</h2>
            <p className="text-sm">Home &gt; Usuarios &gt; Detalhes</p>
          </div>
          <div>
            <div className="mt-5">
              Exibindo página {paginationNumber / 9} de{" "}
              {Math.ceil(usersData.length / 9)}
            </div>
            <div className="grid grid-cols-3 grid-rows-3 gap-5 place-items-center mt-5">
              {usersData
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
            <div className="flex justify-center items-center gap-5 mt-7">
              {paginationArray.map((i: number) => (
                <div
                  onClick={() => setPaginationNumber(9 * i)}
                  className="text-cyan-500 hover:underline cursor-pointer"
                >
                  {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
