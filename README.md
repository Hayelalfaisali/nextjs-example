# Next.js Blog Application

A modern, responsive blog application built with Next.js 15 and Tailwind CSS. This project demonstrates best practices in building a modern web application with features like dynamic routing, API integration, and responsive design.

## Features

- 🚀 Built with Next.js 15 and React 19 (RC)
- 💅 Styled with Tailwind CSS
- 📱 Fully responsive design
- ⚡ Client-side navigation
- 🔄 Dynamic post management
- 🎨 Modern, minimalist UI
- 🔍 Active link highlighting
- ⌛ Loading states with skeleton UI

## Demo

[Live Demo](#) (Coming soon)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nextjs-blog.git
cd nextjs-blog
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
nextjs-example/
├── app/
│   ├── components/
│   │   ├── AddPost.js
│   │   └── Navbar.js
│   ├── posts/
│   │   ├── page.js
│   │   └── [postId]/
│   │       ├── page.js
│   │       └── loading.js
│   ├── layout.js
│   └── page.js
├── public/
├── styles/
└── package.json
```

## Features in Detail

### Home Page
- Featured posts display
- Modern, responsive layout
- Call-to-action for viewing all posts

### Posts Page
- Dynamic post fetching from JSONPlaceholder API
- Grid layout with responsive design
- Skeleton loading states
- Add new post functionality
- Hover animations on post cards

### Add Post
- Modal-based post creation
- Form validation
- API integration
- Responsive design
- Modern form styling

### Navigation
- Responsive navbar
- Active link highlighting
- Clean, minimal design

## Technologies Used

- **Next.js 15**: React framework for production
- **React 19 RC**: JavaScript library for UI
- **Tailwind CSS**: Utility-first CSS framework
- **JSONPlaceholder**: Fake REST API for testing
- **Geist Font**: Modern typography

## API Integration

The application uses JSONPlaceholder API for demonstration purposes:
- GET `/posts`: Fetch all posts
- GET `/posts/{id}`: Fetch single post
- POST `/posts`: Create new post

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [Geist Font](https://vercel.com/font)
