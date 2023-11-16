Tides Exercise

This is a practice server-side API that provides low and high tide times by location. Data is NOT accurate.

### To Install:

1. Clone this repository.
2. Run `cp .env.sample .env` in the directory
3. Update your `.env` file with the provided PostgreSQL link (recommended) or your own.
5. Run `npm install` to install project dependencies.
6. If you inserted the PostgreSQL I provided in the .env file, please skip to step 9. If you provided your own link, please follow steps 7 and 8
7. Run `npx knex migrate:latest`
8. Run `npx knex seed:run`
9. Run `npm start` to start the server on localhost:5000

Using either Postman or your preferred method you can do the following:
1. Obtain a specific location's data through GET params in the format http://localhost:5000/locations/{state}/{city} (example: http://localhost:5000/locations/maine/saco)
  ![image](https://github.com/amandalynnpond/tides-exercise/assets/115049956/5185bae7-6838-4d06-b313-94b2fe5d6afc)

2. Save a location to a specific user if it has not already been saved via POST to http://localhost:5000/locations/{state}/{city} with body data of a user_id
   ![image](https://github.com/amandalynnpond/tides-exercise/assets/115049956/25e25294-7b07-46c5-ae24-e5185f348900)

3. View all of a users saved locations via GET to http://localhost:5000/users/{user_id}/locations
   ![image](https://github.com/amandalynnpond/tides-exercise/assets/115049956/72e191f5-eea1-4388-a6ca-cd7812a795d7)

At this time, there are two users (with ids 1 and 2). I reccomend if you are to save any locations, to do so with user_id 2, as there are no pre-saved locations for that user. Enjoy and please let me know if you have any questions. :)

Available cities within the database can be found in src/db/seeds/00-locations.json, but the cities and states are also listed below for easy reference:
1. Portland, Maine
2. Portsmouth, New Hampshire (use new_hampshire to accomidate space)
3. Saco, Maine
4. Costa Mesa, California (use costa_mesa to accomidate space)
5. Rye, New Hampshire (use new_hampshire to accomidate space)
6. Nantucket, Massachusetts
