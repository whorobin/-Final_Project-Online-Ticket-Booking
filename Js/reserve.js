const countryList = [
  "Dhaka",
  "Airport",
  "B Baria",
  "Chattagong",
  "Rajshahi",
  "Rangpur",
  "Thakurgan",
  "Panchagarh",
  "Sirajganj",
  "Khulna",
  "Faridpur",
];
document.querySelector("#from").addEventListener("input", (e) => {
  const inputField = e.target.value;
  const countryOtion = document.getElementById("fromList");
  const searchList = countryList.filter((item) =>
    item.toLowerCase().includes(inputField.toLowerCase())
  );
  countryOtion.innerHTML = "";
  searchList.forEach((item) => {
    const option = document.createElement("option");
    option.innerText = item;
    countryOtion.appendChild(option);
  });
});
document.querySelector("#to").addEventListener("input", (e) => {
  const inputField = e.target.value;
  const countryOtion = document.getElementById("toList");
  const searchList = countryList.filter((item) =>
    item.toLowerCase().includes(inputField.toLowerCase())
  );
  countryOtion.innerHTML = "";
  searchList.forEach((item) => {
    const option = document.createElement("option");
    option.innerText = item;
    countryOtion.appendChild(option);
  });
});

// get input value
const getInputValue = (id) => {
  const value = document.getElementById(id).value;
  return value;
};

const handleSearchTrain = async () => {
  const locationFrom = getInputValue("from");
  const checkingFromValid = countryList.includes(locationFrom);
  if (!checkingFromValid) {
    alert("select from");
    return;
  }
  const locationTo = getInputValue("to");
  const checkingToValid = countryList.includes(locationTo);
  if (!checkingToValid) {
    alert("select from");
    return;
  }
  const selectedDate = getInputValue("date");
  console.log("selectedDate :", selectedDate);
  const selectedDateValid = selectedDate ? true : false;
  if (!selectedDateValid) {
    alert("select date");
    return;
  }
  const selectedClass = getInputValue("class");
  const selectedClassValid = selectedClass != "Choose a class" ? true : false;
  if (!selectedClassValid) {
    alert("select class");
    return;
  }

  const selectedTime = getInputValue("time");
  console.log("selected time ", selectedTime);
  const selectedTimeValid = selectedTime ? true : false;
  if (!selectedTimeValid) {
    alert("select time");
    return;
  }
  var pageUrl =
    "/book.html" +
    "?" +
    "from=" +
    locationFrom +
    "&" +
    "to=" +
    locationTo +
    "&" +
    "date=" +
    selectedDate +
    "&" +
    "class=" +
    selectedClass +
    "&" +
    "time=" +
    selectedTime;
  window.history.pushState("", "", pageUrl);

  location.reload();
};
const getUserInformation = () => {
  const userInfo = localStorage.getItem("user");
  const user = JSON.parse(userInfo);
  console.log("user :", user);
  if (!user) {
    window.history.pushState("", "", "/login.html");
    location.reload();
  }
};
getUserInformation();


