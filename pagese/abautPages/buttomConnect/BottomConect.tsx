import {AiFillPhone} from "react-icons/ai";
import React from "react";
import {GrMail} from "react-icons/gr";
export function BottomConect () {
    return(
        <div className="flex items-center justify-center w-full">
            <div>
                <button className=" rounded-2xl p-10 bg-black h-28 w-28">
                    <AiFillPhone size={40} color="white" />
                </button>
            </div>
            <div className="p-4">
                <button className="rounded-2xl p-10 bg-black flex items-center justify-center rounded-b-lg h-20 w-20">
                    <GrMail size={40} color="white" />
                </button>
            </div>
        </div>


    );
    };


