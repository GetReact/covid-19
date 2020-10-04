import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'


export default class CardData extends Component {
    render() {
        return (
            <div style={{
                height: '100 %',
                width: '100 %',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: ' 2%'
            }}>
                <Grid
                    centered
                    columns={4}
                    padded
                    stackable
                    style={{ margin: '1.5em', width: '80%' }}
                    textAlign='center'
                >
                    <Grid.Column color='yellow' style={{ margin: '0.5em', height: 120, fontSize: 'x-large', textAlign: 'center' }}>
                        Confirmed : <br /> <br /> <br />{`${this.props.confirmed}`}
                    </Grid.Column>

                    <Grid.Column color='green' style={{ margin: '0.5em', height: 120, fontSize: 'x-large', textAlign: 'center' }}>
                        Recovered : <br /> <br /> <br />{` ${this.props.recovered}`}
                    </Grid.Column>

                    <Grid.Column color='red' style={{ margin: '0.5em', height: 120, fontSize: 'x-large', textAlign: 'center' }}>
                        Deaths : <br /> <br /> <br />{`${this.props.deaths}`}
                    </Grid.Column>



                </Grid>

            </div>
        )
    }
}