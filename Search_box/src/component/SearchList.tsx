import style from "./SearchList.module.css";

interface ListProp {
  list: string[];
  updateQuery: Function
}

export const SearchList = (prop: ListProp) => {

function updateValue(e: string) {
    prop.updateQuery(e);
}

  return (
    <>
      <ul className={style.list}>
        {prop.list &&
          prop.list.map((item: string, index: number) => (
            <>
              <li className={style.listitem} key={index} data-value={item} onClick={()=> updateValue(item)}>
                {item}
              </li>
              <hr></hr>
            </>
          ))}
      </ul>
    </>
  );
};
