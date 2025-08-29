# superhero-app

## Core features

 - ***Create superhero***
    Add new superhero.

 - ***Edit superhero***
    Update existing superhero details.

 - ***Delete superhero***
    Remove a product or remove all superheroes.

 - ***View superhero list***
    Retrieve a list of superheroes.

 - ***superhero details***
    Get full information about a specific superhero by its ID.

---

## API endpoints examples

| Method      | Path                     | Description                                   |
|-------------|--------------------------|-----------------------------------------------|
| `POST`      | `/api/superheroes`       | Create a new superhero                        |
| `GET`       | `/api/superheroes`       | Get a list of superheroes                     |
| `GET`       | `/api/superheroes/:id`   | Get superhero details                         |
| `DELETE`    | `/api/superheroes/:id`   | Delete a superhero                            |
| `PUT`       | `/api/superheroes/:id`   | Update an existing superhero                  |
| `POST`      | `/api/image/single`      | Add image to public/upload file               |
| `DELETE`    | `/api/image/:filename`   | Delete image from public/upload file          |
| `GET`       | `/uploads/               | Get files                                     |
---

## Usage examples

  **Add a new superhero:**
  ```
  POST /products
  {
    "nickname": "Solar Seraph",
    "real_name": "Isabella Cruz",
    "origin_description": "Астронавт, яка під час місії біля Сонця отримала здатність поглинати й контролювати сонячну енергію.",
    "superpowers": ["сонячні промені", "польоти", "теплова регенерація"],
    "catch_phrase": "Сонце — моє серце, і воно палає.",
    "images": ["solarseraph1.jpg", "solarseraph2.jpg"]
  }
  ```

---

## Run project

  ### Open server file:

    cd server

  ### Install dependencies:

    npm i

  ### Run the project in dev mode:

    npm run start:dev

  ### Build project:
  
    npm run build

  ### Start project (using .prodaction.env):
  
    npm run start

  ### leave server file

    cd ..

  ### Open client file:

    cd client

  ### Install dependencies:

    npm i

  ### Run the project in dev mode:

    npm run start:dev

  ### Build project:
  
    npm run build

  ### Start project:
  
    npm run start
