export const askQuery = async (query: string) => {
  try{
    const result = await window.api.updateQuery(query);
    return result;
  }
  catch(e){
    console.log(e)
    throw new Error
  }
  
}
export const updateQuery = (query: string) => {
  try{
    window.api.askQuery(query);
  } catch(e){
    throw new Error
  }
}