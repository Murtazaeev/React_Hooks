import React from 'react';

function MockChild(props) {
	console.log(props);
	return <div>{`name: ${props.name}, surname: ${props.surname}, job: ${props.job}, age: ${props.age} `}</div>;
}

export default MockChild;
