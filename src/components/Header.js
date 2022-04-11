import {AppBar, Toolbar, Typography} from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="absolute"
      color="default"
      elevation={0}
      sx={{
        position: 'relative',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      }}
    >
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Friends List
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
export default Header;
