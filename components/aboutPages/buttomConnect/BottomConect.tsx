import {AiFillPhone} from "react-icons/ai";
import React from "react";
import {GrMail} from "react-icons/gr";
export function BottomConect () {
    return(
        <div className="flex items-center justify-center w-full">
            <div className="p-4">
                <button className="rounded-2xl p-5 bg-black flex items-center justify-center  h-20 w-20">
                    <AiFillPhone size={20} color="white" />
                </button>
            </div>
            <div className="p-4">
                <button className="rounded-2xl p-5 bg-black flex items-center justify-center  h-20 w-20">
                    <GrMail size={20} color="white" />
                </button>
            </div>
        </div>

    );
};


