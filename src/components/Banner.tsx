
const Banner = () => {
    
    return (
        <div className = "relative w-full flex items-center fixed top-0 h-6 py-0 px-160 gap-x-2 bg-[#F0F0F0]">
            <div className = "absolute top-1 left-40 flex items-center gap-x-2">
                <img src="singapore-lion.png" className = "w-4 h-4"/>
                <span className = "font-source font-normal text-[9.89px] leading-3 tracking-normal text-[#5B5B5B]">An Official Website of the <span className = "font-semibold">Singapore Government</span></span>
            </div>
        </div>
    )
}

export default Banner