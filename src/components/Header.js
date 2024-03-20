import Logo from '../../logo.png'
export const Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <img src={Logo} width={150} height={100} />
        </div>
        <div className="nav-items">
          <ul className="flex">
            <li>Offers</li>
            <li>Help</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
};