import React from "react"

export default class Search extends React.Component{
    state = {
        search: "panda",
        type: "all"
    };
    KeyDown = (e) => {
        if (e.key === 'Enter'){
            this.props.search(this.state.search)
        }
    };
    Filter = (e) => {
        this.setState({type: e.target.dataset.type}, () => {
            this.props.search(this.state.search, this.state.type)
        })
    };
    render() {
        return(
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            id="email_inline"
                            type="email"
                            placeholder="Search"
                            className="validate"
                            onKeyDown={this.KeyDown}
                            onChange={(e) => this.setState({search: e.target.value})}
                        />
                        <button
                            className="btn btn-search"
                            onClick={() => {this.props.search(this.state.search)}}
                        >Search movie</button>
                    </div>
                    <div>
                        <label>
                            <input className="with-gap"
                                   name="type"
                                   type="radio"
                                   data-type="all"
                                   onChange={this.Filter}
                                   checked={this.state.type === "all"}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input className="with-gap"
                                   name="type" type="radio"
                                   onChange={this.Filter}
                                   data-type="movie"
                                   checked={this.state.type === "movie"}

                            />
                            <span>Movies only</span>
                        </label>
                        <label>
                            <input className="with-gap"
                                   name="type"
                                   type="radio"
                                   data-type="series"
                                   onChange={this.Filter}
                                   checked={this.state.type === "series"}

                            />
                            <span>Serials only</span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }

}