# Drive Storage Project

A cloud-based drive storage application built with Next.js, Convex, and Clerk for user authentication. This project allows users to upload, manage, and share files securely.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication with Clerk
- File upload and management
- Real-time data handling with Convex
- Responsive design using Next.js
- Secure file sharing capabilities

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com//nasaomar165/oniDrive.git
   cd drive-storage
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Clerk and Convex API keys.

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

Once the server is running, navigate to `http://localhost:3000` in your browser. You can register or log in using Clerk, and start uploading and managing your files.

## Technologies

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Convex**: A backend service for real-time data handling.
- **Clerk**: A user authentication service for secure login and user management.

## Contributing

Contributions are welcome! To contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/YourFeature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
