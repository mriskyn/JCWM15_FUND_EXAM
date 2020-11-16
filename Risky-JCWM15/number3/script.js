function showUsers(index = null) {
  let table = document.getElementById("users");
  let tbody = table.getElementsByTagName("tbody")[0];

  let tr = "";
  dataUsers.forEach((user, i) => {
    if (i === index) {
      tr += `
                <tr>
                    <td>
                        #
                    </td>
                    <td>
                        <input id="name_edited" type="text" value="${
                          user.username
                        }">
                    </td>
                    <td>
                        <input id="email_edited" type="text" value="${
                          user.email
                        }">
                    </td>
                    <td>
                        <select id="role_edited">
                            <option value="user" ${
                              user.role === "user" ? "selected" : null
                            }>user</option>    
                            <option value="admin" ${
                              user.role === "admin" ? "selected" : null
                            }>admin</option>    
                        </select>
                    </td>
                    <td>
                        <button onclick=saveEditUser(${user.id})>SAVE</button>
                        <button onclick=cancelEditUser()>CANCEL</button>
                    </td>
                </tr>
            `;
    } else {
      tr += `
                  <tr>
                      <td>${i + 1}</td>
                      <td>${user.username}</td>
                      <td>${user.email}</td>
                      <td>${user.role}</td>
                      <td>
                          <button onclick="editUser(${i})">EDIT</button>    
                          <button onclick="deleteUser(${i})">DELETE</button>    
                      </td>
                  </tr>
              `;
    }
  });

  tbody.innerHTML = tr;
}

function submitUser(e) {
  e.preventDefault();

  const addUser = {
    id: dataUsers[dataUsers.length - 1].id + 1,
    username: document.getElementById("add_username").value,
    email: document.getElementById("add_email").value,
    role: document.getElementById("add_role").value,
  };

  if (!addUser.username || !addUser.email) {
    alert("Input Still Empty!");
  } else {
    dataUsers = [...dataUsers, addUser];
    showUsers();
  }
}

function editUser(index) {
  showUsers(index);
}

function deleteUser(index) {
  dataUsers.splice(index, 1);
  showUsers();
}

function cancelEditUser() {
  showUsers();
}

function saveEditUser(id) {
  id = Number(id);
  const editedUser = {
    id: id,
    username: document.getElementById("name_edited").value,
    email: document.getElementById("email_edited").value,
    role: document.getElementById("role_edited").value,
  };

  dataUsers = dataUsers.map((user) => (user.id === id ? editedUser : user));

  showUsers();
}

showUsers();
