import React from 'react'
import Picture from '../Picture'

import './Game.css'

import karen from './images/araragi-karen.jpg'
import araragi from './images/araragi-koyomi.jpg'
import tsukihi from './images/araragi-tsukihi.jpg'
import gaen from './images/gaen-izuko.png'
import hachikuji from './images/hachikuji-mayoi.png'
import hanekawa from './images/hanekawa-tsubasa.jpg'
import kagenui from './images/kagenui-yozuru.jpg'
import kaiki from './images/kaiki-deishu.jpg'
import kanbaru from './images/kanbaru-suruga.jpg'
import ononoki from './images/ononoki-yotsugi.png'
import oshino from './images/oshino-meme.png'
import ougi from './images/oshino-ougi.jpg'
import shinobu from './images/oshino-shinobu.jpg'
import sengoku from './images/sengoku-nadeko.jpg'
import senjougahara from './images/senjougahara-hitagi.jpg'

class Game extends React.Component {

	state = {
		score: 0,
		hiscore: 0,
		pictures: [{
			id: 1,
			src: karen,
			alt: 'Araragi Karen',
		}, {
			id: 2,
			src: araragi,
			alt: 'Araragi Koyomi',
		}, {
			id: 3,
			src: tsukihi,
			alt: 'Araragi Tsukihi',
		}, {
			id: 4,
			src: gaen,
			alt: 'Gaen Izuko',
		}, {
			id: 5,
			src: hachikuji,
			alt: 'Hachikuji Mayoi',
		}, {
			id: 6,
			src: hanekawa,
			alt: 'Hanekawa Tsubasa',
		}, {
			id: 7,
			src: kagenui,
			alt: 'Kagenui Yozuru',
		}, {
			id: 8,
			src: kaiki,
			alt: 'Kaiki Deishu',
		}, {
			id: 9,
			src: kanbaru,
			alt: 'Kanbaru Suruga',
		}, {
			id: 10,
			src: ononoki,
			alt: 'Ononoki Yotsugi',
		}, {
			id: 11,
			src: oshino,
			alt: 'Oshino Meme',
		}, {
			id: 12,
			src: ougi,
			alt: 'Oshino Ougi',
		}, {
			id: 13,
			src: shinobu,
			alt: 'Oshino Shinobu',
		}, {
			id: 14,
			src: sengoku,
			alt: 'Sengoku Nadeko',
		}, {
			id: 15,
			src: senjougahara,
			alt: 'Senjougahara Hitagi',
		}],
		clicked: [],
		message: 'Click on any picture to start'
	}

	handleClick = (id) => {
		// shuffle the list
		const pictures = this.state.pictures.sort(() => Math.round(Math.random())- 1)
		console.log(pictures)
		if (this.state.clicked.includes(id)) {
			this.setState({
				message: 'Game Over! You already clicked that one',
				score: 0,
				pictures,
				clicked: [],
			})
			return
		}
		// add newly clicked button to array
		const clicked = [...this.state.clicked, id]
		// set score to length of that array
		const score = clicked.length
		// update hiscore if necessary
		const hiscore = score > this.state.hiscore ? score : this.state.hiscore
		if (score === this.state.pictures.length) {
			this.setState({
				message: 'You got them all! ... but can you do it again?',
				score,
				hiscore,
				pictures,
				clicked: [],
			})
			return
		}
		this.setState({
			message: 'Got one!',
			score,
			hiscore,
			pictures,
			clicked,
		})
	}

	render () {
		return (
			<div>
				<div>Score:{this.state.score}</div>
				<div>High Score:{this.state.hiscore}</div>
				<h2>{this.state.message}</h2>
				<div className='picture-container'>
					{this.state.pictures.map(picture => (
						<Picture key={picture.id}
								 _id={picture.id}
								 src={picture.src}
								 alt={picture.alt}
								 handleClick={this.handleClick}/>
					))}
				</div>
			</div>
		)
	}

}

export default Game
