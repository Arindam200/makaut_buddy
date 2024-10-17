## Contributing to the Project

Thank you for your interest in contributing to our project! This document provides guidelines and instructions for contributing.

Feel free to contribute to this project by:

- Reporting a bug
- Proposing a feature enhancement
- Adding/Correcting documentation

## Getting Started

1. **Fork the repository**
2. **Clone your fork**

   ```
   git clone https://github.com/'your username'/makaut_buddy
   cd makaut_buddy
   ```

3. **Set up envrionment variables**

   Create a `.env` file(whose format can be seen from `.env.example` file) in the root directory and add the following environment variables:
   
    ```sh
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= YOUR_PUBLISHABLE_KEY
    CLERK_SECRET_KEY= YOUR_CLERK_SECRET_KEY
    NEXT_PUBLIC_API_URL= YOUR_API_URL
    NEXT_PUBLIC_CLOUD_NAME=YOUR_CLOUDINARY_CLOUD_NAME
    NEXT_PUBLIC_CLOUD_PRESET=YOUR_CLOUDINARY_CLOUD_PRESET
    MONGODB_URI=YOUR_MONGODB_CONNECTION_URI
    ```

You can get these keys here: [Clerk](https://clerk.com/), [Cloudinary](https://cloudinary.com/).

5. **Install dependencies**

   ```
   npm install
   ```

## Development Workflow

1. **Create a new branch**

   ```
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**

   - Write clean, maintainable code
   - Follow our coding standards (see below)
   - Update documentation as needed

3. **Start the development server**
   ```
   npm run dev
   ```

## Project Templates
Please use the following templates when contributing to this project to ensure consistency across the documentation:

- [Pull Requests Template](docs\issue_template.md)
- [Issue Template](docs\pull_request_template.md)

## Coding Standards

- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused

## Commit Guidelines

- Use clear, descriptive commit messages
- Begin with a verb in the present tense (e.g., "Add feature" not "Added feature")
- Reference issue numbers when applicable

## Pull Request Process

1. Update the README.md with details of changes if applicable
2. Ensure all tests pass
3. Update documentation if needed
4. Request review from maintainers
5. Merge after approval

## Code Review

- All submissions require review
- We may suggest changes or improvements
- The review process helps maintain code quality

## Questions?

If you have questions, feel free to open an issue or reach out to the maintainers.

Thank you for contributing!
