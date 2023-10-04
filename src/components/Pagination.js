


import React from 'react'
import {
   useParams,useNavigate
} from "react-router-dom"

const Pagination =()=>{

   const {page} = useParams();
   

   const nevigate=useNavigate();
     return(
     <div className="w-full flex justify-center items-center border-2 mt-5 fixed bottom-0 bg-blue-50">
         <div className="flex justify-between w-11/12 max-w-[670px] py-2">
                <div className="flex gap-x-2">
                {
                page>1 && 
                (
                  <button
                  className="rounded-md border-2 px-4 py-1"
                  disabled={page<=1}
                  onClick={()=>nevigate(`/page/${(page)-1}`)}
               >
                  Prev
               </button>
                )
               }
               {
                page<10 &&
                (
                  <button
                  className="rounded-md border-2 px-4 py-1"
                  disabled={page>=10}
                      onClick={()=>nevigate(`/page/${Number((page))+1}`)}
                  >
                     Next
                  </button>
                )
               }
                </div>
              
               <p className="font-bold text-sm">
                Page {page} of 10
               </p>
            </div>
     </div>
     )
}

export default Pagination