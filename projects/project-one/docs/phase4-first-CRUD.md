# Phase 4 – First CRUD Operations (Create & Read)

## Objective

The objective of this phase was to implement the first real data operations in the backend by connecting HTTP requests to persistent storage.

At this stage, the backend transitions from a system health check to a functional API capable of creating and retrieving data from a database.

---

## Data Model

A minimal and generic data model was used to focus on understanding the CRUD workflow rather than business logic.

Each document stored in the database contains:

- `name`: string
- `createdAt`: timestamp

This model is intentionally simple to emphasize infrastructure and data flow concepts.

---

## Backend Responsibilities

The backend is responsible for:

- Receiving HTTP requests
- Parsing request data
- Interacting with the database
- Returning appropriate HTTP responses

All logic is implemented using the Node.js standard library and the MongoDB driver.

---

## Database Structure

The backend connects to a MongoDB database named:

app_db


Within this database, a collection named:

items


is used to store documents.

MongoDB creates the database and collection automatically when the first document is inserted.

---

## Implemented Endpoints

### POST /items

Creates a new document in the database.

- Accepts JSON data in the request body
- Stores the document in MongoDB
- Returns the created object with status `201`

This endpoint demonstrates the "Create" operation.

---

### GET /items

Retrieves all stored documents from the database.

- Queries the `items` collection
- Returns an array of documents with status `200`

This endpoint demonstrates the "Read" operation.

---

## Data Flow Overview

1. Client sends an HTTP request
2. Backend receives and processes the request
3. Backend interacts with MongoDB
4. Database returns the result
5. Backend sends the response to the client

This flow represents a complete request-response cycle with persistence.

---

## Commands Used

```bash
docker-compose up --build
Builds and starts the backend and database services.

curl -X POST http://localhost:3000/items \
  -H "Content-Type: application/json" \
  -d '{"name":"First item"}'
Creates a new item in the database.

curl http://localhost:3000/items
Retrieves all stored items.

Observations and Learnings
MongoDB automatically handles database and collection creation

Data persists across container restarts due to volumes

CRUD operations form the foundation of most backend systems

Clear separation of concerns simplifies system behavior

APIs are built by connecting requests, logic, and storage

Current Limitations
At this phase:

No input validation is implemented

Error handling is minimal

No update or delete operations exist

No authentication or authorization is present

These limitations are expected and will be addressed incrementally.

Conclusion
This phase introduces real data handling to the backend system.

By implementing basic Create and Read operations, the backend now functions as a minimal but complete API backed by persistent storage.

This establishes a solid foundation for future improvements and additional features.
