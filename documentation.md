# KSU Registration Admin Application Documentation

## Overview

The KSU Registration Admin Application is a desktop application designed for registration administrators to manage course registration requests. The application prioritizes requests based on specific criteria, displays pending requests, and maintains a history of processed requests.

## Key Features

### 1. Priority-Based Request Management

The application automatically sorts and displays course registration requests according to the following priority levels:

1. **Graduating Senior** - Students in their final semester before graduation
2. **Previous Level Course** - Courses from a previous academic level (repeated/failed)
3. **Prerequisite for Multiple Courses** - Courses that are prerequisites for two or more other courses
4. **Prerequisite for Graduation Project** - Courses required for the graduation project
5. **Reducing Schedule Gaps** - Requests that would reduce gaps in a student's schedule
6. **Special Medical Cases** - Students with documented medical conditions
7. **Same Academic Level** - Courses at the student's current academic level
8. **Below Minimum Credits** - Students with fewer than the required minimum credit hours
9. **Low Credit Hours** - Students with a low total of completed credit hours

### 2. Dashboard

The dashboard provides an overview of the registration system status:

- Total number of pending requests
- Number of high-priority requests
- Number of requests processed today
- Current approval rate
- Quick access to the top 5 highest priority requests

### 3. Pending Requests View

The pending requests view displays registration requests sorted by priority:

- Displays 5 requests per page with pagination
- Color-coded priority indicators
- Filtering options by priority level and request type (add/drop)
- Detailed view of each request with student and course information
- Approve/deny actions with reason documentation

### 4. Request History

The request history view shows previously processed requests:

- Filtering by decision (approved/denied)
- Filtering by decision maker (AI system or administrator)
- Detailed view of each processed request
- Complete record of denial reasons
- Pagination for navigating through the history

## Technical Implementation

### Architecture

The application follows a layered architecture:

1. **User Interface Layer** - HTML, CSS, and JavaScript for the admin interface
2. **Business Logic Layer** - Request prioritization and management logic
3. **Data Layer** - Mock data for demonstration purposes

### Request Prioritization System

The prioritization system evaluates each request based on:

- Student status (graduating, credits completed, medical conditions)
- Course characteristics (level, prerequisite status)
- Academic requirements (minimum credits, graduation prerequisites)

### Request Management Workflow

1. Requests are received and prioritized automatically
2. Administrators can view requests sorted by priority
3. Each request can be approved or denied with a documented reason
4. Processed requests move to the history section
5. The system maintains records of all decisions, including who made them

## User Guide

### Installation

1. Extract the zip file to a local directory
2. Install dependencies:
   ```
   npm install
   ```
3. Start the application:
   ```
   npm start
   ```

### Using the Dashboard

The dashboard is the default view when you open the application. It provides:

- Key statistics about the registration system
- Quick access to high-priority requests
- Navigation to other sections of the application

### Managing Pending Requests

1. Click on "Pending Requests" in the sidebar navigation
2. View requests sorted by priority (highest priority first)
3. Use filters to narrow down the list by priority level or request type
4. Click on a request row to view detailed information
5. Approve or deny requests using the action buttons
6. When denying a request, provide a reason for the denial

### Viewing Request History

1. Click on "Request History" in the sidebar navigation
2. View all processed requests
3. Filter by decision (approved/denied) or decision maker (AI/Administrator)
4. Click on a history item to view complete details
5. Review denial reasons and decision timestamps

## Customization and Extension

### Adding New Priority Criteria

To add new priority criteria:

1. Update the `determinePriority` function in `src/data/mockData.js`
2. Add the new priority level to the priority labels in `preload.js`
3. Update the priority filter options in the UI

### Connecting to a Real Database

The application currently uses mock data. To connect to a real database:

1. Replace the mock data functions in `src/data/mockData.js` with actual database calls
2. Update the request service to handle asynchronous database operations
3. Implement proper error handling for database connections

## Troubleshooting

### Common Issues

- **Application fails to start**: Ensure all dependencies are installed with `npm install`
- **UI elements not displaying correctly**: Check browser console for JavaScript errors
- **Changes not reflecting in the UI**: Refresh the application or restart it

### Support

For additional support or feature requests, please contact the KSU IT department.
