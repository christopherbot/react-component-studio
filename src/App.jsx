import React, { PureComponent } from 'react'
import Hexagon from 'components/hexagon/hexagon'

import './App.scss'

class App extends PureComponent {
  state = {
    hexagonWidth: 100,
    hexagonOuterColor: '#AF3D40',
    hexagonInnerColor: '#E8E8E8',
    hexagonChildren: '',
  }

  changeHexagonProp = (event) => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="playground">
        <h1>
          React Component Studio
        </h1>
        <div className="demo">
          <h2>
            Hexagon
          </h2>
          <div className="props">
            <h3>Props</h3>
            <ul>
              <li>width (number of px)</li>
              <input
                type="number"
                name="hexagonWidth"
                value={this.state.hexagonWidth}
                onChange={this.changeHexagonProp} />
              <li>color (string)</li>
              <label htmlFor="hexagonOuterColor">Outer Color</label>
              <input
                id="hexagonOuterColor"
                name="hexagonOuterColor"
                value={this.state.hexagonOuterColor}
                onChange={this.changeHexagonProp} />
              <label htmlFor="hexagonInnerColor">Inner Color</label>
              <input
                id="hexagonInnerColor"
                name="hexagonInnerColor"
                value={this.state.hexagonInnerColor}
                onChange={this.changeHexagonProp} />
              <li>children (any - input below is a string)</li>
              <input
                name="hexagonChildren"
                value={this.state.hexagonChildren}
                onChange={this.changeHexagonProp} />
            </ul>
          </div>
          <div className="component">
            <h3>Default</h3>
            <Hexagon />
          </div>
          <div className="component">
            <h3>Configurable</h3>
            <Hexagon width={this.state.hexagonWidth} color={this.state.hexagonOuterColor}>
              <Hexagon width={this.state.hexagonWidth} color={this.state.hexagonInnerColor}>
                {this.state.hexagonChildren}
              </Hexagon>
            </Hexagon>
          </div>
        </div>
      </div>
    )
  }
}

export default App
