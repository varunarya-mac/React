import { useEffect, useState, useRef } from "react";
import { getData } from "../api/data";

interface IList {
  id: string;
  title: string;
}

export default function InfiniteScroll() {
  const observerTarget = useRef<HTMLDivElement | null>(null);

  const [list, setList] = useState<IList[]>([]);
  const page = useRef<number>(1);

  function loadData() {
    const url = `https://dummyjson.com/products?limit=${
      page.current * 10
    }&skip=${(page.current - 1) * 10}&select=title`;
    console.log(url);
    getData(url).then((data) => {
      setList((pData) => [...pData, ...data]);
      page.current += 1;
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadData();
        }
      },
      { threshold: 1, root: null }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  return (
    <>
      <div>
        {list &&
          list.map((item) => (
            <div className="item" key={item.id + Math.random()}>
              {item.title}
            </div>
          ))}
      </div>
      <div ref={observerTarget}></div>
    </>
  );
}
