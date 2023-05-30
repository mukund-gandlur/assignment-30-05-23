
# Assignment

This is a ticket management application.


Pre-requisites:

    1. Nodejs installed.
    2. .env file with the env variables.


Instructions to run

    1. Run yarn install command after the repository is cloned.
    2. Run yarn run dev to run the application.


Other information:

    1. Connects to the postgres DB mentioned in the .env file.
    2. A default userId, and a few cinemas are already available on DB.

## Usage/Examples

```javascript
Application runs on http://localhost:8000/
```

To run view all the Cinemas

```javascript
Get Request on : http://localhost:8000/api/cinema
```


To create a new Cinema

```javascript
Post Request on : http://localhost:8000/api/cinema

Payload: 
{
    "numberOfSeats":30,
    
    "name": "<Cinema Name>",
    "pricePerTicket": 100    
}
```


To purchase a single ticket

```javascript
Post Request on : http://localhost:8000/api/ticket/single

Payload: 
{
    "showId":"2c50e224-c1f2-4584-87d4-d03e61196602",
    "seatId":"a10",
    "userId": "078faa6a-c015-4ecf-8296-b6abb3f75a22"
}
```

To purchase a couple ticket

```javascript
Post Request on : http://localhost:8000/api/ticket/couple

Payload: 
{
    "showId":"2c50e224-c1f2-4584-87d4-d03e61196602",
    "userId": "078faa6a-c015-4ecf-8296-b6abb3f75a22"
}
```


