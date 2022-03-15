import React from 'react';
import useToggle from './hooks/useToggle';

function Toggler() {
	const [ isHappy, toggleIsHappy ] = useToggle(true);
	return <h1 onClick={toggleIsHappy}>{isHappy ? 'happy' : 'sad'}</h1>;
	
}
export default Toggler;
