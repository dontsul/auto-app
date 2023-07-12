import React from "react";

const FormExample6 = () => {
    return (
        <div className="brightness-75 order-1 lg:order-2 p-10  justify-center relative ">
            <div className =" p-6 m-auto  rounded-md shadow-xl shadow-rose-600/40  ring-2  ring-indigo-600 max-w-xl">
                <form className="mt-6">
                    <div className="flex mb-2">
                        <label className="flex flex-col items-center">
                            <span className="block w-full">Name</span>
                            <input
                                type="text"
                                name="name"
                                className ="p-10 block w-full mt-2 px-16  py-2  rounded-md shadow-sm border-indigo-300 ring ring-indigo-200 ring-opacity-50"
                                placeholder="First Name"
                            />
                        </label>

                        <label className="flex flex-col items-center">
                            <span className=" w-full">Last Name</span>

                            <input
                                type="text"
                                name="last Name"
                                className="m-1 p-10 px-16 py-2 mt-2 rounded-md shadow-sm ring ring-indigo-200 "
                                placeholder="Last Name"
                            />
                        </label>

                    </div>

                    <div className="mb-2">
                        <label>
                            <span className ="text-gray-700">Phone</span>
                            <input
                                name ="Phone"
                                type ="tel"
                                className ="block w-full mt-2 px-16  py-2  rounded-md shadow-sm border-indigo-300 ring ring-indigo-200 ring-opacity-50"
                                placeholder ="+380" required/>
                        </label>
                    </div>
                    <div className="mb-2">
                        <label>
                            <span className ="text-gray-700">Email address</span>
                            <input
                                name ="email"
                                type ="email"
                                className ="block w-full  mt-2 px-16  py-2    rounded-md shadow-sm border-indigo-300 ring ring-indigo-200 ring-opacity-50"
                                placeholder ="john.cooks@example.com" required/>
                        </label>
                    </div>
                    <div className="mb-2">
                        <label>
                            <span className="text-gray-700">Message</span>
                            <textarea name ="message" className =" block w-full mt-2 px-16 py-8  rounded-md shadow-sm border-indigo-300    ring-opacity-50">
                            </textarea>

                        </label>
                    </div>
                    <div className="mb-6">
                        <button className="z-20 font-bold w-full justify-center  py-3 text-sm  border bg-black text-white border-black hover:bg-white hover:text-black ">
                            SELECT YOUR VEHICLE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

};
export default FormExample6;
