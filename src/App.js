
import { connect } from 'react-redux'

const mapStateToProps = state => {
	// The top-level display models map is a regular object instead of an
	// Immutable map, so we don't have to convert it here. This lets us use each
	// display model as a property for components instead of passing a
	// displayModels map as the property.
	return state.displayModels
}

const addDisplayModelsContainer = component => {
	return connect(mapStateToProps)(component)
}

export default addDisplayModelsContainer

// global-variable.less

//primary color theme
@wells-fargo-red: #bb0826;
@wells-fargo-yellow: #fcc60a;
@cool-dark-gray: #434343;
@gray3: #d9d9d9;
@default-gray: #787575;
@digital-blue: #5174b8;
@error-dark-red: #e20303;

//message color
@confirm-dark-green:#388229;
@urgent-orange: #de8002;
@alert-yellow: #ffbb12;
@disaster-magenta: #bd2a72;
@information-blue: #0eb9f3;

//text family
@text-color: #434343;
@input-color: #3388cc;
@error-color: #e20303;
@link-color: #5174b8;
@heading-color: #5f5f5f;
@border-color: #d6d6d6;
@background-color: #ededed;
@tip-text-color: #787575;
@focus-outline-color: rgba(81,116,184,0.5);

//heading colors
@cool-gray: #44464a;
@primary-red: #d90000;
@snappy-heading-color: #595959;
@snappy-label-color: #595959;
@snappy-border-color: #595959;
@snappy-title-red: #d20826;

@text-font-family: "myriad-pro", Verdana, sans-serif;
@heading-font-family: "myriad-pro", Verdana, sans-serif;

@snappy-heading-font-family: "myriad-pro", Verdana, sans-serif;

@field-height: 1.75rem;

@snappy-field-height: 2.9rem;

@focus-box-shadow: 0 0 5px @focus-outline-color;
@snappy-focus-box-shadow: 0 0 10px @focus-outline-color;

@small-screen: ~"not screen and (min-width: 48rem)";
@not-small-screen: ~"screen and (min-width: 48rem)";
@not-large-screen: ~"not screen and (min-width: 64rem)";
@large-screen: ~"screen and (min-width: 64rem)";
@small-screen-landscape: ~"screen and (max-width: 48rem) and (orientation: landscape)";

//common color code
@white: #ffffff;
@black: #000000;

//Grid
@grid-columns: 12;
@grid-gutter-width: 16px;

