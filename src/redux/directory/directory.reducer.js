const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imgUrl:
        "https://images.pexels.com/photos/413727/pexels-photo-413727.jpeg?cs=srgb&dl=adult-beautiful-beauty-413727.jpg&fm=jpg",
      id: 1,
      linkUrl: "shop/hats",
      size: "large",
    },
    {
      title: "jackets",
      imgUrl:
        "https://cdn.pixabay.com/photo/2014/08/26/21/49/jackets-428622_1280.jpg",
      id: 2,
      linkUrl: "shop/jackets",
      size: "large",
    },
    {
      title: "sneakers",
      imgUrl:
        "https://images.unsplash.com/photo-1508188239917-0fc5f653cb47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      id: 3,
      linkUrl: "shop/sneakers",
      size: "large",
    },
    {
      title: "mens",
      imgUrl:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      size: "large",
      id: 4,
      linkUrl: "shop/mens",
    },
    {
      title: "womens",
      imgUrl:
        "https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      size: "large",
      id: 5,
      linkUrl: "shop/womens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
