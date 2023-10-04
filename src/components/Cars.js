


import React from 'react'
import { products } from '../data'
import Caritem from './Caritem'
import {
   useParams
} from "react-router-dom"


const Cars = ({searchTerm,setSearchTerm}) => {
   const {page} = useParams();
   const results = products.slice((page-1)*6,page*6);
   console.log(results);

   return (
      <>
         <div className="grid grid-cols-3 max-w-6xl p-2 mx-auto space-y-10 space-x-5 gap-y-15 my-14  min-h-[80vh]">
            {
               // results.map((val) => {

               //    return (
               //       <Caritem key={val.id} val={val} />
               //    )
               // })
               results.filter((val)=>{

                  if(searchTerm==="")
                  {
                      return val;
                  }
                  else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
              
                      return val;
                  }
              
                })
                .map((val)=>{
              
                   return(
                      <Caritem val={val}/>
                   )
                })
            }
         </div>
         
      </>
   )
}

export default Cars