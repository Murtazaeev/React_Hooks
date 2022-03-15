import React from 'react';
import MockChild from './MockChild';

function Mock(props) {
	console.log('Mock:', props);
	const { name, ...other } = props;
	const updatedSurname = 'Updated';
	return <MockChild name={name} {...other} surname={updatedSurname} />;
}

export default Mock;
