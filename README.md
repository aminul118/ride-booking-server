# 🚖 Ride Booking API

A backend API for handling ride booking, user management, authentication, and driver ride requests.

## 📌 Base URL

```
{{PH_TOUR}}
```

---

## 📂 API Endpoints

### 1. 🚗 Ride Booking

#### ➤ Create Booking

- **URL:** `POST /rides/create`
- **Request Body:**

  ```json
  {
    "userId": "688863a38a144f3912d98c91",
    "latitude": "99999",
    "longitude": "999999"
  }
  ```

- **Response:**

  ```json
  {
    "_id": "ride_id",
    "userId": "688863a38a144f3912d98c91",
    "latitude": "99999",
    "longitude": "999999",
    "status": "PENDING",
    "createdAt": "2025-08-02T12:00:00.000Z"
  }
  ```

---

#### ➤ Get Single User Booking

- **URL:** `GET /rides/:userId`
- **Example:**

  ```
  /rides/688863a38a144f3912d98c91
  ```

- **Response:**

  ```json
  {
    "_id": "ride_id",
    "userId": "688863a38a144f3912d98c91",
    "latitude": "99999",
    "longitude": "999999",
    "status": "PENDING"
  }
  ```

---

#### ➤ Delete Booking

- **URL:** `DELETE /rides/:rideId`
- **Example:**

  ```
  /rides/688c6bb0f8b16ccb3113ba4e
  ```

- **Response:**

  ```json
  { "message": "Booking deleted successfully" }
  ```

---

### 2. 👤 User Management

#### ➤ Register User

- **URL:** `POST /user/register`
- **Form Data:**
  - `data` (text):

    ```json
    {
      "name": "Aminul Islam",
      "email": "aminultabedge@gmail.com",
      "password": "Aminsul@118"
    }
    ```

  - `file` (file - optional)

---

#### ➤ Get All Users

- **URL:** `GET /user/all-users`
- **Headers:**

  ```json
  {
    "Authorization": "Bearer <JWT_TOKEN>"
  }
  ```

---

#### ➤ Update User

- **URL:** `PATCH /user/:userId`
- **Headers:**

  ```json
  {
    "Authorization": "Bearer <JWT_TOKEN>"
  }
  ```

- **Form Data:**
  - `data` (text):

    ```json
    {
      "name": "Hyper118",
      "email": "hyper118@gmail.com",
      "password": "Aminul1@118"
    }
    ```

  - `file` (file - optional)

---

### 3. 🔐 Authentication

#### ➤ Login

- **URL:** `POST /auth/login`
- **Request Body:**

  ```json
  {
    "email": "super@gmail.com",
    "password": "12345678"
  }
  ```

---

#### ➤ Logout

- **URL:** `POST /auth/logout`

---

#### ➤ Refresh Token

- **URL:** `POST /auth/refresh-token`

---

#### ➤ Set Password

- **URL:** `POST /auth/set-password`
- **Request Body:**

  ```json
  { "password": "123456@123456" }
  ```

---

#### ➤ Reset Password

- **URL:** `POST /auth/reset-password`

---

#### ➤ Forgot Password

- **URL:** `POST /auth/forgot-password`
- **Request Body:**

  ```json
  { "email": "mr.aminul118@gmail.com" }
  ```

---

#### ➤ Change Password

- **URL:** `POST /auth/change-password`

---

### 4. 🚕 Driver Management

#### ➤ Get All Rides Requests

- **URL:** `GET /drivers`

---

#### ➤ Update Ride Status

- **URL:** `PATCH /drivers/:rideId`
- **Request Body:**

  ```json
  { "status": "Picked Up" }
  ```

---

## 🛡️ Authentication

- Some endpoints require `Authorization` header:

  ```plaintext
  Authorization: Bearer <JWT_TOKEN>
  ```

---

## ⚙️ Environment Variables

| Key       | Description              |
| --------- | ------------------------ |
| `PH_TOUR` | Base URL of the Ride API |

---

## 🧪 Testing

You can use the provided Postman Collection to test all endpoints.
