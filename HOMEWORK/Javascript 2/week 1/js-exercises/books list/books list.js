const books = [
    {
      title: 'The Design of Everyday Things ',
      author: 'Don Norman',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human ',
      author: 'Brian Christian',
      alreadyRead: true,
    },
    {
        title: 'Harry patter ',
        author: 'Joanne Rowling',
        alreadyRead: true,
    },
  ];
  let ul = document.getElementById("ul");
  //first book
  let li = document.createElement("li");
  ul.appendChild(li);
  let bookInfo = document.createElement("p");
  let p = document.createTextNode(books[0].title + ",Writed by " + books[0].author);
  bookInfo.appendChild(p);
  li.appendChild(bookInfo);
  //li style
  li.style.textAlign = "center"
  //font and color style
  bookInfo.style.color = "white";
  bookInfo.style.backgroundColor = "green";
  bookInfo.style.fontWeight = "bold";
  bookInfo.style.fontSize = "130%"
  //img
  let img = document.createElement("img");
  img.src = "https://images-na.ssl-images-amazon.com/images/I/81zpLhP1gWL.jpg";
  img.style.height = "150px";
  ul.appendChild(img);
  //second book
   let li3 = document.createElement("li");
   ul.appendChild(li3);
   let bookInfo3 = document.createElement("p");
   let p3 = document.createTextNode(books[2].title + ",Writed by " + books[2].author);
   bookInfo3.appendChild(p3);
   li3.appendChild(bookInfo3);
   //li style
   li3.style.textAlign = "center"
   //font and color style
   bookInfo3.style.color = "white";
   bookInfo3.style.backgroundColor = "green";
   bookInfo3.style.fontWeight = "bold";
   bookInfo3.style.fontSize = "130%"
   //img
   let img3 = document.createElement("img");
   img3.src = "https://www.yifysubtitles.com/images/movies/movie-24.jpg";
   img3.style.height = "150px";
   ul.appendChild(img3);
  //theerd
  let li1 = document.createElement("li");
  ul.appendChild(li1);
  let bookInfo1 = document.createElement("p");
  let p1 = document.createTextNode(books[1].title + ",Writed by " + books[1].author);
  bookInfo1.appendChild(p1);    
  li1.appendChild(bookInfo1);
  //font and color  style
  bookInfo1.style.color = "white";
  bookInfo1.style.backgroundColor = "red";
  bookInfo1.style.fontWeight = "bold";
  bookInfo1.style.fontSize = "130%";
  //li style
  li1.style.textAlign = "center"
   //img
  let img1 = document.createElement("img");
  img1.src = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg";
  img1.style.height = "150px";
  ul.appendChild(img1);