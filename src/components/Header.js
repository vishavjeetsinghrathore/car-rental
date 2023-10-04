
import React from 'react'
import { BsSearch } from 'react-icons/bs'


const Header=({searchTerm,setSearchTerm})=>{

    
     return (
        <div>
             <div className="w-full border shadow-md py-2 fixed top-0 bg-blue-50">
            <header className="text-center">
            <div className="relative">
                <input
                id="searchInput"
                type="text"
                placeholder="Search here..."
                onChange={(event)=>setSearchTerm(event.target.value)}
                className="rounded-full h-[50px] w-[300px] p-1 "
          
                />
                <BsSearch className="absolute left-[58%] top-[40%]"/>
            </div>
            </header>
         
     </div>
        </div>
       
     
     )
 }

export default Header


