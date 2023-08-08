import {useState} from "react";

export function TailwindPosition() {
    const [show, setShow] = useState(true)
    console.log(show)


    return (
        // <>
        //     <div
        //         className="flex items-center justify-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        //         <button className="uppercase px-5 p-2.5 shadow-xl rounded-full accent-pink-400
        //         animate-pulse
        //         hover:bg-stone-200 hover:duration-300
        //         focus:ring focus:ring-offset-0 focus:ring-pink-400 focus:ring-opacity-50
        //         active:bg-pink-950">
        //             submit
        //         </button>
        //     </div>
        // </>
        // <div className="bg-blue-300 bg-gradient-to-l from-blue-500 to-transparent">
        //     <div className="flex items-center justify-center mt-9 border-2 bg-pink-500 -space-x-8 md:-space-x-12 text-stone-600
        //  bg-gradient-to-l from-pink-300 to-transparent h-16">
        //         <div className="h-16 md:h-32 w-16 md:w-32 bg-pink-100 rounded-full text-center"></div>
        //         <div className="h-16 md:h-32 w-16 md:w-32 bg-pink-200 rounded-full text-center"></div>
        //         <div className="h-16 md:h-32 w-16 md:w-32 bg-pink-300 rounded-full text-center"></div>
        //         <div className="h-16 md:h-32 w-16 md:w-32 bg-pink-400 rounded-full text-center"></div>
        //         <div className="h-16 md:h-32 w-16 md:w-32 bg-pink-500 rounded-full text-center"></div>
        //         <div className="h-16 md:h-32 w-16 md:w-32 bg-pink-600 rounded-full text-center"></div>
        //     </div>
        // </div>

        // <div className="flex items-center mt-40">
        //         <span className="justify-items-center p-5 bg-gradient-to-l from-blue-500 to-blue-300 decoration-clone">
        //             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        //             Commodi fuga illo in molestias sed sunt temporibus veniam voluptas. Aliquam asperiores consequatur culpa,
        //             dicta dolore eligendi facilis fuga incidunt sit unde?
        //         </span>
        // </div>

        <div className="grid grid-cols-12">
            <div className="col-span-2 bg-indigo-300 min-h-screen max-h-fit"></div>
            <div className="col-span-10 bg-pink-500 min-h-screen max-h-fit relative">
                <div className="fixed h-16 w-full bg-slate-100">

                </div>
                <div className="mt-16 mx-auto w-screen bg-gradient-to-t from-pink-700 to-pink-300 rounded">
                    <button className="rounded bg-slate-600 text-amber-50 p-3 mx-4 px-3"
                            onClick={() => setShow(!show)}>click
                    </button>
                    <div
                        className={show ? "hidden" : " absolute left-1/2 top-1/2 bg-indigo-600 rounded-full h-16 w-16"}>

                    </div>
                    <div className={show ? "":"hidden"}>
                        <div className="h-32 w-full bg-pink-950 mb-5 rounded mt-5"></div>
                        <div className="h-32 w-full bg-pink-950 mb-5 rounded mt-5"></div>
                        <div className="h-32 w-full bg-pink-950 mb-5 rounded mt-5"></div>
                        <div className="h-32 w-full bg-pink-950 mb-5 rounded mt-5"></div>
                        <div className="h-32 w-full bg-pink-950 mb-5 rounded mt-5"></div>
                        <div className="h-32 w-full bg-pink-950 mb-5 rounded mt-5"></div>
                        <div className="h-32 w-full bg-pink-950 mb-5 rounded mt-5"></div>
                        <div className="h-32 w-full bg-pink-950 mb-5 rounded mt-5"></div>
                        <div className="h-32 w-full bg-pink-950 mb-5 rounded mt-5"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}


