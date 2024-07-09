
export default function Header({isDark,toggleDark}){
    return(
        <>
        <div className="flex justify-between md:grid md:grid-cols-1 gap-10 ">
            <div>
                <h1 className={`text-[35px] md:text-[30px] font-bold font-sans ${isDark? "text-white" : "text-dark-desaturated-blue-card-bg-dark"} `}>Social Media Dashbord</h1>
                <h5 className={`text-[20px] md:text-[18px]  font-sans ${isDark? "text-toggle-light" : "text-dark-grayish-blue-text-light"} `}>Total Followers: 23,004</h5>
            </div>
            <div className="flex gap-x-3 items-center md:justify-between">
                <h5 className="text-base font-normal font-sans text-dark-grayish-blue-text-light">Dark Mode</h5>
                <button className={`relative  h-8 w-[60px] md:w-16  bg-toggle-light hover:bg-blue-500 rounded-full ${isDark?"bg-gradient-to-r from-toggle-dark-start to-toggle-dark-end":"" } `} onClick={toggleDark}>
                    <span className={`absolute h-6 w-6 right-1 bottom-[4px]  rounded-full bg-white ${isDark ? "bg-very-dark-blue-bg-dark left-1 ":""} `}></span>
                </button>
            </div>
        </div>

        </>
    )
}