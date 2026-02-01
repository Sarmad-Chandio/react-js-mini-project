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


# UI screen shots:

<img width="601" height="782" alt="image" src="https://github.com/user-attachments/assets/4131f2ff-4c20-48f3-b8ce-7da4aabc3850" />
Filter by Category:
<img width="760" height="823" alt="image" src="https://github.com/user-attachments/assets/03cd2f75-9b1d-44d1-b9aa-28535836c563" />
Validations:
<img width="626" height="799" alt="image" src="https://github.com/user-attachments/assets/0be2e79b-045c-42ff-99f5-09c3e745868c" />

data state (Add/Remove/Filter Applying):
<img width="848" height="968" alt="image" src="https://github.com/user-attachments/assets/0af2ef01-0a2b-4b10-aa68-e5eec8e0170a" />
<img width="642" height="798" alt="image" src="https://github.com/user-attachments/assets/0571cb41-c163-470c-876d-18b8422e8feb" />
<img width="639" height="813" alt="image" src="https://github.com/user-attachments/assets/d4ddb65c-c90f-48d5-b785-fd16cf1d9af1" />
<img width="1823" height="479" alt="image" src="https://github.com/user-attachments/assets/f455532f-2244-4221-b6c5-4df71950d7a9" />







