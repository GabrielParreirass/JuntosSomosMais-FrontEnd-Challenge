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

export default async function Home() {
  const data = await getData();

  return (
    <div>
      <Pagination data={data}></Pagination>
    </div>
  );
}
