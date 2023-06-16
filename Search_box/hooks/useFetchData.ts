import { debounce } from "lodash";
// import { useCallback } from "react";

// export const useFetchData = (url, query) => {

//     const debounceFn = useCallback(debounce(getData, 500), []);

//     async function getData() {
//         if(query){
//             const res = await fetch(
//             `${url}${query}`
//           );
//         const data = await res.json();
//         const nameList = data.results.map((item: any)=> item.name)
//         return nameList;        
//     }
//   }
// }