import React from 'react'

import './Picture.css'

const Picture = props => (
	<div className='picture-panel' key={props.id} onClick={() => props.handleClick(props._id)}>
		<img src={props.src} alt={props.alt}></img>
	</div>
)

export default Picture
