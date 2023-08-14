import React, { useEffect, useState } from 'react';
import { styles } from '../styles';
import { moreSocials } from '../constants';

const MoreSocials = () => {
	const[copied, setCopied] = useState(false);

	useEffect(() => {
		if (copied) {
			const timer=setTimeout(() => {
				setCopied(false);
			}, 1000);
			return () => clearTimeout(timer);
		}
	}, [copied]);

  return (
	<div className={`w-full flex justify-center flex-wrap text-lg gap-7 font-semibold text-logo-pink`}>
		<ul className="list-none ml-11 flex flex-wrap flex-row gap-7">
			{moreSocials.map((link) => (
				<li aria-label={link.id} key={link.id} className="hover:text-hover-pink justify-center">
					<a
						href={`${link.link}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						{link.id}
					</a>
				</li>
			))}
		</ul>
		<button 
			type="button" 
			aria-label={"npub"}
			className="flex justify-center hover:text-hover-pink float"
			onClick={() => {setCopied(true);}}
		>
			npub
			<div className="relative">
				<p className="copy-button"/>
				<p className={`${!copied ? 'opacity-0 h-0 overflow-hidden' : 'copied-fade-in'} 
					absolute right-0 flex copied-message font-normal items-center`}>
					copied!
				</p>
			</div>
		</button>
	</div>
  )
} //translate 100%

export default MoreSocials
