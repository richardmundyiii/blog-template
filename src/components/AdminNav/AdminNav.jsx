export default function AdminNav({ setSelectedComponent }) {
  return (
    <>
      <aside className="nav-left-container">
        <div className="admin-top-container">
          <h3>Admin</h3>
          <hr />
        </div>
        <div className="admin-mid-container">
          <ul>
            <li onClick={() => setSelectedComponent("view-all")}>View All</li>
            <li onClick={() => setSelectedComponent("create")}>Create</li>
            <li onClick={() => setSelectedComponent("settings")}>Settings</li>
          </ul>
        </div>
        <div className="admin-bottom-container">
          <hr />
        </div>
      </aside>
    </>
  );
}
