
import React from 'react'
import PropTypes from 'prop-types'
import DisplayModelsContainer from 'container/DisplayModelsContainer'
import getMessage from 'content/messages'
import bdseDark from 'image/header-dark.jpg'
import bdseLight from 'image/header-light.jpg'
import pll from 'image/icon-info.svg'

import styles from './Header.css'

const Header = ({ darkBackground, appName }) => {
	let image
	switch (appName) {
		case 'BDSE':
			image = <img alt={getMessage('alertMessage.urgent')} src={darkBackground ? bdseDark : bdseLight} />			
			break
		case 'PLL':
			image = <img alt={getMessage('alertMessage.urgent')} src={pll} />
			break
		default:
			image = null
			break 
	}
	return (
		<div className={styles['page-title'] + 'col-sm-12 col-md-12 col-lg-12' + (darkBackground ? ' ' + styles['dark-theme'] : ' ' + styles['light-theme'] )}>
			{image}
			<div className={styles['header']} >
				<h2> Applying for </h2>
				<h1> Everyday Checking </h1>
				<h3>Complete this application in just 10 minutes </h3>
			</div>
		</div>
	)
}

Header.propTypes = {
	productDetails: PropTypes.object,
	darkBackground: PropTypes.bool,
	appName: PropTypes.string
}

export default DisplayModelsContainer(Header)



