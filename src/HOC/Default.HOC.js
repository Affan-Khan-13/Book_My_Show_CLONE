import React from "react";
import { Route, Routes } from "react-router-dom";

//Layouts
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = (props) => {
  return (
    <>
      <Routes>
        <Route 
        {...props}
        Component={()=>(
          <DefaultLayout>
            {props.element}
          </DefaultLayout>
          )}
          />
        </Routes>  
      </>
    
  );
};


export default DefaultHOC;