const processEmpData = function () {
  fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list")
    .then((response) => response.json())
    .then((result) => displayBooks(result));
};

const displayBooks = function (libData) {
  //const isbn = libData.isbn;
  let table = document.getElementById("table");
  for (let i = 0; i < libData.length; i++) {
    let firstRow = document.createElement("tr");
    table.append(firstRow);
    let nums = document.createElement("td");
    nums.innerHTML = i + 1;
    firstRow.append(nums);

    let isbn = document.createElement("td");
    isbn.innerHTML = libData[i].isbn;
    firstRow.append(isbn);

    let bookTitle = document.createElement("td");
    bookTitle.innerHTML = libData[i].title;
    firstRow.append(bookTitle);

    let overDue = document.createElement("td");
    overDue.innerHTML = libData[i].overdueFee;
    firstRow.append(overDue);

    let publisher = document.createElement("td");
    publisher.innerHTML = libData[i].publisher;
    firstRow.append(publisher);
    let datePublished = document.createElement("td");
    datePublished.innerHTML = libData[i].datePublished;
    firstRow.append(datePublished);
  }
};

processEmpData();
