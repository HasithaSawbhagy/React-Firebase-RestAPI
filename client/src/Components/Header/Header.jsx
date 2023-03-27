import React from "react";
import Button from "react-bootstrap/Button";
import "./Header.css";
const Header = () => {
  return (
    <div className="btn-grp">
      <Button href="/developer" target="_blank" className="btn" variant="outline-primary">
        Game Developer
      </Button>
      <Button href="/admin" target="_blank" className="btn" variant="primary">
        Admin
      </Button>
      <Button href="/customer" target="_blank" className="btn" variant="outline-primary">
        Customer
      </Button>
    </div>
  );    
};

export default Header;
