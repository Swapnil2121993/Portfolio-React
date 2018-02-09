import React from 'react'
import PropTypes from 'prop-types'

import DisplayModelsContainer from 'container/DisplayModelsContainer'

import styles from './ProgressMeter.css'

import penImage from 'image/icon-pen-white.svg'

const ProgressMeter = ({ getMessage, commonDisplayModel, progressMeterDisplayModel }) => {
	const currentStep = progressMeterDisplayModel.get('steps').findIndex(step => {
		return step.get('states').includes(commonDisplayModel.pageId)
	})

	const numSteps = progressMeterDisplayModel.get('steps').size
	console.log(numSteps)

	const getClassName = i => {
		if (i < currentStep) {
			return styles['previous'] + (progressMeterDisplayModel.get('clickable') ? ' ' + styles['clickable'] : '')
		}

		if (i === currentStep) {
			return styles['active']
		}

		return ''
	}

	const onClick = step => e => {
		document.querySelector('form .flow-event').name = '_eventId_edit' + step.get('editState').replace(/[a-z]/, match => match.toUpperCase())
		document.querySelector('form').submit()
		e.preventDefault()
	}

	return (
		<div className={styles['progress-meter']}>
			<div className={styles['progress-small'] + (currentStep > 0 && progressMeterDisplayModel.get('clickable') ? ' ' + styles['has-previous'] : '')}>
				{currentStep > 0 && progressMeterDisplayModel.get('clickable') ? <a href="#" onClick={onClick(progressMeterDisplayModel.get('steps').get(currentStep - 1))}>{getMessage('progressMeter.previous')}</a> : null}
				<span>{getMessage('progressMeter.step', currentStep + 1, numSteps)}</span>
			</div>
			<ul className={styles['progress-large']}>
				{progressMeterDisplayModel.get('steps').map((step, i) => (
					<li key={i} className={getClassName(i)} style={{ flexGrow: numSteps === 4 || numSteps === 5 ? 1 : null }}>
						{i < currentStep ? <span className="hidden-accessible">{getMessage('progressMeter.completedStep')}</span> : null}
						{i === currentStep ? <span className="hidden-accessible">{getMessage('progressMeter.currentStep')}</span> : null}
						{i < currentStep && progressMeterDisplayModel.get('clickable') && step.get('editState') ?
							<a href="#" onClick={onClick(step)}>{getMessage(step.get('titleKey'))} <img alt="" src={penImage} /></a>
							:
							<span className={styles['inactive-step']}>{getMessage(step.get('titleKey'))}</span>
						}
					</li>
				)).toArray()}
			</ul>
		</div>
	)
}

ProgressMeter.propTypes = {
	getMessage: PropTypes.func.isRequired,
	commonDisplayModel: PropTypes.object.isRequired,
	progressMeterDisplayModel: PropTypes.object.isRequired
}

export default DisplayModelsContainer(ProgressMeter)
