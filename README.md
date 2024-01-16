## Overview

This React app is a conversion of a Figma design into a fully functional web application. Tailwind CSS was employed for styling to ensure responsiveness and an efficient development process.

## Components

1. `Navbar`

- Displays a navigation bar at the top of the page.
- Includes a logo and navigation links.
- Features a login button.

2. `BreadCrumb`

- Represents the breadcrumb navigation for the current page.
- Displays a sequence of navigation links with associated icons.

3. `Heading`

- Renders a heading for the main content section.
- Provides a clear title for the current section.

4. `Title`

- Presents a title bar with options for different study modes.
- Includes stylized text for study categories.

5. `Content`

- Central component for displaying content based on the Figma design.
- Features a gradient-filled box with icons, mathematical expressions, and navigation controls.

6. `FAQ`

- Represents a Frequently Asked Questions section.
- Utilizes the Dropdown component for each FAQ entry.
- Integrates the FaAngleDown icon from the react-icons/fa6 library.

7. `Dropdown`

- A reusable component for creating dropdown-like elements.
- Displays a question or prompt along with a downward-pointing arrow for expansion.
- Customizable with different text content

## Additional Libraries

- `react-icons/fa6` - Utilized for incorporating the FaAngleDown icon in the Dropdown component.

## Usage

1. Install dependencies: npm install
2. Run the app: npm start
