export const renderScripts = () => {
	const scripts = [
		'https://michaeldoctor.imfast.io/portfolio/js/plugins.js',
		'https://michaeldoctor.imfast.io/portfolio/js/bootstrap.min.js',
		'https://michaeldoctor.imfast.io/portfolio/js/jquery.prettyPhoto.js',
		'https://michaeldoctor.imfast.io/portfolio/js/init.js'
	];

	const oldDiv = document.getElementById('scripts');
	oldDiv.parentNode.removeChild(oldDiv);
	const div = document.createElement('div');
	div.setAttribute('id', 'scripts');

	const createScripts = (srcs) => {
		srcs.forEach((src) => {
			const script = document.createElement('script');
			script.src = src;
			div.appendChild(script);
		});
	};

	createScripts(scripts);
	document.body.appendChild(div);
};
