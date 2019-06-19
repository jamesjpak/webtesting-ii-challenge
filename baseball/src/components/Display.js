import React from 'react';

class Display extends React.Component {

    componenentDidMount () {
        this.props = this.props.state
    }
  
    render() {
        console.log('props passed', this.props)

        return (
            <div>
                <h1> Strikes {this.props.stats.strikes} </h1>
                <h1> Balls {this.props.stats.balls}  </h1>
                <h1> Fouls {this.props.stats.fouls} </h1> 
            </div>
        )
    }
}

export default Display;