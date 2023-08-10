import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
	const[active, setActive] = useState("")
	const[toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}>
		<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
			<Link 
				to="/"
				className="flex items-center gap-2"
				onClick={() => {
					setActive("");
					window.scrollTo(0, 0)
				}}
			>
				<img src={logo} alt="logo" draggable="false" className="w-9 h-9 object-contain"/>
				<p className="text-title-pink text-[18px] font-bold cursor-pointer">maria yoshikawa
					<span className="sm:block hidden">よしかわ まりあ</span>
				</p>
			</Link>
			<div className="flex flex-1 justify-end items-center">
			<img
				draggable="false"
				src={toggle ? close : menu}
				alt="menu" 
				className="w-[40px] h-[40px] object-contain cursor-pointer"
				onClick={() => setToggle(!toggle)}
			/>
				<div className={`${!toggle ? 'hidden' : 'flex'} 
					p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10rounded-xl`}>
					<ul className="list-none flex jujstify-end flex-col items-start gap-2">
					{navLinks.map((link) => (
						<li key={link.id} className={`${
								active === link.title 
								? "text-white" 
								: "text-secondary"}
							font-poppins font-medium curso-pointer text-[16px]`}
							onClick={() => {
								setToggle(!toggle);
								setActive(link.title);
							}}>
							<a href={`${link.id}`}>{link.title}</a>
						</li>
					))}
					</ul>
				</div>
			</div>
		</div>
	</nav>
  )
}

export default Navbar
