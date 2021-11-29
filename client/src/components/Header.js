import { useHistory } from 'react-router-dom';
import logo from '../statics/lazada.png';

const Header = ({ title, socket }) => {
  const history = useHistory();
  const leave = () => {
    history.push('/');
    // renew socket id . Bugs
    window.location.reload();
  };
  return (
    <div className='fixed top-0 left-0 w-screen text-center p-3 z-50 bg-orange'>
      {title ? (
        <div className='flex justify-center items-center'>
          <button className='absolute left-4 text-green-500' onClick={leave}>
            Exit
          </button>
          <h2 className='font-semibold text-3xl'>{title}</h2>
        </div>
      ) : (
        <div className='flex items-center justify-center'>
          <img width={150} src={logo} alt='logo' />
          {/* <h2 className='font-semibold text-3xl'>Join Chatroom</h2> */}
        </div>
      )}
    </div>
  );
};

export default Header;
