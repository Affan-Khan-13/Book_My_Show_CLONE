import React from "react";
import { Route, Routes } from "react-router-dom";

//Layouts
import MovieLayout from "../layouts/Movie.layout";

const MovietHOC = (props) => {
  return (
    <>
      <Routes>
        <Route 
        {...props}
        Component={()=>(
          <MovieLayout>
            {props.element}
          </MovieLayout>
          )}
          />
        </Routes>  
      </>
    
  );
};


export default MovietHOC;