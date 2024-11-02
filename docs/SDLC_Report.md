# SDLC Report for Task Management Dashboard

## 1. Introduction
### Project Overview
The **Task Management Dashboard** is a lightweight, full-featured web application that allows users to create, update, delete, and organize tasks with customizable tags and filters. The project uses plain JavaScript, HTML, and CSS for the front end, and Node.js with an Express server for the back end. Data is stored in a JSON file, with the potential for MongoDB integration for scalability.

### Objectives
- Develop a responsive task management application.
- Implement a RESTful API for handling CRUD operations.
- Ensure lightweight performance with no framework overhead.
- Integrate a comprehensive QA automation suite to validate the application.

## 2. Planning Phase
### Requirements Gathering
- **User Requirements**:
  - Ability to add, edit, and delete tasks.
  - Organize tasks by customizable tags.
  - Filter tasks based on their status (e.g., pending, completed).
  - Responsive design for mobile and desktop use.
- **Technical Requirements**:
  - Front-end: Vanilla JavaScript, HTML, CSS.
  - Back-end: Node.js and Express.
  - Database: JSON for initial development; MongoDB as an option for scalability.
- **Optional Features**:
  - User authentication for personalized task management.
  - Drag-and-drop functionality for organizing tasks.

### Technologies Chosen
- **Front-End**: Vanilla JavaScript, HTML, CSS.
- **Back-End**: Node.js with Express.
- **Database**: JSON storage with the potential for MongoDB integration.
- **QA Tools**: Playwright for end-to-end and regression testing.

## 3. Design Phase
### Wireframes and Prototypes
*Placeholder: Attach or link to any wireframes or prototypes created for the project.*

### Architecture
- **Client-Server Architecture**:
  - **Client**: Renders the user interface and interacts with the server via HTTP requests.
  - **Server**: Handles API requests, data validation, and CRUD operations.
- **Data Flow**:
  1. User initiates an action on the client side (e.g., adding a task).
  2. The front end sends an HTTP request to the server.
  3. The server processes the request and updates the JSON database.
  4. The response is sent back to the client, and the UI is updated.

### Data Flow Diagrams
*Placeholder: Include or link to data flow diagrams if available.*

## 4. Development Phase
### Key Development Milestones
- **Initial Setup**:
  - Create the project structure and initialize `package.json`.
  - Install required dependencies (e.g., Express, nodemon, Playwright).
- **Front-End Development**:
  - Build the main UI, including forms for adding and editing tasks.
  - Implement JavaScript modules for DOM manipulation and event handling.
- **Back-End Development**:
  - Set up RESTful API endpoints for CRUD operations.
  - Integrate JSON storage with basic validation and error handling.
- **Feature Implementation**:
  - Develop core features: task creation, updating, and deletion.
  - Implement tagging and filtering functionalities.

### Implementation Details
*Placeholder: Add key code implementations or specific development practices used.*

### Challenges and Solutions
*Placeholder: Document major challenges faced during development and how they were resolved.*

## 5. Testing Phase
### Unit Testing
- Test core JavaScript functions to validate data handling logic.

### Integration Testing
- Ensure that front-end interactions correctly trigger API responses and data updates.

### End-to-End Testing
- Use Playwright to automate testing for:
  - Task creation, editing, and deletion.
  - Form validation with empty and invalid fields.
  - Filtering and searching tasks.
  - Visual regression to ensure consistent UI.

### Performance Testing
*Placeholder: Describe how you measured performance and any optimization efforts.*

## 6. Deployment Phase
### Deployment Details
- **Platform**: Deploy the front end on Vercel or Netlify; deploy the Node.js server on Heroku or Render.
- **Version Control**: Use Git for version control and collaboration.

### Version History and Release Management
*Placeholder: Document version releases and key milestones.*

## 7. Maintenance and Updates
### Potential Improvements
- Upgrade from JSON storage to MongoDB for handling larger data sets.
- Add user authentication for personalized user experiences.
- Implement drag-and-drop task organization for enhanced usability.

### Bug Tracking
- Utilize GitHub Issues for logging and managing bugs, feature requests, and updates.
