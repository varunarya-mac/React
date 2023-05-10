import react, { FocusEvent, MouseEventHandler, useState } from "react";
import "./FolderRender.css";
import DataObject from "../../model/data";

export function FolderRender({ handleClick, data }: any): JSX.Element {
  
    const [expend, setExpendState] = useState(false);
    const [showInputField, setInputState] = useState({
    visible: false,
    parentId: "",
    isFolder: false,
  });

  function expendUI(e: react.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setExpendState(!expend);
  }

  function handleBtnClick(e: react.MouseEvent, parentId: string, isFolder: boolean) {
    e.stopPropagation();
    console.log('btn clicked',showInputField.visible,  parentId, isFolder);
    const obj = {
        visible: !showInputField.visible,
        parentId: parentId,
        isFolder: isFolder,
      };
    setInputState(obj);
  }

  function keyPressed(e: React.KeyboardEvent<HTMLElement>) {
    if (e.key === "Enter") {
      const newObj = new DataObject();
      newObj.id = new Date().getTime().toString();
      newObj.isFolder = showInputField.isFolder;
      newObj.children = null;
      newObj.name = (e.currentTarget as HTMLInputElement).value;

      handleClick(showInputField.parentId, newObj);
      setInputState({
        visible: false,
        parentId: "",
        isFolder: false,
      });
    }
  }

  function clearInputField() {
    setInputState({
      visible: false,
      parentId: "",
      isFolder: false,
    });
  }

  const UI = data.map((obj: DataObject) => {
    if (obj.isFolder) {
      return (
        <div key={obj.id} onClick={(e) => expendUI(e)} className="render">
          <div className="folder">
            <span> 📂 {obj.name}</span>
            <button onClick={(e) => handleBtnClick(e, obj.id, true)}>
              Add Folder
            </button>
            <button onClick={(e) => handleBtnClick(e, obj.id, false)}>
              Add File
            </button>
          </div>
          {showInputField.visible && (
            <input
              autoFocus
              type="text"
              onBlur={clearInputField}
              onKeyDown={(e) => keyPressed(e)}
            />
          )}
          <div style={{display: expend ? 'block':'none'}}>
          {obj.children && (
            <FolderRender handleClick={handleClick} data={obj.children} />
          )}
          </div>
         
        </div>
      );
    } else {
      return (
        <div key={obj.id} className="render">
          <div className="file">
            <span> 📄 {obj.name}</span>
          </div>
        </div>
      );
    }
  });

  return <>{UI}</>;
}
