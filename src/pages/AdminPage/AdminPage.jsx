import { useState } from "react";
import "./AdminPage.css";

export default function AdminPage() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <>
      <aside className="nav-left-container">
        <div className="admin-top-container">
          <h3>Admin</h3>
          <hr />
        </div>
        <div className="admin-mid-container">
          <ul>
            <li>View All</li>
            <li>Create</li>
            <li>Settings</li>
          </ul>
        </div>
        <div className="admin-bottom-container">
          <hr />
        </div>
      </aside>
    </>
  );
}
