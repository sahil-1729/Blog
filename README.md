# Blog
The Blog App is a web application that allows users to create, delete, and access blogs. It provides a user-friendly interface for managing blog content and includes features such as user authentication, blog likes, and token-based login. The app is built using React for the frontend, MongoDB and Mongoose for the database, Node.js and Express for the server, and Cypress for end-to-end testing.
# Features
* User authentication: Users are required to log in before accessing the blog functionality.
* Token-based authentication: A token is generated upon successful login and expires after 1 hour, ensuring secure access to the app. Also user is logged in, if the page is reloaded.
* Blog creation: Users can create new blogs by providing the title, URL, author, and link as parameters.
* Blog deletion: Users can delete their own blogs.
* Blog sorting: Blogs are displayed in order of likes, with the most popular blogs at the top.
* Blog likes: Users can like blogs to show appreciation for their content.
* Notification system: Users receive notifications when a blog is created or deleted.

# Tech Stack
The Blog App is built using the following technologies:
* Frontend: React
* Database: MongoDB with Mongoose
* Server: Node.js with Express
* Testing: Cypress

# Installation
To run the Blog App locally, follow these steps:

1. Clone the repository: <br/>
```
git clone https://github.com/sahil-1729/blog-app.git
```
2. Change into the project directory:
```
cd Backend
```
3. Install the dependencies:
```
npm install
```
4. Set up the environment variables:
  * Create a .env file in the root directory and provide the following variables:
```
MONGODB_URI=your_mongodb_uri
MONGODB_TEST=your_mongodb_uri_for_testing
SECRET=any_random_string
```
5. Start the development server:
```
npm run dev
```
Open your web browser and visit http://localhost:3003 to access the Blog App.
# Deployment
The project is deployed on Render
Link : https://blog-sudf.onrender.com/
