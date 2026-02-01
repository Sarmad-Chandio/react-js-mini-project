# React + TypeScript + Vite – Expense Form App
A simple React application to add and validate expenses using React Hook Form and Zod.
It features a type-safe category selection, number validation, and descriptive error messages.

# Technologies Used
React (v18+) – UI library
TypeScript – Static typing for safety
Vite – Fast development server with HMR
React Hook Form – Form state management and validation
Zod – Schema-based form validation
Bootstrap 5 – Styling and layout

# Features
Add expenses with the following fields:
Description – Minimum 3 characters
Amount – Number between 0.01 and 100,000
Category – Select from predefined categories
Form validation powered by Zod
Real-time error messages displayed below each input
Type-safe category handling using as const in TypeScript
Console log of submitted expense data (can be connected to backend)

# Actual folder structure should be like: (on git hub all files are in single package which should not be the case)
src/
 ├─ components/
 │   ├─ ExpenseForm.tsx
 │   └─ ExpenseFilter.tsx
 |   └─ExspenseList.tsx
 ├─ Categories.ts
 └─ App.tsx
 └─index.css
└─main.tsx
