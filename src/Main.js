import { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Menu Makanan",
      title2: "Menu minuman",
      inputValue: "lukman",
    };

    this.rubahData = this.rubahData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  rubahData() {
    this.setState(() => {
      return {
        title: this.state.title2,
        title2: this.state.title,
      };
    });
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  render() {
    return (
      <>
        <h3>{this.state.title}</h3>
        <button onClick={this.rubahData}>ubah Data</button>
        <br />
        <input type="text" value={this.setState.inputValue} onChange={this.handleChange} />
        <p>isi input : {this.state.inputValue}</p>
      </>
    );
  }
}

export default Main;
