import React, { Component } from 'react'
import CountryPicker from './components/CountryPicker.component'
const url = 'https://covid19.mathdro.id/api'
export default class Dashboard extends Component {
    state = {
        countries: [],
        globalStats: { confirmed: 0, recovered: 0, deaths: 0 },
        countryStats: { confirmed: 0, recovered: 0, deaths: 0 },
        selectedCountry: null
    }
    componentDidMount() {
        fetch(`${url}/countries`)
            .then(resp => resp.json())
            .then(res => {

                this.setState({
                    countries: res['countries']
                })

            })
        fetch(url)
            .then(resp => resp.json())
            .then(res => {

                this.setState({
                    globalStats: {
                        confirmed: res.confirmed.value,
                        recovered: res.recovered.value,
                        deaths: res.deaths.value
                    }
                })
            })
    }
    updateCountryState = () => {
        if (this.state.selectedCountry) {


            fetch(`${url}/countries/${this.state.selectedCountry}`)
                .then(resp => resp.json())
                .then(res => {

                    this.setState({
                        countryStats:
                        {
                            confirmed: res.confirmed.value,
                            recovered: res.recovered.value,
                            deaths: res.deaths.value
                        }
                    })
                })
        }
    }

    onhandleOptionChange = (e) => {
        this.setState({ selectedCountry: e.target.value }, this.updateCountryState)
    }




    render() {
        const { globalStats, countryStats, countries } = this.state
        return (

            <div className='dashboard'>
                <div className="global-stats">
                    <div className="confirmed-stats">Confirmed : {globalStats.confirmed}</div>
                    <div className="recovered-stats">Recovered : {globalStats.recovered}</div>
                    <div className="deaths-stats">Deaths : {globalStats.deaths}</div>
                </div>
                <select value={this.state.selectedCountry} onChange={this.onhandleOptionChange}>
                    <option value='tn' >Select</option>
                    {countries.map((country) => (<option key={country.name} value={country.name}>{country.name}</option>))}
                </select>
                <div className="county-stats">
                    <div className="confirmed-stats">Confirmed : {countryStats.confirmed}</div>
                    <div className="recovered-stats">Recovered : {countryStats.recovered}</div>
                    <div className="deaths-stats">Deaths : {countryStats.deaths}</div>
                </div>

            </div >
        )
    }
}
