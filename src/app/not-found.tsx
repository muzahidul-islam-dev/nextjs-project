import Link from "next/link";
import NotFoundImage from './../assets/not-found.png'
import Image from "next/image";
export default function NotFoundPage() {
    return (
        <div className="max-w-[1440px] mx-auto px-5">
            <div className="flex items-center justify-center p-4 font-sans">
                <div className="bg-white w-full rounded-3xl shadow-sm px-8 py-20 md:py-24 flex flex-col items-center justify-center text-center">

                    {/* Illustration Container */}
                    <div className="mb-8 relative">
                        <Image src={NotFoundImage} alt="not found" />
                    </div>

                    {/* Button */}
                    <Link
                        href={'/'}
                        className="bg-[#C8E85E] hover:bg-[#b8d84e] text-[#0B3B3C] font-bold py-3 px-10 rounded-lg transition-transform hover:scale-105 duration-200 shadow-sm text-sm"
                    >
                        Go Home
                    </Link>

                </div>
            </div>
        </div>
    );
}
