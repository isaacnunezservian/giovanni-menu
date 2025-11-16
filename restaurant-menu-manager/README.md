# Restaurant Menu Manager

This project is a simple application for managing a restaurant menu using Firebase as the backend. It allows business owners to modify menu prices, add new items, and delete items while maintaining current categories.

## Features

1. Modify menu prices.
2. Add new items to the menu.
3. Delete items from the menu.
4. Maintain current categories without adding new ones.

## Project Structure

```
restaurant-menu-manager
├── frontend
│   ├── src
│   │   ├── index.html        # Main HTML document
│   │   ├── styles.css        # Styles for the frontend
│   │   ├── app.js            # JavaScript code for frontend functionality
│   │   └── config.js         # Firebase configuration settings
│   └── package.json          # Frontend npm configuration
├── backend
│   ├── functions
│   │   ├── src
│   │   │   ├── index.ts      # Entry point for Firebase Cloud Functions
│   │   │   ├── controllers
│   │   │   │   └── menuController.ts # Controller for menu operations
│   │   │   └── types
│   │   │       └── index.ts  # TypeScript interfaces
│   │   ├── package.json       # Backend npm configuration
│   │   └── tsconfig.json      # TypeScript configuration
│   └── firebase.json          # Firebase configuration for deployment
├── firestore.rules             # Firestore security rules
├── firestore.indexes.json      # Firestore indexes configuration
└── README.md                   # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd restaurant-menu-manager
   ```

2. **Frontend Setup:**
   - Navigate to the `frontend` directory and install dependencies:
     ```
     cd frontend
     npm install
     ```
   - Update `config.js` with your Firebase project credentials.

3. **Backend Setup:**
   - Navigate to the `backend/functions` directory and install dependencies:
     ```
     cd backend/functions
     npm install
     ```
   - Deploy the Firebase functions:
     ```
     firebase deploy --only functions
     ```

4. **Run the Frontend:**
   - Start the frontend application:
     ```
     npm start
     ```

## Usage

- Access the application through your web browser.
- Use the interface to modify prices, add new menu items, or delete existing items.

## License

This project is licensed under the MIT License.