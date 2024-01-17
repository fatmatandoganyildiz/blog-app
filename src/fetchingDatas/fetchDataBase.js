import { useState, useEffect } from "react";
import FetchPageData from "./fetchData";

export default function FetchDataBase({
  storagedName,
  requestAdress,
  onDataFetched,
}) {
  const [data, setData] = useState([]);
  const [id, setId] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const storagedData = localStorage.getItem(storagedName);

    if (storagedData) {
      const datas = JSON.parse(storagedData);
      setData(datas);
    } else {
      const response = await fetch(requestAdress);
      const datas = await response.json();
      setData(
        localStorage.setItem(storagedName, JSON.stringify(datas?.map((e) => e)))
      );
      setId(datas?.map((e) => e.id));
      onDataFetched(datas);
    }
  };
  return(
    <>
    <FetchPageData data={data}/>
    <FetchHomeData data={data}/>
    </>
  )
}
