# Mockup Assignments

This is a React web application that provides a platform for managing projects. Users can view, filter, and update the status of various projects.

## Demo

Check out the live demo [here](https://mockup-assignments.netlify.app/).

## Features

- View a list of projects with details such as client name, address, installation timeline, and status.
- Filter projects by status (All, Matched, Submitted, Closed, Rejected).
- Update the status of a project (Matched, Submitted, Closed, Rejected).

## File Structure

```
|-- src
    |-- components
        |-- EntireComponent.js
        |-- ProjectListComponent.js
        |-- ProjectListing.js
        |-- TabsComponent.js
    |-- hooks
        |-- useProjectsStore.js
    |-- App.js
|-- public
|-- package.json
|-- ...
```

### `src/components`

- `EntireComponent.js`: The main component that organizes the entire application structure.
- `ProjectListComponent.js`: Component responsible for rendering the list of projects.
- `ProjectListing.js`: Component for displaying individual project details.
- `TabsComponent.js`: Component for rendering the tabs used for filtering projects.

### `src/hooks`

- `useProjectsStore.js`: A custom hook created using Zustand for managing the state of projects.

### `src/App.js`

The entry point of the application where components are imported and rendered.

### `public`

Contains static assets like images, if any.

### `package.json`

Contains project metadata and dependencies.

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server with `npm start`.

## Dependencies

- `@mui/base`: Material-UI core components.
- `@mui/material`: Material-UI components.
- `@mui/system`: Material-UI system utilities.
- `zustand`: State management library for React.

## Contributing

If you'd like to contribute, please fork the repository and create a pull request. Feel free to open an issue if you have any suggestions or find any bugs.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to add or modify any sections to provide additional information about your project. Make sure to replace the placeholders with actual content.
