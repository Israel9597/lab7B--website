"use strict";

const processEmpData = function () {
  fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((result) => displayEmployees(result));
};

const displayEmployees = function (empData) {
  const emp1PicUrl = empData.results[0].picture.medium;
  document.getElementById("emp1Pic").src = emp1PicUrl;

  const emp1FullName =
    empData.results[0].name.first + " " + empData.results[0].name.last;
  document.getElementById("emp-name1").innerText = emp1FullName;

  const emp1Phone = empData.results[0].phone;
  document.getElementById("emp-phone1").innerText = "phone:" + emp1Phone;

  const emp1Email = empData.results[0].email;
  document.getElementById("emp-email1").innerText = emp1Email;

  const emp2PicUrl = empData.results[1].picture.medium;
  document.getElementById("emp2Pic").src = emp2PicUrl;

  const emp2FullName =
    empData.results[1].name.first + " " + empData.results[1].name.last;
  document.getElementById("emp-name2").innerText = emp2FullName;

  const emp2Phone = empData.results[1].phone;
  document.getElementById("emp-phone2").innerText = "phone:" + emp2Phone;

  const emp2Email = empData.results[1].email;
  document.getElementById("emp-email2").innerText = emp2Email;

  const emp3PicUrl = empData.results[2].picture.medium;
  document.getElementById("emp3Pic").src = emp3PicUrl;

  const emp3FullName =
    empData.results[2].name.first + " " + empData.results[2].name.last;
  document.getElementById("emp-name3").innerText = emp3FullName;

  const emp3Phone = empData.results[2].phone;
  document.getElementById("emp-phone3").innerText = "phone:" + emp3Phone;

  const emp3Email = empData.results[2].email;
  document.getElementById("emp-email3").innerText = emp3Email;

  const emp4PicUrl = empData.results[3].picture.medium;
  document.getElementById("emp4Pic").src = emp4PicUrl;

  const emp4FullName =
    empData.results[3].name.first + " " + empData.results[3].name.last;
  document.getElementById("emp-name4").innerText = emp4FullName;

  const emp4Phone = empData.results[3].phone;
  document.getElementById("emp-phone4").innerText = "phone:" + emp4Phone;

  const emp4Email = empData.results[3].email;
  document.getElementById("emp-email4").innerText = emp4Email;

  const emp5PicUrl = empData.results[4].picture.medium;
  document.getElementById("emp5Pic").src = emp5PicUrl;

  const emp5FullName =
    empData.results[4].name.first + " " + empData.results[4].name.last;
  document.getElementById("emp-name5").innerText = emp5FullName;

  const emp5Phone = empData.results[4].phone;
  document.getElementById("emp-phone5").innerText = "phone:" + emp5Phone;

  const emp5Email = empData.results[4].email;
  document.getElementById("emp-email5").innerText = emp5Email;
};
const refBtn = document.getElementById("refBtn");
refBtn.onclick = function () {
  processEmpData();
};

processEmpData();
