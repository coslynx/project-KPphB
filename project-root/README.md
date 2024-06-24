# LogViewer App

## Project Overview
The LogViewer App is a web application that displays logs in real-time in a tabular format. It ensures that the latest logs are always added at the end of the table for easy readability.

## UI Features
- Auto-scroll feature that moves the table to the latest log unless the user manually scrolls.
- Auto-scroll reactivates if the user scrolls back to the end of the table.
- Allow users to filter logs based on specific text criteria.
- Implement a search function that jumps to the first occurrence of the search term.
- Include back and forward buttons for easy navigation between search results.

## Highlighting Feature
- Enable users to select text and choose a color for highlighting in the logs.

## Documentation
Extensive documentation on how to use the App will be provided. Instructions will cover installation, usage, and customization of the App. Step-by-step guides for building and deploying the program will be included.

## Enhancements
- Incorporate a feature for exporting logs in different formats.
- Add a dark mode option for users who prefer a different color scheme.
- Include a feature for saving and loading log configurations for quick access.
- Implement a feature that allows users to customize the table layout and columns.

## Tech Stack
### Programming Languages:
- Frontend: JavaScript
- Backend: Node.js

### APIs:
- WebSocket API for real-time data communication.
- Express.js for handling HTTP requests.
- React.js for building the frontend UI components.

### Packages and Libraries:
- WebSocket: latest version
- Express: latest version
- React: latest version
- Material-UI: latest version
- Highlight.js: latest version

## Rationale
- JavaScript chosen for its versatility and compatibility with both frontend and backend development.
- Node.js selected for its event-driven architecture, suitable for real-time applications.
- WebSocket API enables efficient real-time data transmission between server and client.
- Express.js simplifies server-side logic and route handling.
- React.js offers a component-based architecture for building interactive user interfaces.
- Material-UI provides pre-built UI components for a visually appealing design.
- Highlight.js ensures easy text highlighting functionality in the logs.