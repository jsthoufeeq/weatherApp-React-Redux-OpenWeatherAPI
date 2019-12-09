import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWeather, addCity } from './../../actions';

class SearchInput extends React.Component {
  onChange = (e) => {
    if(!this.props.cityList.includes(e.target.value)){
      this.props.addCity(e.target.value);
    }; 
    this.props.getWeather(e.target.value);
  }
  submitForm = (e) => {
    e.preventDefault();
  }
  render() {
    let cityList = this.props.cityList ? 
      this.props.cityList.map((elem, key) => 
          <option key={key} value={elem}></option>
        ) : 'loading...'
    return (
      <section className="text-center mt-4">
        <form onSubmit={this.submitForm} className="col-12" noValidate>
          <input className="col-md-4 col-xs-12" list="city-weather" type="text" onChange={this.onChange} placeholder="Type the name of a city" />
          <datalist id="city-weather">
              {cityList}
          </datalist>
        </form>
      </section>
    )
  }
}

SearchInput.propTypes = {
  getWeather: PropTypes.func.isRequired,
  addCity: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
      cityList: state.searchInputReducer
  }
}

export default connect(mapStateToProps, { getWeather, addCity })(SearchInput);
