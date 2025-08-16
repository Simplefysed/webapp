# Simplefysed - Software Company Website

A modern, responsive website built with Next.js 15, TypeScript, and Tailwind CSS for a software company specializing in custom web applications, agentic solutions, and digital process automation.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all device sizes
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **TypeScript**: Full type safety throughout the application
- **Animations**: Smooth scroll animations using Framer Motion
- **Contact Form**: Interactive contact form with validation

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment Ready**: Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd simplefysed-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css         # Global styles and Tailwind imports
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Homepage
├── components/
│   ├── Navigation.tsx      # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services showcase
│   ├── About.tsx           # About section
│   ├── Process.tsx         # Development process
│   ├── Testimonials.tsx    # Client testimonials
│   ├── CTA.tsx             # Contact form and CTA
│   └── Footer.tsx          # Footer component
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

- **Primary**: Blue color scheme for main branding
- **Secondary**: Gray color scheme for text and backgrounds

### Content

All content can be easily modified in the respective component files:

- Company information in `Hero.tsx` and `About.tsx`
- Services details in `Services.tsx`
- Contact information in `Footer.tsx` and `CTA.tsx`

### Animations

Animations are handled by Framer Motion and can be customized in each component file.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Other Platforms

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Performance Features

- Server-side rendering (SSR)
- Automatic code splitting
- Image optimization
- Font optimization
- CSS optimization

## SEO Features

- Semantic HTML structure
- Meta tags configuration
- Open Graph tags
- Structured data ready

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email info@simplefysed.com or create an issue in the repository.
