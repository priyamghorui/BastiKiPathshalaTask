# Volunteer/Intern Registration & Admin Portal API

This is a robust backend API designed to handle volunteer and intern registrations while providing a secure, credential-based admin view of all registered users.

---

## 🚀 Features

* **Volunteer/Intern Registration**: A secure endpoint for new users to register with their details.
* **Admin-Only Access**: A protected endpoint that allows only authenticated administrators to view the list of all registered volunteers.
* **Vercel Hosting**: The API is deployed and managed on the Vercel platform, ensuring reliable and scalable performance.
* **Postman Documentation**: Comprehensive API documentation is available via a Postman collection for easy testing and integration.

---
## 📝 Postman API Documentation
A Postman collection with all API endpoints and example requests is available to help you get started quickly.

View Documentation: https://documenter.getpostman.com/view/27308235/2sB3BAMsfe

The API will now be running on : https://basti-ki-pathshala-task.vercel.app/

----
## 🛠️ Tech Stack

This project is built with the following technologies:

* **Node.js**: A JavaScript runtime for building scalable server-side applications.
* **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
* **[Database]**: (**MongoDB**) The database used for storing user data.
* **[Other relevant libraries]**: (e.g., **Mongoose**)
* **Vercel**: The platform used for hosting and deployment.

---

## 📋 API Endpoints

The API consists of two primary endpoints, both using the **POST** method as required.

### 1. Register a New User

This endpoint allows new volunteers or interns to register by submitting their information.

* **Method**: `POST`
* **URL**: `https://basti-ki-pathshala-task.vercel.app/api/userRegister`
* **Description**: Creates a new user entry in the database.
* **Request Body**: `application/json`

```json
{
    "name": "priyam",
    "age": 19,
    "email": "priyam02@gmail.com",
    "address": "singur",
    "remark": "i can do your job",
    "mobile": 9876543210
}
```
### 2. Fetch Registered User (Admin Only)

This endpoint allows new volunteers or interns to register by submitting their information.

* **Method**: `POST`
* **URL**: `https://basti-ki-pathshala-task.vercel.app/api/fetchRegisteredUserAdmin`
* **Description**: Creates a new user entry in the database.
* **Request Body**: `application/json`

```json
{
    "token":"SDFLKKJELNLEMDSFWWWSDF"
}
```
## ✍️ Author

* **Priyam Ghorui**: https://priyamghorui.vercel.app/

* **Contact**: priyamghorui2004@gmail.com
