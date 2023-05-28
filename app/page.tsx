import Image from "next/image";
import Header from "./components/Header";
import axios from "axios";

async function getData() {
  const res = await fetch(
    "https://jsm-challenges.s3.amazonaws.com/frontend-challenge.json"
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

function capitalizePhrase(str: string) {
  const arr = str.split(" ");

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const str2 = arr.join(" ");
  return str2;
}

export default async function Home() {
  const data = await getData();

  return (
    <div>
      <Header></Header>
      <main className=" p-10 w-10/12 m-auto flex gap-5">
        <div className="w-1/6 h-fit border-2  border-gray-300 p-5 rounded">
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-lg font-semibold mb-2">Por Gênero</h3>
            <div className="flex flex-col gap-2">
              <div className="">
                <input type="checkbox" name="masculino" id="" /> Masculino
              </div>
              <div>
                <input type="checkbox" name="feminino" id="" /> Feminino
              </div>
              <div>
                <input type="checkbox" name="outros" id="" /> Outros
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-lg font-semibold mb-2 mt-6">Por Estado</h3>
            <div className="flex flex-col gap-2">
              <div className="">
                <input type="checkbox" name="sp" id="" /> São Paulo
              </div>
              <div>
                <input type="checkbox" name="rj" id="" /> Rio de Janeiro
              </div>
              <div>
                <input type="checkbox" name="mg" id="" /> Minas Gerais
              </div>
              <div>
                <input type="checkbox" name="es" id="" /> Espírito Santo
              </div>
              <div>
                <input type="checkbox" name="ba" id="" /> Bahia
              </div>
              <div>
                <p className="border-b-2 border-gray-400 w-fit ">Ver todos</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-3/4">
          <div className="flex justify-between border-b-2 border-gray-300 p-2">
            <h2 className="text-2xl font-bold">Lista de membros</h2>
            <p className="text-sm">Home &gt; Usuarios &gt; Detalhes</p>
          </div>
          <div>
            <div className="mt-5">Exibindo 9 de {data.results.length}</div>
            {/* {data.results.map((i: any) => (
              <div>{i.name.first}</div>
            ))} */}

            <div className="grid grid-cols-3 grid-rows-3 gap-5 place-items-center mt-5">
              {data.results.slice(0, 9).map((user: any) => (
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
          </div>
        </div>
      </main>
    </div>
  );
}
