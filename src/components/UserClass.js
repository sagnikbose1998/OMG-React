import React from 'react'
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count:5
        }
    }
  render() {
    const {count}=this.state
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h2>Count = {count}</h2>
        <h3>Location: Kolkata</h3>
        <button onClick={()=>{
            this.setState({
                count: count+1
            })
        }}>Clcik Me To increase Count</button>
        <h3>Contact: @sagnik@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass