import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import FinanceManage from "./components/financeManage";
import ExpensesList from "./components/expenses-list.component";
import IncomeList from "./components/income-list.component";
import EditExpenses from "./components/edit-expenses.component";
import EditIncome from "./components/edit-income.component";
import CreateExpenses from "./components/create-expenses.component";
import CreateIncome from "./components/create-income.component";
import searchExp from './components/SearchExpenses';
import searchInc from './components/SearchIncome';
import calcExpenses from "./Calculations/calcExpenses";
import calcList from "./Calculations/viewCalc";




function App() {
  return (

    <Router>
    
      <Navbar />
      <br/>
         <Route path='/' exact component={FinanceManage} />
         <Route path="/edit-expenses.component/:id" component={EditExpenses} />
         <Route path="/edit-income.component/:id" component={EditIncome} />
         <Route path="/create-expenses.component" component={CreateExpenses} />
         <Route path="/create-income.component" component={CreateIncome} />
         <Route path="/expenses-list.component" component={ExpensesList} />
         <Route path="/income-list.component" component={IncomeList} />
         <Route path="/Calculations/calcExpenses" component={calcExpenses} />
         <Route path="/SearchExpenses" component={searchExp} />
         <Route path="/SearchIncome" component={searchInc} />
         <Route path="/Calculations/viewCalc" component={calcList} />

    </Router>
  );
}

export default App;
