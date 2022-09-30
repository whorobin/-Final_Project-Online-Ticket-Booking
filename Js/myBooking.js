const handleDelete = async (id) => {
  console.log("id :", id);
  const userConfirm = confirm("Delete confirm ?");
  if (userConfirm) {
    try {
      const response = await fetch(`http://localhost:5000/booking/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);

      if (result.deletedCount) {
        alert("deleted successfully");
        location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }
};
const displayData = (data) => {
  // console.log(data);
  const table_container = document.getElementById("table-row");
  data.map((item, idx) => {
    const {
      date,
      name,
      email,
      from,
      to,
      coach,
      seat,
      total_price,
      train_name,
      time,
    } = item;
    table_container.innerHTML += `<tr>
    <th scope="row">${idx + 1}</th>
    <td>${date}</td>
    <td> ${time}</td>
    <td>${name}</td>
    <td>${email}</td>
    <td>${from}</td>
    <td>${to}</td>
    <td>${train_name} <br/> ${item.class}</td>
    <td>${coach}</td>
    <td>${seat}</td>
    <td>${total_price}</td>
    <td><button class="btn-danger" onclick='handleDelete("${
      item._id
    }")'> Delete</button</td>

  </tr>`;
  });
};

const handleShowBooking = async () => {
  const userInfo = JSON.parse(localStorage.getItem("user"));

  try {
    const response = await fetch(
      `http://localhost:5000/mybookings?email=${userInfo.email}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    console.log("result :", result);
    if (result) {
      displayData(result);
    }
  } catch (error) {
    console.log(error);
  }
};

handleShowBooking();


