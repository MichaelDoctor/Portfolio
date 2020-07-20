import React from 'react';
import { Helmet } from 'react-helmet';

export const HeadHelmet = ({ title }) => {
	return (
		<Helmet>
			<title>{title}</title>
		</Helmet>
	);
};
