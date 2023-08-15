import React, { useEffect, useState } from 'react';
import { styles } from '../styles';
import { socials } from '../constants';

const Socials = () => {
	useEffect(() => {
		const icon = document.querySelectorAll('.icon');
	
        const handleMouseMove = (e) => {
            const x = e.offsetX;
            const y = e.offsetY;
            const iconWidth = e.target.clientWidth;
            const iconHeight = e.target.clientHeight;
            const moveX = (x - iconWidth/2) * 0.4;
            const moveY = (y - iconHeight/2) * 0.4;
            e.target.style.transform = `translateX(${moveX}px) translateY(${moveY}px) scale(1.1)`;
        }

        const handleMouseOut = (e) => {
            e.target.style.transform = 'scale(1)';
        }

        icon.forEach(icon => {
            icon.addEventListener('mousemove', handleMouseMove);
            icon.addEventListener('mouseout', handleMouseOut);
        });

        return () => {
            icon.forEach(icon => {
                icon.removeEventListener('mousemove', handleMouseMove);
                icon.removeEventListener('mouseout', handleMouseOut);
            });
        }
	}, []);

  return (
    <div className={`${styles.paddingX} w-full h-1/5 flex justify-center`}>
		<ul className="list-none flex flex-row max-h-75 sm:gap-7">
			{socials.map((social) => (
				<li aria-label={social.id} 
					key={social.id} 
					className="flex max-w-full max-h-full">
					<a
						href={`${social.link}`}
						target="_blank"
						rel="noopener noreferrer">
						<img className="icon" src={social.icon} alt={social.id}/>
					</a>
				</li>
			))}
		</ul>
	</div>
  )
}

export default Socials
