import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Alert from "./components/alert/Alert";
import CreateSavingsAccount from "./pages/savingsAccount/CreateSavingsAccount";
import CreateCurrentAccount from "./pages/currentAccount/CreateCurrentAccount";
import CreateFixedAccount from "./pages/fixedAccount/CreateFixedAccount";
import CreateRecurringAccount from "./pages/recurringAccount/CreateRecurringAccount";
import CurrentTransactions from "./pages/currentAccount/CurrentTransactions";
import SavingsTransactions from "./pages/savingsAccount/SavingsTransactions";
import CurrentTransfer from "./pages/currentAccount/CurrentTransfer";
import SavingsTransfer from "./pages/savingsAccount/SavingsTransfer";
import FixedTransactions from "./pages/fixedAccount/FixedTransactions";
import RecurringTransactions from "./pages/recurringAccount/RecurringTransactions";

function App() {
  return (
    <div className="app">
      {/* <Alert /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* CREATE ROUTES */}
          <Route path="/create-savings" element={<CreateSavingsAccount />} />
          <Route path="/create-current" element={<CreateCurrentAccount />} />
          <Route path="/create-fixed" element={<CreateFixedAccount />} />
          <Route
            path="/create-recurring"
            element={<CreateRecurringAccount />}
          />
          {/* TRANSACTIONS ROUTES */}
          <Route
            path="/current-transactions"
            element={<CurrentTransactions />}
          />
          <Route
            path="/savings-transactions"
            element={<SavingsTransactions />}
          />
          <Route path="/fixed-transactions" element={<FixedTransactions />} />{" "}
          <Route
            path="/recurring-transactions"
            element={<RecurringTransactions />}
          />
          {/* TRANSFER ROUTES */}
          <Route path="/current-transfer" element={<CurrentTransfer />} />
          <Route path="/savings-transfer" element={<SavingsTransfer />} />
        </Routes>
      </BrowserRouter>
      {/* <Login />
      <Home /> */}
    </div>
  );
}

export default App;
