import React from 'react';
import { MainSlider } from '../components/portfolio/MainSlider';
import { Skills } from '../components/portfolio/Skills';
import { About } from '../components/portfolio/About';
import { Footer } from '../components/portfolio/Footer';
import { HeadHelmet } from '../components/portfolio/HeadHelmet';
import { Projects } from '../components/portfolio/Projects';
import { connect } from 'react-redux';
import { resetSent } from '../redux/actions/contact';
import PropTypes from 'prop-types';

const Home = ({ isSent, resetSent }) => {
	if (isSent) resetSent();
	return (
		<div>
			<HeadHelmet title="Michael Doctor's Portfolio" />
			<MainSlider />
			<div id="content-wrapper">
				<Skills heading="languages" />
				<Skills heading="frameworks" />
				<About />
				<Projects />
			</div>
			<Footer />
		</div>
	);
};

Home.propTypes = {
	isSent    : PropTypes.bool,
	resetSent : PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	isSent : state.contact.isSent
});

export default connect(mapStateToProps, { resetSent })(Home);
