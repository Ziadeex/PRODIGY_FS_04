// export const chatMessageStyles = {
//     messageContainer: {
//       display: 'flex',
//       alignItems: 'center',  // Ensure vertical alignment
//       marginBottom: '15px',
//     },
//     reversed: {
//       flexDirection: 'row-reverse',
//     },
//     person: {
//       display: 'flex',
//       flexDirection: 'column',  // Stack nickname and avatar vertically
//       alignItems: 'center',  // Center-align the content
//       marginRight: '15px',
//     },
//     avatar: {
//       borderRadius: '50%',
//       overflow: 'hidden',
//       width: '45px',
//       height: '45px',
//       border: '2px solid #3c3c3c',
//       marginBottom: '5px',  // Add space between avatar and nickname
//     },
//     nickname: {
//       color: '#f5f5f5',
//       fontWeight: '600',
//       fontSize: '0.8em',  // Smaller font size for nickname
//       alignSelf: 'flex-start',  // Align nickname to the top-left of the message
//       marginBottom: '3px',  // Ensure it's close to the top of the bubble
//     },
//     context: {
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',  // Center the message vertically
//     },
//     bubble: {
//       backgroundColor: '#3c3c3c',
//       padding: '12px 15px',
//       borderRadius: '15px',
//       color: '#f5f5f5',
//       marginBottom: '8px',
//       maxWidth: '450px',
//       boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
//     },
//     options: {
//       display: 'flex',
//       alignItems: 'center',
//       marginLeft: 'auto',
//     },
//     button: {
//       background: 'none',
//       border: 'none',
//       cursor: 'pointer',
//       marginLeft: '15px',
//       color: '#f5f5f5',
//     },
//   };


export const chatMessageStyles = {
  messageContainer: {
    display: 'flex',
    alignItems: 'center',  // Ensure vertical alignment
    marginBottom: '15px',
  },
  reversed: {
    flexDirection: 'row-reverse',
  },
  person: {
    display: 'flex',
    flexDirection: 'column',  // Stack nickname and avatar vertically
    alignItems: 'center',  // Center-align the content
    marginRight: '15px',
  },
  avatar: {
    borderRadius: '50%',
    overflow: 'hidden',
    width: '45px',
    height: '45px',
    border: '2px solid #3c3c3c',
    marginBottom: '5px',  // Add space between avatar and nickname
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2em',
    color: '#f5f5f5',
    backgroundColor: '#3c3c3c', // Add a background color for the placeholder
  },
  avatarPlaceholder: {
    backgroundColor: '#3c3c3c',  // Adjust the color as needed
  },
  nickname: {
    color: '#f5f5f5',
    fontWeight: '600',
    fontSize: '0.8em',  // Smaller font size for nickname
    alignSelf: 'flex-start',  // Align nickname to the top-left of the message
    marginBottom: '3px',  // Ensure it's close to the top of the bubble
  },
  context: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',  // Center the message vertically
  },
  bubble: {
    backgroundColor: '#3c3c3c',
    padding: '12px 15px',
    borderRadius: '15px',
    color: '#f5f5f5',
    marginBottom: '8px',
    maxWidth: '450px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
  },
  options: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '15px',
    color: '#f5f5f5',
  },
};
  