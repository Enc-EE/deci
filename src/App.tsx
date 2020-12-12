import React from 'react';
import './App.css';

const DecimalMilliseconds =
  100 // hours
  * 100 // minutes
  * 100 // seconds
  * 100 // milliseconds
const NormalMilliseconds =
  24 // hours
  * 60 // minutes
  * 60 // seconds
  * 1000 // milliseconds

export default class App extends React.Component {
  private timeElement: HTMLParagraphElement | null | undefined

  componentDidMount() {
    this.animate()
  }

  private animate = () => {
    if (this.timeElement) {
      var date = new Date()
      var milliseconds =
        date.getMilliseconds()
        + date.getSeconds() * 1000
        + date.getMinutes() * 1000 * 60
        + date.getHours() * 1000 * 60 * 60
      var decimalDate = Math.round(milliseconds / NormalMilliseconds * DecimalMilliseconds)
      var decimalDateString = decimalDate.toString()
      var displayString =
        decimalDateString.slice(0, 2)
        + ":" + decimalDateString.slice(2, 4)
        + ":" + decimalDateString.slice(4, 6)
      this.timeElement.innerText = displayString
    }
    window.requestAnimationFrame(this.animate)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p ref={x => this.timeElement = x}>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </header>
      </div>
    )
  }
}
