import React from "react";
import {ContactUsText} from "@/components/contactUsPages/ContactUsText";
import {BottomConect} from "@/components/aboutPages/buttomConnect/BottomConect";

export function ContactUs(){

    return(
        <div className="relative container p-7">
            <div className="relative container py-16">

                <div className="z-0 container overflow-hidden">
                    <div className="relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
                            <ContactUsText />
                        </div>
                    </div>
                </div>

            </div>
<BottomConect />
        </div>
    );
}