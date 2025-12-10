# Session 2: Backend Setup & Server Implementation

## Overview

This session focuses on setting up a Node.js/Express server and implementing the data access and authentication layers. The application transitions from static HTML to dynamic page rendering with Handlebars templates.

## Key Files to Create

### Core Modules

- `server.js` - Express server setup
- `shopping-list-web-app.js` - Route handlers (named functions)
- `shopping-list-services.js` - Business logic layer
- `shopping-list-data.js` - Data access module (async with Promise.resolve/reject)
- `users-services.js` - User authentication business logic
- `users-data.js` - Mock user data
- `auth-middleware.js` - HTTP Basic Authentication middleware
- `package.json` - Project dependencies

### Views Directory

Convert HTML files to Handlebars templates:

- `views/home.hbs`
- `views/lists.hbs`
- `views/list-detail.hbs`
- `views/new-list.hbs`
- `views/add-item.hbs`
- `views/error.hbs`

### Public Directory

- `public/style.css` - Bootstrap styling (if needed)

## Objectives

- Set up Node.js/Express server on port 3000
- Implement async data access layer with Promises
- Create user authentication with Basic Auth
- Set up Handlebars view engine
- Implement RESTful routing
- Use named functions for route handlers

## Routes to Implement

- `GET /` - Home page (public)
- `GET /lists` - User's lists (protected)
- `GET /lists/:id` - List detail (protected)
- `POST /lists/create` - Create new list (protected)
- `POST /lists/:id/delete` - Delete list (protected)
- `POST /lists/:id/items/create` - Add item (protected)
- `POST /lists/:id/items/:itemId/toggle` - Toggle item status (protected)
- `POST /lists/:id/items/:itemId/delete` - Delete item (protected)

## Important Concepts

### Data Access Layer (shopping-list-data.js)

- All functions must be async
- Use `Promise.resolve()` for success (NOT `new Promise()`)
- Use `Promise.reject()` for errors
- NO `setTimeout` usage
- Data organized by userId

### Services Layer (shopping-list-services.js)

- Add validation and business logic
- Use `async/await` with data layer
- Handle errors appropriately

### Route Handlers (shopping-list-web-app.js)

- MUST use named functions (NOT arrow functions)
- Examples: `handleGetHome`, `handleGetLists`, `handleCreateList`, etc.
- All use `async/await`
- All apply authentication middleware

### Authentication (auth-middleware.js)

- Parse HTTP Basic Authentication header
- Decode Base64 credentials
- Validate against user database
- Return 401 with WWW-Authenticate header on failure
- Attach user object to `req.user` (without password)

## Testing Checklist

- [ ] Server starts: `npm start`
- [ ] Home page accessible without auth: `http://localhost:3000`
- [ ] Protected pages require Basic Auth
- [ ] Different users see different lists
- [ ] Data layer uses only Promise.resolve/reject
- [ ] No passwords exposed in views or responses
- [ ] All routes use named function handlers
- [ ] Error handling returns proper HTTP status codes

## Next Steps

After Session 3 is complete, you'll have a working backend with:

- Dynamic page rendering
- User authentication
- Data organization by user ID
- Async data access layer ready for database integration

Session 4 will add form submission handling and full CRUD operations.
