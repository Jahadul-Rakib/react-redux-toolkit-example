export function TailwindPosition() {
    return (<>
        <div className="flex items-center justify-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <button className="uppercase px-5 p-2.5 shadow-xl rounded-full accent-pink-400
                animate-pulse
                hover:bg-stone-200 hover:duration-300
                focus:ring focus:ring-offset-0 focus:ring-pink-400 focus:ring-opacity-50
                active:bg-pink-950"
            >
            submit
            </button>
        </div>
    </>)
}