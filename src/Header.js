import { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      judul: "ini dari state dengan class",
      langsung: this.props.list,
    };
    this.handlePesan = this.handlePesan.bind(this);
  }
  handlePesan(pesan, e) {
    e.preventDefault();
    alert(pesan);
    alert("hai");
  }
  render() {
    return (
      <>
        <h1>{this.props.nama}</h1>
        <p>{this.state.judul}</p>
        <h3>secara langsung {this.props.list}</h3>
        <a href="/" onClick={(e) => this.handlePesan("Pesan ini dari parameter", e)}>
          Halaman Header
        </a>
      </>
    );
  }
}

export default Header;
