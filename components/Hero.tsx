import { BsWhatsapp } from "react-icons/bs"; 
import { BsFacebook } from "react-icons/bs"; 
import { BsGithub } from "react-icons/bs"; 
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import ArrowDownTrayIcon from "@heroicons/react/20/solid/esm/ArrowDownTrayIcon";
// import Error404 from "./errors/Error404";
// import Error503 from "./errors/Error503";

const Hero = () => {
	return (
		<div className="h-[90vh] bg-[url('/images/banner.jpg')] bg-cover bg-center ">
			<Particle />
			<div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
				<div>
					<h1 className='text-[35px] md:text-[50px] text-white font-extrabold'>
						HI, I'M <span className='text-yellow-400'>SUDEEPTA!</span>
					</h1>
					<TextEffect />
					<p className='mt-[1.5rem] text-[18px] text-[#ffffff92]'>
						A highly motivated B.Tech graduate with a passion for Web
						Development, User Experience, and Product Management. Possesses 5
						years of freelancing experience, demonstrating strong team spirit,
						critical thinking, and problem-solving skills. Eager to leverage
						technical expertise and creative thinking to contribute to a dynamic
						and innovative IT organization.
					</p>
					<div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
						<button className='px-[2rem] bg-yellow-400 hover:bg-[#55e6a5] transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase text-black flex items-center space-x-2 rounded-md'>
							<p>Download Resume</p>
							<ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
						</button>
					</div>
					{/* Social Links */}
					<div className="flex mt-[2rem] text-white space-x-6 font-bold text-[40px]">
						{/* social icons */}
						<BsGithub />
						<BsFacebook />
						<BsWhatsapp />
					</div>
				</div>
				<div className='w-[470px] hidden bg-yellow-500 relative lg:flex items-center rounded-full h-[500px]'>
					<Image
						src='/images/Sudeepta.png'
						alt='Sudeepta'
						layout='fill'
						className='object-cover rounded-full'
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
