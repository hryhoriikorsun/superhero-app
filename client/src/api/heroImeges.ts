export const addImage = async (fd: any): Promise<string> => {
  const res = await fetch("http://localhost:3003/api/image/single", { method: "POST", body: fd });
  const { name } = await res.json();
  return name;
}