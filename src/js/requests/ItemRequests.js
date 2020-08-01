// Need to use axios and setItems to set the items in the array

const getItems = function () {
    return [
        {
          name: "Item One",
          description: "This is the first item in the art gallery.",
          image: "https://news.artnet.com/app/news-upload/2019/12/5db820a075ba3.jpg"
        },
        {
          name: "Item Two",
          description: "This is the second item in the art gallery.",
          image: "https://news.artnet.com/app/news-upload/2019/12/5db820a075ba3.jpg"
        }
    ]
};

export {getItems}