import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import { SearchContext } from '../../context/Search';

const Header = () => {
    let {cart} = useContext(CartContext);
    let {search} = useContext(SearchContext);

    return (
      <nav className="nav d-flex justify-content-around align-items-center bg-dark text-light">
        <Link to="/" className='text-decoration-none text-light'>
            <h3>Logo</h3>
        </Link>
        <ul className="d-flex justify-content-around align-items-center w-50 list-unstyled">
          <li className="list-item">
              <Link to="/" className='text-decoration-none text-light'>Home</Link>
          </li>
          <li className="list-item">
              <Link to="/cart" className='text-decoration-none text-light'>Cart</Link>
              <span className='mx-2'>No:{cart.itemsCount}</span>
          </li>
          <li className="list-item">
              <Link to="/favorites" className='text-decoration-none text-light'>Favorites</Link>
          </li>          
          <li className="list-item">
              <Link to="/form" className='text-decoration-none text-light'>Form</Link>
          </li>          
          <li className="list-item">
              <Link to="/formTest" className='text-decoration-none text-light'>FormTest</Link>
          </li>          
          <li className="list-item">
              <Link to="/login" className='text-decoration-none text-light'>Login</Link>
          </li>          
          <li className="list-item">
              <Link to="/register" className='text-decoration-none text-light'>register</Link>
          </li>          
          <li className="list-item">
              <Link to="/calculator" className='text-decoration-none text-light'>Calculator</Link>
          </li>          
          {/* <li className="list-item">
              <Link to="/oldForm" className='text-decoration-none text-light'>OldForm</Link>
          </li>           */}
        </ul>
        <input onChange={search} placeholder='Search....'/>
      </nav>
    );
  };
  export default Header;