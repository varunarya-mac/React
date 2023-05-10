import React, { useState } from "react";
import { FolderRender } from "./components/folderRender/FolderRender";
import jsonData from "./data/Data.json";
import DataObject from "./model/data";
import "./App.css";
import useTraverseTree from "./hooks/traverse_tree";

function App() {
  const [data, updateJsonData] = useState(jsonData);
  const { insertNode } = useTraverseTree();

  function updateData(
    parentId: string,
    newData: DataObject
  ) {
    const tree = insertNode(newData, parentId, jsonData);
    updateJsonData(tree);
  }

  return (
    <div className="App">
      <FolderRender handleClick={updateData} data={data} />
    </div>
  );
}

export default App;
