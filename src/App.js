import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
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
import SavingsTransactionSummary from "./pages/savingsAccount/SavingsTransactionSummary";
import CurrentTransactionSummary from "./pages/currentAccount/CurrentTransactionSummary";
import Beneficiaries from "./pages/beneficiaries/Beneficiaries";
import CreateBeneficiary from "./pages/beneficiaries/CreateBeneficiary";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route index path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-savings" element={<CreateSavingsAccount />} />
          <Route path="/create-current" element={<CreateCurrentAccount />} />
          <Route path="/create-fixed" element={<CreateFixedAccount />} />
          <Route
            path="/create-recurring"
            element={<CreateRecurringAccount />}
          />
          <Route
            path="/current-transactions"
            element={<CurrentTransactions />}
          />
          <Route
            path="/savings-transactions"
            element={<SavingsTransactions />}
          />
          <Route path="/fixed-transactions" element={<FixedTransactions />} />
          <Route
            path="/recurring-transactions"
            element={<RecurringTransactions />}
          />
          <Route path="/current-transfer" element={<CurrentTransfer />} />
          <Route path="/savings-transfer" element={<SavingsTransfer />} />
          <Route
            path="/current-transaction-summary"
            element={<CurrentTransactionSummary />}
          />
          <Route
            path="/savings-transaction-summary"
            element={<SavingsTransactionSummary />}
          />
          <Route path="/beneficiaries" element={<Beneficiaries />} />
          <Route
            path="/beneficiaries/create-beneficiary"
            element={<CreateBeneficiary />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
