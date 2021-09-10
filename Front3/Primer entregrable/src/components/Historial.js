import React, { Component } from "react";

class Historial extends Component {
  render() {
    return (
      <div className="Historial">
        <h4> Historial de opciones elegidas: </h4>
        <ul> {this.props.historial}</ul>
      </div>
    );
  }
}

export default Historial;
