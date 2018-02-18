
import React from 'react'
import PropTypes from 'prop-types'
import DisplayModelsContainer from 'container/DisplayModelsContainer'
import getMessage from 'content/messages'
import bdseDark from 'image/header-dark.jpg'
import bdseLight from 'image/header-light.jpg'
import pll from 'image/icon-info.svg'

import styles from './AppBanner.css'

const AppBanner = ({ darkTheme, appName }) => {
	let image
	switch (appName) {
		case 'BDSE':
			image = <img alt={getMessage('alertMessage.urgent')} src={darkTheme ? bdseDark : bdseLight} />			
			break
		case 'PLL':
			image = <img alt={getMessage('alertMessage.urgent')} src={pll} />
			break
		default:
			image = null
			break 
	}
	return (
		<div className={styles['app-banner'] + 'col-sm-12 col-md-12 col-lg-12' + (darkTheme ? ' ' + styles['dark-theme'] : ' ' + styles['light-theme'] )}>
			{image}
			<div className={styles['header']} >
				<h2> Applying for </h2>
				<h1> Everyday Checking </h1>
				<h3>Complete this application in just 10 minutes </h3>
			</div>
		</div>
	)
}

AppBanner.propTypes = {
	productDetails: PropTypes.object,
	darkTheme: PropTypes.bool,
	appName: PropTypes.string
}

export default DisplayModelsContainer(AppBanner)


<AppBanner darkTheme={false} appName={'BDSE'} />



