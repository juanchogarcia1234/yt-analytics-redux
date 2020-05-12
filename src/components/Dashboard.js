import React, { Component } from 'react';
import Spinner from './Spinner';
import translate from '../utils/translate';


class Dashboard extends Component {

    state = {
        data: {}
    }

    renderResults() {
        
        const resultsArr = this.state.data.rows.map(country => {
            return (
                <tr key={this.state.data.rows.indexOf(country)}>
                    <td>{translate(country[0])}</td>
                    <td data-sort-value={country[1]}>{country[1]}</td>
                </tr>
            )
        })
        
        return resultsArr;
    }

    async componentDidMount() {

        var request = window.gapi.client.youtubeAnalytics.reports.query({'ids': 'channel==MINE', 'startDate': '2019-05-01', 'endDate': '2020-03-30', 'metrics': 'views', 'dimensions': 'country'});
            // Execute the API request.
            await request.execute((response) => {
                console.log(response)
                this.setState({ data: response })
            });

    }

    componentDidUpdate() {

        window.$('table').tablesort();
    }

    render() {
        return this.state.data.rows !== undefined ? (
                <div style={{backgroundColor: '#f9f9f9'}}>
                <div className='ui container' style={{paddingTop: '20px', paddingBottom: '20px'}}>
                    <table className="ui sortable celled table" style={{marginBottom: '30px'}}>
                        <thead>
                            <tr>
                            <th className="ascending">{(this.state.data.columnHeaders[0].name).charAt(0).toUpperCase() + (this.state.data.columnHeaders[0].name).slice(1)}</th>
                            <th>{(this.state.data.columnHeaders[1].name).charAt(0).toUpperCase() + (this.state.data.columnHeaders[1].name).slice(1)}</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.renderResults() }
                        </tbody>
                    </table>
                    </div>
                </div>
                   
        ) : (
            <Spinner />
        )
    }
}

export default Dashboard;