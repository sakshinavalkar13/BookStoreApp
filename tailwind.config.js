/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF", // Ensure 'white' is defined correctly
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        pink: {
          500: '#FF69B4',
          600: '#FF1493',
        }
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  // DaisyUI config to set the default theme to light
  daisyui: {
    themes: [
      {
        light: {
          primary: "#4B5563",  // Adjust primary to suit your design
          secondary: "#FF69B4",
          accent: "#FF1493",
          neutral: "#374151",
          "base-100": "#FFFFFF",  // Set base-100 to white for light backgrounds
          "base-content": "#1F2937",  // Dark color for text on light background
          info: "#3B82F6",
          success: "#10B981",
          warning: "#FBBF24",
          error: "#EF4444",
        },
      },
    ],
    darkTheme: "light", // This forces DaisyUI to use the light theme
  },
}
