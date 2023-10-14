import "@/styles/navbar.scss"
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="sidebar"></div>
      <div className="wrapper">
        <div className="logo">Nazrul Hassan</div>
        <div className="socialLinks">
          <div className="link">
            <BsFacebook size={20} />
          </div>
          <div className="link">
            <BsInstagram size={20} />
          </div>
          <div className="link">
            <BsYoutube size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar