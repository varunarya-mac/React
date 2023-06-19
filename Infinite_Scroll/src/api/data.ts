export function getData(url: string): Promise<[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url);
      const jsonObj = await response.json();
      resolve(jsonObj.products as []);
    } catch (error) {
      reject(error);
    }
  });
}
