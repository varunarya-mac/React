export default class DataObject {
    id!: string;
    isFolder!: boolean;
    name!: string;
    children!: [DataObject] | null;
  }