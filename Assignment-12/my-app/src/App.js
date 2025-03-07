import Welcome from "./components/welcome";
import DataFetcher from "./components/DataFetcher";
import ForceUpdateExample from "./components/ForceUpdate";
import ComparisonTable from "./components/ComparisonTable";
import ParentComponent from "./components/ParentComponent";
import Timer from "./components/Timer";
import Layout from "./components/Layout";
import NameForm from "./components/NameForm";
import UserList from "./components/UserList";

function App() {
  return (
    <div>
      <Welcome />
      <DataFetcher />
      <ForceUpdateExample />
      <ComparisonTable />
      <ParentComponent />
      <Timer />
      <Layout />
      <UserList />
      <NameForm />
    </div>
  );
}
export default App;
