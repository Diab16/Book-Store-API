# Project: BookStoreAPI

# 📁 Collection: Books

## End-point: Get All Books

### Method: GET

> ```
> http://localhost:5000/api/books
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Book By ID

### Method: GET

> ```
> http://localhost:5000/api/books/65047dd40dd34bf0bb4aa15f
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Create New Book

### Method: POST

> ```
> http://localhost:5000/api/books
> ```

### Body (**json**)

```json
{
  "title": "not no",
  "auther": "64d22b2d6f5d7024ae627401",
  "description": "this is the not not book",
  "price": 15,
  "cover": "hard cover"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Book By Id

### Method: PUT

> ```
> http://localhost:5000/api/books/64d67f78795480855f4b5a72
> ```

### Body (**json**)

```json
{
  "description": "this is the third book"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Book By Id

### Method: DELETE

> ```
> http://localhost:5000/api/books/64d6802b795480855f4b5a74
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Authors

## End-point: Get All Authors

### Method: GET

> ```
> http://localhost:5000/api/authors/
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Author By Id

### Method: GET

> ```
> http://localhost:5000/api/authors/64d2a8daa2a14c240f13dbaf
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Create New Author

### Method: POST

> ```
> http://localhost:5000/api/authors/
> ```

### Headers

| Content-Type | Value                                                                                                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| token        | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDQ2ZDY1Yjc2MzEyNDY0MWEwMmZjZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDc4OTA0N30.72pMiQ7nFr3kXV-AH_Ho4soa8JphAHKVJ4weAqrgx-w |

### Headers

| Content-Type | Value                                                                                                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| token        | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDQ2ZWRjYjc2MzEyNDY0MWEwMmZkYyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2OTQ3ODkzNDB9.vFL3ETabG5HfcDslNu2cD9VPl09hPhSgORX8K75r5JU |

### Body (**json**)

```json
{
  "firstName": "Ahmed",
  "lastName": "Morad",
  "nationality": "Egypt"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Author By Id

### Method: PUT

> ```
> http://localhost:5000/api/authors/64d22b2d6f5d7024ae627401
> ```

### Body (**json**)

```json
{
  "firstName": "Mazen",
  "lastName": "Barakat",
  "nationality": "Si3idy"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Author By Id

### Method: DELETE

> ```
> http://localhost:5000/api/authors/64d22ca401e1bca5fb8151f6
> ```

### Body (**json**)

```json
{
  "firstName": "Mazen",
  "lastName": "Mazen",
  "nationality": "Germany"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Auth

## End-point: Register New User

### Method: POST

> ```
> http://localhost:5000/api/auth/register
> ```

### Body (**json**)

```json
{
  "email": "omar@email.com",
  "username": "omar",
  "password": "pasSw@rd"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login User

### Method: POST

> ```
> http://localhost:5000/api/auth/login
> ```

### Body (**json**)

```json
{
  "email": "diab@email.com",
  "password": "pasSw@rd"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Users

## End-point: Update User

### Method: PUT

> ```
> http://localhost:5000/api/users/65046edcb763124641a02fdc
> ```

### Headers

| Content-Type | Value                                                                                                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| token        | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDQ2ZDY1Yjc2MzEyNDY0MWEwMmZjZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDc4OTA0N30.72pMiQ7nFr3kXV-AH_Ho4soa8JphAHKVJ4weAqrgx-w |

### Body (**json**)

```json
{
  "username": "omar",
  "password": "pasSw@rd"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete User By Id

### Method: DELETE

> ```
> http://localhost:5000/api/users/64ff1a1f72ab892020a46134
> ```

### Headers

| Content-Type | Value                                                                                                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| token        | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDQ2ZDY1Yjc2MzEyNDY0MWEwMmZjZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDc4OTA0N30.72pMiQ7nFr3kXV-AH_Ho4soa8JphAHKVJ4weAqrgx-w |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get User By Id

### Method: GET

> ```
> http://localhost:5000/api/users/65046edcb763124641a02fdc
> ```

### Headers

| Content-Type | Value                                                                                                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| token        | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDQ2ZWRjYjc2MzEyNDY0MWEwMmZkYyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2OTQ3ODkzNDB9.vFL3ETabG5HfcDslNu2cD9VPl09hPhSgORX8K75r5JU |

### Headers

| Content-Type | Value                                                                                                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| token        | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDQ2ZDY1Yjc2MzEyNDY0MWEwMmZjZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDc4OTA0N30.72pMiQ7nFr3kXV-AH_Ho4soa8JphAHKVJ4weAqrgx-w |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get All Users

### Method: GET

> ```
> http://localhost:5000/api/users/
> ```

### Headers

| Content-Type | Value                                                                                                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| token        | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDQ2ZDY1Yjc2MzEyNDY0MWEwMmZjZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDc4OTA0N30.72pMiQ7nFr3kXV-AH_Ho4soa8JphAHKVJ4weAqrgx-w |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
