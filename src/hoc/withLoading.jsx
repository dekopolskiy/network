import React, { Component } from 'react'

export const withLoading = (Component) => {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                isLoad: false,
            }
        }

        componentDidUpdate(prevProps, prevState ) {
        }

        handleLoad = ( booleanVal ) => {
            this.setState({isLoad: booleanVal })
        }
        render() {
            return <Component {...this.props} 
            handleLoad={this.handleLoad} 
            isLoad={this.state.isLoad}/>
        }
    }
}

