import {AiFillPhone} from "react-icons/ai";
import React from "react";

export function BottomConect () {
    return(
            <div className="flex items-center w-full ">
                <div className="">
                    <button className="p-10 bg-black flex items-center justify-center rounded-b-lg h-28 w-28">
                        <AiFillPhone size={25} color="white" />
                    </button>
                </div>
                <div className="p-10">
                    <button className="p-10 bg-black flex items-center justify-center rounded-b-lg h-20 w-20">
                        <AiFillPhone size={25} color="white" />
                    </button>
                </div>

            </div>

        );
    };


