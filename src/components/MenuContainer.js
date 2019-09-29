import React from "react";
import MenuItem from "./MenuItem";
import "./menuContainer.scss";

class MenuContainer extends React.Component {
  state = {
    items: [
      {
        title: "hats",
        imgUrl:
          "https://images.pexels.com/photos/413727/pexels-photo-413727.jpeg?cs=srgb&dl=adult-beautiful-beauty-413727.jpg&fm=jpg",
        id: 1
      },
      {
        title: "jackets",
        imgUrl:
          "https://cdn.pixabay.com/photo/2014/08/26/21/49/jackets-428622_1280.jpg",
        id: 2
      },
      {
        title: "sneakers",
        imgUrl:
          "https://images.unsplash.com/photo-1508188239917-0fc5f653cb47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        id: 3
      },
      {
        title: "mens",
        imgUrl:
          "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        size: "large",
        id: 4
      },
      {
        title: "womens",
        imgUrl:
          "https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        size: "large",

        id: 5
      }
    ]
  };

  render() {
    return (
      <div className="menu-container">
        {this.state.items.map(({ title, imgUrl, id, size }) => (
          <MenuItem key={id} title={title} imgUrl={imgUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default MenuContainer;
