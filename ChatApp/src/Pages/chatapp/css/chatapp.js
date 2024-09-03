export const chatAppStyles = {
  container: {
    position: 'relative',
    backgroundColor: '#1e1e1e',
    color: '#f5f5f5',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  conversationBoard: {
    padding: '60px',
    flexGrow: 1,
    overflowY: 'auto',
  },
  conversationPanel: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#2c2c2c',
    padding: '15px 20px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.3)',
  },
  panelItem: {
    margin: '0 8px',
  },
  input: {
    flex: 1,
    padding: '12px',
    borderRadius: '20px',
    border: '1px solid #3c3c3c',
    backgroundColor: '#2c2c2c',
    color: '#f5f5f5',
    outline: 'none',
    fontSize: '1em',
  },
  sidebarToggle: {
    position: 'fixed',
    top: '5px',
    left: '5px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.5em',
    color: '#f5f5f5',
    zIndex: 2000, // Increased zIndex to ensure it's on top of the sidebar
  
  },
};

// export const sidebarStyles = {
//   container: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '300px',
//     height: '100%',
//     backgroundColor: '#2c2c2c',
//     zIndex: 1000, // Sidebar below the toggle button
//     transition: 'transform 0.3s ease-in-out',
//     transform: 'translateX(-100%)',
//     boxShadow: '2px 0 10px rgba(0, 0, 0, 0.3)',
//   },
//   open: {
//     transform: 'translateX(0)',
//   },
//   header: {
//     padding: '1.2em',
//     fontSize: '1.4em',
//     top:20,
//     color: '#f5f5f5',
//     backgroundColor: '#1e1e1e',
//     borderBottom: '1px solid #3c3c3c',
//   },
//   content: {
//     padding: '1.2em',
//     color: '#f5f5f5',
//   },
// };


export const sidebarStyles = {
  // container: {
  //   position: 'fixed',
  //   top: 0,
  //   left: 0,
  //   width: '300px',
  //   height: '100%',
  //   backgroundColor: '#2c2c2c',
  //   zIndex: 1000,
  //   transition: 'transform 0.3s ease-in-out',
  //   transform: 'translateX(-100%)',
  //   boxShadow: '2px 0 10px rgba(0, 0, 0, 0.3)',
  // },
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '300px',
    height: '100%',
    backgroundColor: '#2c2c2c',
    zIndex: 1000, // Ensure this is lower than the sidebarToggle
    transition: 'transform 0.3s ease-in-out',
    transform: 'translateX(-100%)',
    boxShadow: '2px 0 10px rgba(0, 0, 0, 0.3)',
  },
  open: {
    transform: 'translateX(0)',
  },
  header: {
    padding: '1.2em',
    fontSize: '1.4em',
    top: 20,
    color: '#f5f5f5',
    backgroundColor: '#1e1e1e',
    borderBottom: '1px solid #3c3c3c',
  },
  content: {
    padding: '1.2em',
    color: '#f5f5f5',
  },
  userList: {
    display: 'flex',
    flexDirection: 'column',
  },
  userItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    cursor: 'pointer',
    borderBottom: '1px solid #3c3c3c',
  },
  userItemz: {
    display: 'flex',
    alignItems: 'center',
    padding: '30px',
    cursor: 'pointer',
    borderBottom: '1px solid #3c3c3c',
  },
  avatar: {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    marginRight: '10px',
  },

  avatars: {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    marginleft: '20px',
  },
  username: {
    fontSize: '1em',
    color: '#f5f5f5',
  },
};

