import React,{createContext} from 'react'
export const context = createContext();

function AppContext({children}) {
  const quality = "kind";
  const name = "pawan";
  return <context.Provider value = {{quality,name}}>{children}</context.Provider>
  
}

export default AppContext
