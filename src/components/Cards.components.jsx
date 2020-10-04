import React, { Component } from 'react'
import { fetchDataGlobal } from '../api'
import CardData from './CardData.component'
export default class Cards extends Component {
    state = {
        globalStats: { confirmed: 0, recovered: 0, deaths: 0 },
    }
    async componentDidMount() {
        const res = await fetchDataGlobal()
        //console.log(res.confirmed.value)
        this.setState({
            globalStats: {
                confirmed: res.confirmed.value,
                recovered: res.recovered.value,
                deaths: res.deaths.value
            }
        })
    }

    render() {
        const { globalStats } = this.state
        return (


            <div className="global-stats">
                <CardData confirmed={globalStats.confirmed} recovered={globalStats.recovered} deaths={globalStats.deaths} />
            </div>

        )
    }
}
