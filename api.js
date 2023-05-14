/* Establecer constantes */

/* Url de la cual se desea obtener los datos */

const myUrl = "https://reqres.in/api/users?delay=3";

/* Establecer la api fetch */


const spinner = document.getElementById("spinner");
spinner.style.display= "none";


 const getNames = (myUrl) => {
    spinner.style.display="block";
    fetch(myUrl)
      .then((result) => {
        return result.json();
      })
      .then(data => {
        const userList = document.getElementById('user-list');
        data.data.forEach(user => {
          const userItem = document.createElement('li');
          
          spinner.style.display="none"
          
          // Crear elemento de imagen
          const avatarImg = document.createElement('img');
          avatarImg.src = user.avatar;
          avatarImg.alt = `Avatar of ${user.first_name} ${user.last_name}`;
          avatarImg.style.borderRadius = "100%";
          userItem.appendChild(avatarImg);
  
          const emailField = document.createElement('p');
          emailField.textContent = `Email: ${user.email}`;
          userItem.appendChild(emailField);
  
          userList.appendChild(userItem);

          // Crear elemento de párrafo para el nombre
          const nameField = document.createElement('p');
          nameField.textContent = `Name: ${user.first_name}`;
          userItem.appendChild(nameField);

          // Crear elemento de párrafo para el apellido
          const lastNameField = document.createElement('p');
          lastNameField.textContent = `Last Name: ${user.last_name}`;
          userItem.appendChild(lastNameField);

          //Guardarlo en el local Storage
          const objetoJson= JSON.stringify(data)
          localStorage.setItem("mi objeto", objetoJson);


        })
      })
      .catch((error) => console.log(error));
  };  




  
 
  
