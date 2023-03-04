# React TodoList

This is a simple TodoList app built with React.js that allows you to create, edit, delete, and toggle tasks as completed. The app also stores the tasks in local storage, so if you refresh the page the changes will remain.

The app is deployed on Netlify and you can access it here: _https://beautiful-kataifi-741011.netlify.app/_

## Features
1. Create new tasks
2. Edit existing tasks
3. Delete tasks
4. Toggle tasks as completed
5. Store tasks in local storage


## Technologies
The app was built using the following technologies:

- React.js
- React Hooks (useState, useEffect)
- Bootstrap
- Netlify


## Installation
To run the app locally, follow these steps:

1. Clone the repository to your local machine:

`git clone https://github.com/your-username/react-todolist.git`

2. Install the dependencies:

  `cd react-todolist
  npm install`

3. Start the development server:

  `npm start`

4. Open http://localhost:3000 in your browser to see the app.

## Usage

To use the app, follow these steps:

1. Add a new task by typing it in the input fields on the right and pressing the "Agregar Tarea" button.

2. Edit a task by clicking on the "Editar" button at the bottom of the card and typing again in the inputs what you want to change. Press the "Actualizar tarea" button to save the changes; as well, when you finish the edition Press "Cancelar edicion" button at the top of the form.

3. Toggle a task as completed by clicking on the "Terminar" button next to the task title. 

4. Delete a task by clicking on the "Eliminar" button at the bottom of the task card.

5. The app will automatically save the tasks in local storage, so if you refresh the page the tasks will still be there.


## Deployment

The app is deployed on Netlify, which is a popular hosting service for static websites. To deploy your own version of the app, follow these steps:

1. Fork this repository and clone it to your local machine.

2. Create a new site on Netlify by clicking the "New site from Git" button on the dashboard and connecting your GitHub account.

3. Select the repository and branch you want to deploy (usually "main").

4. Set the build command to "`npm run build`" and the publish directory to "`build`".

5. Click "Deploy site" and wait for Netlify to build and deploy your app.

Once the deployment is complete, you can access your app at the URL provided by Netlify.
That's it! Now you have a fully functional TodoList app built with React.js and deployed on Netlify.
