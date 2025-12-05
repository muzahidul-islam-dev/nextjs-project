export default function TrustedBy(){
    const logos = [
        { name: "CASIO", color: "#0055aa", font: "font-serif font-black tracking-widest text-2xl" },
        { name: "amazon", color: "#232f3e", font: "font-sans font-bold text-2xl flex items-center gap-1" },
        { name: "MOONSTAR", color: "#555", font: "font-sans font-bold text-xl uppercase tracking-widest text-gray-500" },
        { name: "ST★R+", color: "#000", font: "font-mono font-black text-2xl flex items-center" },
        { name: "startpeople", color: "#ea580c", font: "font-sans font-bold text-xl text-orange-500 flex items-center gap-1" },
        { name: "randstad", color: "#000", font: "font-sans font-medium text-2xl tracking-tight" },
    ];

    return (
        <section className="w-full mt-12 py-8 overflow-hidden">
            <h3 className="text-center text-[#003B46] font-bold text-xl mb-8">We've helped thousands of sales teams</h3>
            
            <div className="relative w-full">
                {/* Gradient Masks for fading effect */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F0F2F4] to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F0F2F4] to-transparent z-10"></div>

                {/* Sliding Track - Doubled for seamless loop */}
                <div className="flex w-max animate-scroll">
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={index} className="mx-8 md:mx-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer min-w-[120px] flex items-center justify-center">
                            {logo.name === "CASIO" && <span className="text-[#0055aa] font-serif font-black tracking-wider text-3xl">CASIO</span>}
                            
                            {logo.name === "amazon" && (
                                <div className="flex flex-col relative leading-none">
                                    <span className="text-slate-800 font-bold text-3xl tracking-tight">amazon</span>
                                    <span className="text-[#ff9900] text-3xl absolute top-4 left-2 transform rotate-3">︶</span>
                                </div>
                            )}

                            {logo.name === "MOONSTAR" && (
                                <div className="flex items-center gap-2 text-gray-500">
                                    <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">M</div>
                                    <span className="font-bold tracking-widest text-xl">MOONSTAR</span>
                                </div>
                            )}

                            {logo.name === "ST★R+" && (
                                <div className="flex items-center text-black font-black text-2xl">
                                    ST<span className="text-orange-500 mx-0.5">★</span>R<span className="align-super text-sm ml-0.5">+</span>
                                </div>
                            )}

                            {logo.name === "startpeople" && (
                                <div className="flex items-center gap-2 text-orange-500 font-bold text-xl">
                                    <div className="w-6 h-6 border-2 border-orange-500 rounded-full flex items-center justify-center text-xs">x</div>
                                    <span className="text-gray-700">start</span>people
                                </div>
                            )}

                            {logo.name === "randstad" && (
                                <div className="flex items-center gap-2">
                                     {/* Abstract 'r' shape */}
                                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                         <path d="M4 12h12a4 4 0 0 1 0 8H4" strokeLinecap="square"/>
                                         <path d="M12 12V4" strokeLinecap="square"/>
                                     </svg>
                                    <span className="text-black font-semibold text-2xl">randstad</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}