import React from "react";

class SearchWeather extends React.Component{
    state = {
        name : "",
        date : "2023-12-09 09:00:00",
      temp_min :  282.0,
      temp_max : 282.92,
      message : "Carry Umbrella",
      additional_message : "Its too windy",
    };

    search = (e) => {
        e.preventDefault();
        if(this.state.name === ""){
            alert("Name is Mandatory!");
            return;
        }
        this.props.addSearchHandler(this.state.name);
        // this.setState({name : ""});
        // console.log("log " + this.state);
        // console.log("log " + this.state.name);
    };
    
    render() {
        
        return (
            <div className="ui placeholder segment">
                <div className="ui stackable very relaxed one column grid">
                    <div className="column">
                        <form className="ui form" onSubmit={this.search}>
                            <div className="field">
                                <label>City Name</label>
                                <div className="ui left icon input">
                                    <input type="text" name = "name" placeholder="Example : Pune" value={this.state.name} onChange={(e) => this.setState({name : e.target.value})} />
                                    <i aria-hidden="true" className="map pin icon"></i>
                                </div>
                            </div>
                            {/* <div class="field">
                                <label>Password</label>
                                <div class="ui left icon input">
                                    <input type="password"/>
                                    <i aria-hidden="true" class="lock icon"></i>
                                </div>
                            </div> */}
                            <button className="ui primary button"><i aria-hidden="true" className="search icon"></i>Search</button>
                        </form>
                    </div>
                    {/* <div class="middle aligned column">
                        <button class="ui big button">
                            <i aria-hidden="true" class="signup icon"></i>Sign up
                        </button>
                    </div> */}
                </div>
                {/* <div class="ui vertical divider">Or</div> */}
                </div>
            );
    }
}

export default SearchWeather;