import React, {Component} from "react"

export default class Auth extends Component {
    constructor() {
        super()
    }

    render() {
        console.log(this.props.location)
        return (
            <div>Auth</div>
        )
    }
}
