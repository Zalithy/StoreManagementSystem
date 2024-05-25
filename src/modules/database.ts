export const askQuery = async (query: string) => {
  try{
    const rows = await window.api.askQuery(query);
    return rows
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