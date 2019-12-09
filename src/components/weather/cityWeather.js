import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { removeCity } from './../../actions';

class CityWeatherComponent extends React.Component {
  render() {
    let minTemp, maxTemp, elem;
    if (this.props.weatherInfo) {
      if (this.props.weatherInfo.cod === 200) {
        minTemp = (parseFloat(this.props.weatherInfo.main.temp_min) - 273.15).toFixed(2);
        maxTemp = (parseFloat(this.props.weatherInfo.main.temp_max) - 273.15).toFixed(2)
        elem = (
          <div className="border border-dark col-md-3 col-xs-9 m-5 p-3">
            <h4>{this.props.weatherInfo.name} {this.props.count}</h4>
            <p>Min {minTemp}<span>&#176;</span>C</p>
            <p>Max {maxTemp}<span>&#176;</span>C</p>
          </div>
        )
      } else {
        elem = (
          <div className="col text-center mt-5">City Not found</div>
        )
        this.props.removeCity();
      }

    } else {
      elem = (
        <div className="col text-center mt-5">Loading...</div>
      )
    }
    return (
      <section className="row">
        {elem}
      </section>
    )

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(dispatch)
  }
}

CityWeatherComponent.propTypes = {
  removeCity: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    weatherInfo: state.cityWeatherReducer
  }
}

export default connect(mapStateToProps, { removeCity })(CityWeatherComponent);
