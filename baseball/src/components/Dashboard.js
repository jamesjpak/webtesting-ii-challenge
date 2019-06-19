import React from 'react';

class Dashboard extends React.Component {
   
   
    render() {
        return (
            <div>
                <button onClick={this.props.addStrike}> Strike </button>

                <button onClick={this.props.addBall}> Ball </button>

                <button onClick={this.props.addFoul}> Foul </button>

                <button onClick={this.props.addHit}> Hit </button>
            </div>
        )
    }
}

export default Dashboard;