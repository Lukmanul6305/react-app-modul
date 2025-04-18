import React from "react";
import Images from "./Images";

class List extends React.Component {
  render() {
    return (
      <>
        <ol>
          <li>
            <Images linkGambar="https://plus.unsplash.com/premium_photo-1677159254747-402e775987e5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </li>
          <li>
            <Images linkGambar="https://images.unsplash.com/photo-1630369281377-839f10973a72?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </li>
          <li>Satu</li>
        </ol>
      </>
    );
  }
}

export default List;
