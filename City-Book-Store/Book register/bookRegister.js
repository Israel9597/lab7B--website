"use strict";
// we can use IIFE or window.onload

window.onload = function () {
  //bookform data fields
  const txtTitle = document.querySelector("#title");

  const txtISBN = document.querySelector("#isbn");
  const txtOverdueFee = document.querySelector("#overdueFee");
  const txtPublisher = document.querySelector("#publisher");
  const txtDatepPublished = document.querySelector("#datePublished");

  const initAddNewBook = function () {
    const formNewBook = document.querySelector("#formNewBook");
    formNewBook.addEventListener("submit", addNewBook);
  };
  const getBookData = function () {
    const bookObj = {
      title: txtTitle.value,
      isbn: txtISBN.value,
      overdueFee: txtOverdueFee.value,
      publisher: txtPublisher.value,
      datePublished: txtDatepPublished.value,
    };
    return bookObj;
  };

  const clearFomatFields = function () {
    txtTitle.value = "";
    txtISBN.value = "";
    txtOverdueFee.value = "";
    txtPublisher.value = "";
    txtDatepPublished.value = "";
  };

  const addNewBook = async function (event) {
    event.preventDefault();
    const bookObj = getBookData();
    const response = await fetch(
      "https://elibraryrestapi.herokuapp.com/elibrary/api/book/add",
      {
        method: "POST",
        body: JSON.stringify(bookObj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log(response.statusText);
      console.log(await response.json());
      clearFomatFields();
    } else {
      console.log(response.statusText);
    }
  };
  txtTitle.focus();
  initAddNewBook();}