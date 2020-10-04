import React, { Component } from 'react'
import CardData from './CardData.component'

export default class CountryData extends Component {
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
        return (
            <div className="global-stats">
                <CardData confirmed={globalStats.confirmed} recovered={globalStats.recovered} deaths={globalStats.deaths} />
            </div>
        )
    }
}
