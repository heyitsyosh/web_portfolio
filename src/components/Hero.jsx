import { motion } from 'framer-motion';
import { styles } from '../styles'
import { AvatarCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
		<svg
			className="absolute"
			width="100%" 
			height="100%" 
			viewBox="0 0 800 1400"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path 
				id="curvedPath"
				d="M 100 300 Q 400 100 700 300 Z"
				fill="none" 
				/>
			<text className={`${styles.heroHeadText}`} textAnchor='middle'>
				<textPath href="#curvedPath" startOffset="25%">
					<tspan fill="#292529"> Hi, I'm </tspan>
					<tspan fill="#996464"> Maria </tspan>
				</textPath>
			</text>
			{/* <text className={`${styles.heroSubText}`}>
				<textPath href="#curvedPath" startOffset="15%">
					<tspan dy="40" fill="#292529"> Glad you're here :) </tspan>
				</textPath>
			</text> */}
		</svg>
		<AvatarCanvas />
	</section>
  )
}

export default Hero