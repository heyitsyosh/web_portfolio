import React from 'react';
import { styles } from '../styles';
import { moreSocials } from '../constants';

const MoreSocials = () => {
  return (
	<div className={`${styles.paddingX} w-full flex flex-wrap justify-center text-lg gap-7 font-semibold text-logo-pink`}>
		<ul className="list-none flex flex-wrap flex-row gap-7 justify-center">
			{moreSocials.map((link) => (
				<li key={link.id} className="inline hover:text-hover-pink justify-center">
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
			className="flex items-center hover:text-hover-pink"
		>
			npub
			<p className="copy-button"/>
		</button>
	</div>
  )
}

export default MoreSocials
