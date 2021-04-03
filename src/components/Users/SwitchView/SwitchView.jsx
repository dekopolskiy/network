import React, { Component } from 'react'
import view_grid_4 from "../../../images/thumb4.png";
import view_grid_9 from "../../../images/thumb9.png";


class SwitchView extends Component {
    render() {
        return (
            <div
              onClick={this.props.handleViewChange}
            >
              {this.props.flags.isChangeView ? (
                <img src={view_grid_4} width="17" />
              ) : (
                <img src={view_grid_9} width="15" />
              )}
            </div>
        )
    }
}

export default SwitchView
