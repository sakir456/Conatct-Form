import styles from "./Header.module.css";

const Header = () => {

 
return (
<nav className={`${styles.header} container`}>
  <div className="logo">
       <img src="/images/logo.png" alt="do some coding logo" />
  </div>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav> 
    )
}

export default Header;