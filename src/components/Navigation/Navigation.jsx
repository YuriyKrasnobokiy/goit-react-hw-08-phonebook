import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

// return (
//   <nav>
//     <NavLink to="/">Home</NavLink>
//     {isLoggedIn && (
//       <>
//         <NavLink to="/contacts">Contacts</NavLink>
//         <button type="button" onClick={() => dispatch(logout())}>
//           Logout
//         </button>
//       </>
//     )}
//   </nav>
// );
// };
