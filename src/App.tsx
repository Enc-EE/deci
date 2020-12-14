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
  private timeElement: HTMLSpanElement | null | undefined
  private oldTimeElement: HTMLSpanElement | null | undefined

  componentDidMount() {
    this.animate()
  }

  private animate = () => {
    if (this.timeElement && this.oldTimeElement) {
      var date = new Date()
      var milliseconds =
        date.getMilliseconds()
        + date.getSeconds() * 1000
        + date.getMinutes() * 1000 * 60
        + date.getHours() * 1000 * 60 * 60

      var decimalDate = Math.round(milliseconds / NormalMilliseconds * DecimalMilliseconds)
      var decimalDateString = this.leadingZeros(decimalDate.toString(), 6)

      var displayString =
        decimalDateString.slice(0, 2)
        + ":" + decimalDateString.slice(2, 4)
        + ":" + decimalDateString.slice(4, 6)
      this.timeElement.innerText = displayString

      this.oldTimeElement.innerText =
        "("
        + this.leadingZeros(date.getHours().toString(), 2)
        + ":"
        + this.leadingZeros(date.getMinutes().toString(), 2)
        + ":"
        + this.leadingZeros(date.getSeconds().toString(), 2)
        + ")"
    }
    window.requestAnimationFrame(this.animate)
  }

  leadingZeros(text: string, length: number): string {
    for (let i = text.length; i < length; i++) {
      text = "0" + text
    }
    return text
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <span ref={x => this.timeElement = x}></span> <br />
            <span className="sub-text" ref={x => this.oldTimeElement = x}></span>
          </p>
        </header>
      </div>
    )
  }
}
