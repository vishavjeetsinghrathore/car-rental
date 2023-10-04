

import React from 'react'
import {FcLike} from "react-icons/fc"
import {BsFillPeopleFill} from "react-icons/bs"
import {LiaGasPumpSolid} from "react-icons/lia"
import { BsSpeedometer } from 'react-icons/bs'
import {GiSteeringWheel} from "react-icons/gi"

const Caritem=({val})=>{

    return(
        <div className="flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 ease-in
        gap-3 p-4 mt-10 ml-5 rounded-xl outline">
          
            <div className="h-[180px] ">
                <img src={val.image} alt="title" className="h-full w-full"/>
            </div>
            <div className="flex justify-between w-[80%]">
                <div className="font-semibold">{val.title}</div>
                <div className="font-semibold border-dashed border-2 border-indigo-600 rounded-full px-3 py-2">{val.year}</div>
            </div>
            <div className='flex justify-between w-[80%]'>
                <div className="flex items-center justify-center gap-2">
                    <BsFillPeopleFill color="blue" />
                    <div>{val.people} People</div>
                </div>
                <div className="flex items-center justify-center gap-2">
                   <LiaGasPumpSolid color="blue" fontSize={24}/>
                    <div className="mr-14">{val.model}</div>
                </div>
            </div>
            <div className='flex justify-between w-[80%] '>
                <div className="flex items-center justify-center gap-2">
                <BsSpeedometer color="blue" />
                    <div>{val.avg}km/1-litre</div>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <GiSteeringWheel color="blue" fontSize={24}/>
                    <div className="mr-10">{val.type}</div>
                </div>
            </div>

            <hr class="border-1 mt-2 border-s-black w-[80%]" />
           
            
            <div className="flex justify-between gap-10 mt-4 ">
                <div>${val.price}/month</div>
                <div className="flex gap-2">
                      <div className="w-[40px] h-[40px] bg-white rounded-md right-2 bottom-3 grid place-items-center">
                      <button >
                      <FcLike fontSize="1.75rem"/>
                      </button>
                      </div>
                      
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Rent Now
                      </button>
                </div>
            </div>
        
        </div>
    )
}

export default Caritem