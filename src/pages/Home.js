

import React from 'react'
import Pagination from '../components/Pagination'
import Header from '../components/Header'
import Cars from '../components/Cars'
import {useState} from 'react'

const Home=()=>{

    const [searchTerm,setSearchTerm]=useState("");

    return(

        <div className="bg-blue-50">
            <Header  searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <div>
                <Cars searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <Pagination/>
            </div>
        </div>
    )
}

export default Home