# NovaCrust

A modern payment form application that enables cryptocurrency-to-cash conversions and related financial transactions. Built with React, TypeScript, and Vite for a fast and responsive user experience.

## Overview

NovaCrust is a web application that provides a user-friendly interface for cryptocurrency payment transactions. The application features:

- **Crypto to Cash**: Convert cryptocurrency to cash with support for multiple payment methods and currencies
- **Cash to Crypto**: Email subscription for upcoming cash-to-cryptocurrency conversion feature
- **Crypto to Fiat Loan**: Placeholder for future loan functionality

The application supports multiple wallet integrations (Metamask, Rainbow, WalletConnect) and various cryptocurrencies (ETH, USDT-CELO, USDT-TRON, USDT-BNB).

## Tech Stack

### Core Technologies
- **React** 19.2.0 - UI library
- **TypeScript** ~5.9.3 - Type safety
- **Vite** 7.2.4 - Build tool and dev server

### UI & Styling
- **Tailwind CSS** 4.1.18 - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
  - `@radix-ui/react-tabs` 1.1.13
  - `@radix-ui/react-select` 2.2.6
  - `@radix-ui/react-dropdown-menu` 2.1.16
- **Lucide React** 0.561.0 - Icon library
- **React Icons** 5.5.0 - Additional icons

### Form Management & Validation
- **Formik** 2.4.9 - Form state management
- **Yup** 1.7.1 - Schema validation

### Utilities
- **clsx** 2.1.1 - Conditional class names
- **tailwind-merge** 3.4.0 - Merge Tailwind classes
- **class-variance-authority** 0.7.1 - Component variants

### Development Tools
- **ESLint** 9.39.1 - Code linting
- **TypeScript ESLint** 8.46.4 - TypeScript-specific linting rules

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **pnpm** (package manager) - Install globally with `npm install -g pnpm`

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd novacrust
```

### 2. Install Dependencies

Using pnpm (recommended):

```bash
pnpm install
```

Alternatively, if you prefer npm or yarn:

```bash
npm install
# or
yarn install
```

### 3. Environment Variables

Currently, the application does not require any environment variables. All configuration is handled within the application code.

If you need to add environment variables in the future:
- Create a `.env` file in the root directory
- Add your variables following the format: `VITE_<VARIABLE_NAME>=value`
- Access them in code using `import.meta.env.VITE_<VARIABLE_NAME>`

### 4. Development Server

Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173` (or the next available port if 5173 is in use).

### 5. Build for Production

Create an optimized production build:

```bash
pnpm build
```

The build output will be in the `dist` directory.

### 6. Preview Production Build

Preview the production build locally:

```bash
pnpm preview
```

### 7. Linting

Run ESLint to check for code quality issues:

```bash
pnpm lint
```

## Project Structure

```
novacrust/
├── public/
│   └── assets/
│       └── images/          # SVG icons for wallets and currencies
├── src/
│   ├── modules/
│   │   ├── core/            # Shared components and utilities
│   │   │   ├── components/
│   │   │   │   ├── forms/   # Reusable form components
│   │   │   │   └── ui/      # UI primitives (tabs, select, dropdown)
│   │   │   └── lib/         # Utility functions
│   │   └── payments/        # Payment-related components
│   │       ├── components/  # Payment form components
│   │       ├── data.ts      # Payment options and currency data
│   │       └── validation.ts # Form validation schemas
│   ├── App.tsx              # Main application component
│   ├── App.css              # Application styles
│   ├── index.css            # Global styles
│   └── main.tsx             # Application entry point
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## Features

### Crypto to Cash
- Input fields for payment and receive amounts
- Currency selection dropdowns (ETH, USDT-CELO, USDT-TRON, USDT-BNB)
- Payment method selection (Metamask, Rainbow, WalletConnect, Others)
- Form validation with real-time error messages
- Responsive design

### Cash to Crypto
- Email subscription form for feature notifications
- Email validation
- Coming soon placeholder

### Crypto to Fiat Loan
- Tab placeholder for future implementation

## Assumptions & Trade-offs

### Assumptions

1. **Package Manager**: The project uses `pnpm` as the primary package manager (evidenced by `pnpm-lock.yaml`). While npm/yarn will work, pnpm is recommended for consistency.

2. **Browser Support**: The application assumes modern browser support for ES6+ features, CSS Grid, and Flexbox.

3. **No Backend Integration**: The current implementation is frontend-only. Form submissions are logged to the console and use mock async operations. No actual API calls are made.

4. **Static Assets**: All wallet and currency icons are stored as SVG files in the `public/assets/images` directory and are expected to be available at build time.

5. **Development Port**: Vite defaults to port 5173, but will automatically use the next available port if 5173 is occupied.

6. **TypeScript Strictness**: The project uses TypeScript with standard configuration. Path aliases (`@/*`) are configured for cleaner imports.

### Trade-offs

1. **No Environment Configuration**: Currently, there's no environment variable setup. This simplifies initial setup but may require refactoring if backend integration or API keys are needed.

2. **Mock Form Submissions**: Form submissions use `setTimeout` to simulate async operations. This allows for UI development without backend integration but requires implementation of actual API calls for production.

3. **Incomplete Features**: 
   - "Cash to Crypto" is a placeholder with email subscription only
   - "Crypto to Fiat Loan" tab has no implementation
   - These are intentional placeholders for future development

4. **No State Management Library**: The application uses React's built-in state management and Formik for form state. For larger applications, a global state management solution (Redux, Zustand, etc.) might be beneficial.

5. **No Testing Setup**: The project doesn't include testing frameworks (Jest, Vitest, React Testing Library). This speeds up initial development but may require adding tests for production readiness.

6. **No Error Boundaries**: The application doesn't include React Error Boundaries. Adding them would improve error handling and user experience.

7. **Hardcoded Currency Data**: Currency and payment options are hardcoded in `data.ts`. For a production application, this data might be better served from an API or configuration service.

## Deployment

### Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure build settings:
   - Build Command: `pnpm build`
   - Output Directory: `dist`
   - Install Command: `pnpm install`
4. Deploy

### Netlify

1. Push your code to GitHub
2. Create a new site in Netlify and connect your repository
3. Configure build settings:
   - Build command: `pnpm build`
   - Publish directory: `dist`
4. Deploy

### Other Platforms

Any static hosting service that supports Node.js build environments can host this application. Ensure the platform:
- Supports pnpm (or configure it to use npm/yarn)
- Can run the build command
- Serves the `dist` directory as static files

## Known Limitations

1. **No Real Payment Processing**: The application is a UI prototype and doesn't integrate with actual payment processors or blockchain networks.

2. **No Wallet Connection**: Wallet options (Metamask, Rainbow, WalletConnect) are UI-only and don't actually connect to wallets.

3. **No Currency Conversion Logic**: Amount conversions are not calculated. The form accepts user input but doesn't perform real-time conversion calculations.

4. **No Backend Validation**: All validation is client-side only. Server-side validation would be required for production.

5. **No User Authentication**: The application doesn't include user authentication or session management.

## Future Enhancements

- Implement actual wallet connection functionality
- Add real-time currency conversion rates
- Integrate with payment processing APIs
- Add backend API integration
- Implement the "Crypto to Fiat Loan" feature
- Add comprehensive error handling and error boundaries
- Include unit and integration tests
- Add internationalization (i18n) support
- Implement responsive design improvements for mobile devices

## License

[Specify your license here]

## Contributing

[Add contribution guidelines if applicable]
