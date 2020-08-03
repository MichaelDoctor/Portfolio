import React from 'react';

export const Pagination = () => {
	const handleClick = (e) => {
		const pages = document.getElementsByName('page');
		pages.forEach((page) => {
			page.className = '';
		});
		e.target.className = `active`;
	};
	return (
		<div>
			<h1>script with api pagination!!!! </h1>
			<ul className="pagination pagination-lg">
				<li>
					<a onClick={(e) => handleClick(e)} className="active" name="page">
						1
					</a>
				</li>
				<li>
					<a onClick={(e) => handleClick(e)} name="page">
						2
					</a>
				</li>
				<li>
					<a onClick={(e) => handleClick(e)} name="page">
						3
					</a>
				</li>
				<li>
					<a onClick={(e) => handleClick(e)} name="page">
						4
					</a>
				</li>
				<li>
					<a onClick={(e) => handleClick(e)} name="page">
						5
					</a>
				</li>
			</ul>
		</div>
	);
};
