/* Establecer constantes */

/* Url de la cual se desea obtener los datos */

const myUrl = "https://reqres.in/api/users?delay=3";

/* Establecer la api fetch */


const spinner = document.getElementById("spinner");
spinner.style.display = "none";

const getNames = () => {
  spinner.style.display = "block";
  const cachedData = localStorage.getItem("mi objeto");

  if (cachedData) {
    const parsedData = JSON.parse(cachedData);
    const expirationTime = parsedData.expirationTime;

    // Verificar si los datos han expirado
    if (expirationTime && expirationTime > Date.now()) {
      renderUserList(parsedData.data);
      spinner.style.display = "none";
      return;
    } else {
      localStorage.removeItem("mi objeto");
    }
  }

  // Si los datos han expirado o no existen, realizar la solicitud fetch
  fetchUsers();
};

const renderUserList = (users) => {
  const userList = document.getElementById('user-list');
  userList.innerHTML = '';

  users.forEach(user => {
    const userItem = document.createElement('li');
    spinner.style.display = "none";

    // Crear elemento de imagen
    const avatarImg = document.createElement('img');
    avatarImg.src = user.avatar;
    avatarImg.alt = `Avatar of ${user.first_name} ${user.last_name}`;
    avatarImg.style.borderRadius = "100%";
    userItem.appendChild(avatarImg);

    // Crear elemento de párrafo para el email
    const emailField = document.createElement('p');
    emailField.textContent = `Email: ${user.email}`;
    userItem.appendChild(emailField);

    // Crear elemento de párrafo para el nombre
    const nameField = document.createElement('p');
    nameField.textContent = `Name: ${user.first_name}`;
    userItem.appendChild(nameField);

    // Crear elemento de párrafo para el apellido
    const lastNameField = document.createElement('p');
    lastNameField.textContent = `Last Name: ${user.last_name}`;
    userItem.appendChild(lastNameField);

    userList.appendChild(userItem);
  });
};

const fetchUsers = () => {
  fetch("https://reqres.in/api/users?delay=3")
    .then((result) => result.json())
    .then(data => {
      renderUserList(data.data);

      // Guardar los datos en el Local Storage con tiempo de expiración de 1 minuto
      const expirationTime = Date.now() + 60000;
      const cachedData = {
        expirationTime,
        data: data.data
      };
      localStorage.setItem("mi objeto", JSON.stringify(cachedData));

      spinner.style.display = "none";
    })
    .catch((error) => console.log(error));
};

const fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', getNames);



  
 
  
