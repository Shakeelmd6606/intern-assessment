This is a simple user management application built with React. It allows you to add, update, delete, and view users. The data is managed locally within the application, and the app uses a simple JSON structure to handle user data. It also checks for duplicate users based on name and email before adding them.

Features
Add User: Add a new user with name, email, and date of birth.
Edit User: Edit an existing user's details.
Delete User: Remove a user from the list.
Duplicate Check: Prevent adding duplicate users based on name or email, with a notification message.
User List: View all users in a list format.
Technologies Used
React: JavaScript library for building user interfaces.
State Management: Local state in React is used to manage the list of users.
CSS: Simple styling for UI components.
Project Structure

/src
  /components
    UserList.jsx      # Main component for managing the user list
    UserForm.jsx      # Form to add or edit a user
    UserItem.jsx      # Component to display each user's information
  data.json          # Local file storing initial user data
  App.jsx             # Root component of the application
  index.jsx           # Entry point of the React application
data.json
This is the local JSON file used to store the user data. The file is initially empty but can be populated with sample data as needed.


[]
App.js
The root component of the application. It renders the UserList component which handles the user management functionality.

import React from 'react';
import UserList from './components/UserList'; // Make sure the path is correct

const App = () => {
  return (
    <div>
      <h1>User Management App</h1>
      <UserList />
    </div>
  );
};

export default App;
UserList.jsx
The component responsible for rendering the list of users, and handling the add, update, and delete operations.

UserForm.jsx
A form used to add or update user details. It also handles input validation and form submission.

UserItem.jsx
Displays an individual user's details and provides buttons to edit or delete the user.

Installation
To run the project locally, follow these steps:

Clone the repository:


git clone https://github.com/Shakeelmd6606/intern-assessment.git
Navigate into the project directory:


cd intern-assessment
Install the required dependencies:


npm install
Start the application:

npm run dev
Open your browser and go to http://localhost:3000 to view the app.

Usage
Add a User: Fill in the name, email, and date of birth in the form and click "Add User". If the user already exists, a notification will be displayed.
Edit a User: Click the "Edit" button next to a user to edit their information. Update the fields and click "Update User".
Delete a User: Click the "Delete" button next to a user to remove them from the list.
View Users: All users will be displayed in a list with their name, email, and date of birth.
Notes
This application does not persist data across sessions. If the page is reloaded, the data will be reset to the initial state in data.json.
The user data is stored and managed locally in the state of the React application.
Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request with your improvements or bug fixes.