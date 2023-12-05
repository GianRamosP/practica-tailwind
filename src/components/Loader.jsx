import { Component } from "react";

class Loader extends Component {
  render() {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="border-4 border-gray-200 rounded-full h-12 w-12 animate-spin"></div>
      </div>
    );
  }
}

export default Loader;
