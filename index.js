const containerDiv = document.getElementById("container");

function displayUserInformation(userInfo) {
    containerDiv.innerHTML = `<div class="box">
        <p>First Name: ${userInfo.firstName}</p>
        <p>Last Name: ${userInfo.lastName}</p>
        <p>Country: ${userInfo.country}</p>
        <p>Phone Number: ${userInfo.phoneNumber}</p>
        <p>State: ${userInfo.state}</p>
        <p>City: ${userInfo.city}</p>
        <p>Village: ${userInfo.village}</p>
    </div>`;
}

if (localStorage.getItem("userInformation")) {
    const storedUserInformation = JSON.parse(localStorage.getItem("userInformation"));
    displayUserInformation(storedUserInformation);
} else {
    const firstName = prompt("Enter your first name");
    const lastName = prompt("Enter your last name");
    const country = prompt("Enter your country");
    const phoneNumber = prompt("Enter your phone number");
    const state = prompt("Enter your state");
    const city = prompt("Enter your city");
    const village = prompt("Enter your village");

    const userInformation = {
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        city,
        village,
    };

    localStorage.setItem("userInformation", JSON.stringify(userInformation));
    displayUserInformation(userInformation);
}
