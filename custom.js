document.addEventListener("DOMContentLoaded", function () {
  // Load existing user details from the API using the GET method
  const data = axios.get("https://crudcrud.com/api/adc55410ca5b43deba1cff98d0638f43/appointmentData")
    .then(response => {
     // console.log(response);

      const existingUsers = response.data;
      existingUsers.forEach(user => {
        addUserToList(user);
      });
    })
    .catch(error => console.error('Error fetching existing users:', error));
     console.log(data);
});
  

function handleFormSubmit(event) {
  event.preventDefault();

  // Clear form fields
  document.getElementById('username').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
}

// Function to add user to the list
function addUserToList(user) {
  // Create li element
  const li = document.createElement('li');

  // Create text node with user details
  const textNode = document.createTextNode(
    `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`
  );

  // Create delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = function () {
    // Remove li element from the screen and local storage
    li.remove();
    // removeUserFromLocalStorage(user);
  };

  // Create edit button
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.onclick = function () {
    // Populate form fields with existing values
    document.getElementById('username').value = user.username;
    document.getElementById('email').value = user.email;
    document.getElementById('phone').value = user.phone;

    // Remove user details from the screen and local storage
    li.remove();
    // removeUserFromLocalStorage(user);
  };

  // Append text node, delete button, and edit button to li
  li.appendChild(textNode);
  li.appendChild(deleteButton);
  li.appendChild(editButton);

  // Append li to the user list
  document.getElementById('userList').appendChild(li);
}  
