# Draft

## Project Brief: Shopping Cart Management (Part I - HTML Pages)

### 1. Objective

The primary goal of this first phase of the project is to build the application's base structure using only HTML. The focus must be on the **correct semantics** of HTML, creating tables for data presentation, and ensuring the **functional interconnection** of all pages.

**Note:** In this phase, there is no need to apply styles (CSS).

### 2. Navigation and Structure Requirements

#### 2.1. Home Page (`index.html`)

* **Function:** The application's entry point.

* **Content:** An informative title and a brief description of the application.

* **Navigation:** Must contain a visible link that leads the user directly to the shopping cart listing page (`carts.html`).

#### 2.2. Shopping Cart List (`carts.html`)

This page serves as the main dashboard for managing the shopping carts.

* **Structure:** Data must be presented in a tabular format, using an HTML table (`<table>`, with `<thead>` and `<tbody>`).

* **Mock Data:** The table must contain at least 3 sample data rows (mock data) to simulate existing shopping carts.

* **Mandatory Columns:**

    * Cart ID

    * Name/Description

    * Total Items (mock)

    * **Actions**

* **Action Links (in the "Actions" Column):** For each row (cart), there must be:

    * An "Edit" link/button that directs to the cart detail page (`cart_detail.html`).

    * A "Delete" link/button (which does not require functionality implementation in this phase).

* **Top Navigation:** A highlighted link at the top of the page for **Create New Cart** (which should point to a simple form page, e.g., `new_cart.html`).

#### 2.3. Cart Detail (`cart_detail.html`)

This page allows the user to view the contents of a specific cart.

* **Identification:** Must have a title that identifies the cart in question (e.g., "Cart Detail: Summer Vacation").

* **Structure:** A second HTML table must be used to list the **Products** contained within that cart.

* **Mock Data:** The table must contain at least 3 sample products (mock data) to simulate the contents.

* **Mandatory Columns (Product Table):**

    * Product (Name)

    * Quantity

    * Unit Price (mock)

    * **Actions**

* **Action Link (in the "Actions" Column):** For each row (product), there must be:

    * A "Remove" link/button (which does not require functionality implementation in this phase).

* **Top Navigation:** A highlighted link at the top of the page for **Add Product** (which should point to a simple form page, e.g., `add_product.html`).
