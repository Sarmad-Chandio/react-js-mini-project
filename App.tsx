import { useState } from "react";
import Categories from "./Categories.ts";
import { ExspenseList } from "./expense-tracker/components/ExspenseList.tsx";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter.tsx";
import ExpenseForm from "./expense-tracker/components/ExpenseForm.tsx";

function App() {
  const expensesObject = [
    {
      id: 1,
      description: "Office lunch",
      amount: 1200,
      category: "Food",
    },
    {
      id: 2,
      description: "Internet bill",
      amount: 3500,
      category: "Utilities",
    },
    {
      id: 3,
      description: "Uber ride",
      amount: 800,
      category: "Transport",
    },
    {
      id: 4,
      description: "Stationery",
      amount: 1500,
      category: "Office",
    },
    {
      id: 5,
      description: "Kitchen Items",
      amount: 350,
      category: "Groceries",
    },
  ];

  const [expenses, setExpenses] = useState(expensesObject);
  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses =
    selectedCategory ?
      expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      {/* <Form /> */}
      <div>
        <div className="mb-5">
          <ExpenseForm
            onSubmit={(newExpense) =>
              setExpenses([
                ...expenses,
                { ...newExpense, id: expenses.length + 1 },
              ])
            }
          />
        </div>
        <div className="mb-3">
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </div>
      </div>

      <ExspenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
