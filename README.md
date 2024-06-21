# NestJS Blog API Documentation

This API allows you to manage blog posts using basic CRUD operations and supports user login using Google OAuth.

## Base URL

Replace `{base_url}` with your actual base URL. For example, `http://localhost:3000` if running locally.

## Authentication

### Google OAuth Login

- **POST** `/auth/google`

Initiates Google OAuth login flow.

#### Request Body

```json
{
    "idToken": "your_google_id_token"
}

Error Responses
401 Unauthorized: If Google OAuth authentication fails.

```

##### Blog Posts
 -POST/blog: Creates a new blog post. Requires title, content, and author.
 -GET /blog: Retrieves all blog posts.
 -GET /blog/id: Retrieves a single blog post by ID.
 -PATCH /blog/id: Updates a blog post by ID.
 -DELETE /blog/id: Deletes a blog post by ID.

