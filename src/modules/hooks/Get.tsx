import { useEffect, useState } from "react";
import { ProductsMethods, ProductsObject } from "../Products";

interface MonitorObject {
  title: string;
  price: number;
  price_old: number;
  type: string;
  lastUpdate: string;
}

interface MonitorsData {
  bcv: MonitorObject;
  monitor: MonitorObject;
}

export const useDolar = () => {
  const [dolar, setDolar] = useState<MonitorsData>(null);
  
  useEffect(() => {
    async function askDolar() {
      const data = await window.api.getDolar();
      setDolar(data);
    }
    askDolar()
  }, [])
  
  return dolar
}

export function useProducts(){
  const [data, setData] = useState<ProductsObject[]>([]);

  useEffect(() => {
    async function getData (){
      const dataProducts = await ProductsMethods.getProducts();
      setData(dataProducts);
    }
    getData()
  }, []);

  return data
}
