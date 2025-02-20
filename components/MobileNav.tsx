import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

interface Props {
	nav: boolean;
	closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
	const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

	return (
		<div
			// className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]`}
			className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
		>
			<div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
				<div className='nav-link-mobile uppercase'>
					<Link href={"/"}>Home</Link>
				</div>
				<div className='nav-link-mobile uppercase'>
					<Link href={"#about"}>About</Link>
				</div>
				<div className='nav-link-mobile uppercase'>
					<Link href='#projects'>Projects</Link>
				</div>
				{/* Currently disabled to enable, put "/" before "Service" in (href={"#Service"}) */}
				<div className='nav-link-mobile uppercase'>
					<Link href={"/Service"} as={"Services"}>
						Services
					</Link>
					{/* Services */}
				</div>
				{/* <div className='nav-link-mobile uppercase'>
					<Link href={"/blog"} as={"Blog"}>
						Blog
					</Link>
				</div> */}
				<div className='nav-link-mobile uppercase'>Contact</div>
			</div>
			<div
				onClick={closeNav}
				className='absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white'
			>
				<XMarkIcon />
			</div>
		</div>
	);
};

export default MobileNav;
