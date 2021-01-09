import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Head({ displayMenu, setDisplayMenu }) {
  const toggleMenu = () => {
    setDisplayMenu(!displayMenu);
  };
  return (
    <div className="Head">
      <AppBar position="static">
        <Toolbar>
          <div>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div>
            <h1>Demo</h1>
          </div>
          <div>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <AccountCircleIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Head;
