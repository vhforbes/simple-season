import React from "react"
import SeasonDisplay from "./SeasonDisplay"

class App extends React.Component {
  // Alternate state initialization
  state = {
    latitude: "",
    errorMessage: "",
  }

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     latitude: "",
  //     errorMessage: "",
  //   }
  // }

  componentDidMount() {
    this.getLatitude()
  }

  getLatitude() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude })
      },
      (err) => {
        console.log(err)
        this.setState({ errorMessage: err.message })
      }
    )
    return
  }

  render() {
    if (this.state.errorMessage) {
      return <h1>{this.state.errorMessage}</h1>
    }

    if (this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />
    }

    return <h1>Loading...</h1>
  }
}

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => {
//       console.log(position);
//     },
//     (error) => {
//       console.log(error);
//     }
//   );

//   return (
//     <>
//       <h1>Hey</h1>
//       <SeasonDisplay />
//     </>
//   );
// };

export default App
