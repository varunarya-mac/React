import { useEffect, useState } from "react";
import "./pagination.css";

export function Pagination(): JSX.Element {
  const [products, updateProducts] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);
  let totalPages = 100;  
  
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${(selectedPage-1)*10}`
      );
      const d = await res.json();
      updateProducts(d.products);

    };
    getData();
  }, [selectedPage]);

  function pageHandler(index: number){
    if((index < totalPages/10) && index > 0)
        setSelectedPage(index);
  }


  return (
    <>
    <div className="container">
      {products &&
        products.map((item: any) => {
          return (
            <div key={item.id}>
              <figure>
                <img
                  className="container__image"
                  src={item.thumbnail}
                  alt={item.title}
                />
                <figcaption>{item.title}</figcaption>
              </figure>
            </div>
          );
        })}
    </div>
     <div className="pagination">
        <span onClick={()=> pageHandler(selectedPage-1)} className="arrow">
         ◀ 
     </span>
     {[...Array(10)].map((_, i)=>
     <span  onClick={() => pageHandler(i+1)}  key={i} className="arrow" style={{border: selectedPage===i+1 ? '1px solid blue' :''}}>{i+1}</span>)
     }
     <span onClick={()=> pageHandler(selectedPage+1)} className="arrow">
         ▶ 
     </span>
 </div>
 </>
  );
}
