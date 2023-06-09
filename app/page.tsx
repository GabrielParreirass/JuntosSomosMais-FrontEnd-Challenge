import Image from "next/image";
import Header from "./components/Header";
import Pagination from "./components/Pagination";

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

  let paginationNumber = 0;

  return (
    <div>
      
   
        <Pagination data={data}></Pagination>
      
    </div>
  );
}
