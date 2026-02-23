function loadUsers() {

fetch("https://jsonplaceholder.typicode.com/users")

.then(response => response.json())

.then(data => {

let container = document.getElementById("userContainer");
container.innerHTML = "";

data.forEach(user => {

container.innerHTML += `
<div class="card">
<h3>${user.name}</h3>
<p>Email: ${user.email}</p>
<p>City: ${user.address.city}</p>
</div>
`;

});

})

.catch(error => {
alert("Error fetching data. Check internet.");
});

}