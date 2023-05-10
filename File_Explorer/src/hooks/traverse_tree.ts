import DataObject from "../model/data";


const useTraverseTree = () => {
  function insertNode(node: DataObject, parentId: string, tree: any) {
    if (tree[0].id === parentId && tree[0].isFolder) {
      tree[0].children?.push(node);
      return tree;
    }

    const arr: DataObject[] = [];
    if (tree[0].children) {
      arr.push(...tree[0].children);
    }
    while (arr.length) {
      if (arr[0].id === parentId) {
        if (arr[0].children) arr[0].children.push(node);
        else arr[0].children = [node];

        return tree;
      } else if (arr[0].children) {
        arr.push(...arr[0].children);
      }
      arr.shift();
    }
    return tree;
  }

  return { insertNode };
};

export default useTraverseTree;
