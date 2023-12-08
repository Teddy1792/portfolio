import { connect } from 'react-redux';
import { toggleThemeAction } from '../techLayer/store';

import '../styles/Header.scss';

const Header = ({ isLightMode, toggleTheme }) => {
  // Call toggleTheme when the checkbox is clicked
  const handleCheckboxClick = () => {
    toggleTheme(); // Toggle the global theme state
  };

  return (
    <header>
      {/* Header content */}
      <div className="mode-toggle">
        <input
          type="checkbox"
          id="lightModeToggle"
          checked={!isLightMode} // Inverse of isLightMode for checked attribute
          onChange={handleCheckboxClick} // Call handleCheckboxClick when the checkbox is clicked
        />
        <label htmlFor="lightModeToggle"></label>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isLightMode: state.isLightMode, // Map the Redux state to isLightMode
});

const mapDispatchToProps = (dispatch) => ({
  toggleTheme: () => dispatch(toggleThemeAction()), // Dispatch the Redux action
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
