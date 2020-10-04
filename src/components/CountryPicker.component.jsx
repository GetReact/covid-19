import React, { Component } from 'react'
import { fetchCountries, fetchDataPerCountry } from '../api'
import { Select } from 'semantic-ui-react'
import CardData from './CardData.component'

export default class CountryPicker extends Component {
    state = {
        countries: [],
        selectedCountry: null,
        countryStats: { confirmed: 0, recovered: 0, deaths: 0 },
    }
    async componentDidMount() {
        this.setState({ countries: await fetchCountries() })
    }
    updateCountryState = async () => {
        const res = await fetchDataPerCountry(this.state.selectedCountry)
        if (this.state.selectedCountry) {
            this.setState({
                countryStats:
                {
                    confirmed: res.confirmed.value,
                    recovered: res.recovered.value,
                    deaths: res.deaths.value
                }
            })
        }
    }

    onhandleOptionChange = async (e, data) => {
        this.setState({ selectedCountry: data.value }, await this.updateCountryState)
    }
    render() {
        const { countries, countryStats } = this.state
        return (
            <div>
                <div>
                    <Select
                        placeholder='Select your country'
                        options={countries.map((c) => ({ key: c.name, value: c.iso2, text: c.name }))}
                        onChange={this.onhandleOptionChange}
                        style={{
                            height: '100 %',
                            width: '100 %',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: ' 2%'
                        }}
                    />
                </div>

                <div className="stats">
                    <CardData confirmed={countryStats.confirmed} recovered={countryStats.recovered} deaths={countryStats.deaths} />
                </div>

            </div>
        )
    }
}
















