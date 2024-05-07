import { useState } from "react";
import AdminNav from "../../components/AdminNav/AdminNav";
import AdminDashboard from "../../components/AdminDashboard/AdminDashboard";
import ViewAllComponent from "../../components/ViewAllComponent/ViewAllComponent";
import CreateComponent from "../../components/CreateComponent/CreateComponent";
import SettingsComponent from "../../components/SettingsComponent/SettingsComponent";
import "./AdminPage.css";

export default function AdminPage() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState("dashboard");

  function renderComponent() {
    switch (selectedComponent) {
      case "dashboard":
        return <AdminDashboard />;
      case "view-all":
        return <ViewAllComponent />;
      case "create":
        return <CreateComponent />;
      case "settings":
        return <SettingsComponent />;

      default:
        return null;
    }
  }

  return (
    <>
      <AdminNav setSelectedComponent={setSelectedComponent} />
      <div className="admin-main-container">{renderComponent()}</div>
    </>
  );
}
