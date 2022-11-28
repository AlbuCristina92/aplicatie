import './Sidebar.css';

const Sidenav = () => {
  return (
    <div className="Sidenav">
      <h2 class="w3-bar-item">Craciun 2022 Romania</h2>
      <a href="Start" class="SidebarA">
        Start
      </a>
      <a href="Opinie" class="SidebarA">
        Parerea ta aici!
      </a>
      <a href="Newsletter" class="SidebarA">
        Newsletter
      </a>
      <a href="Contact" class="SidebarA">
        Contact
      </a>
    </div>
  );
};

export default Sidenav;
