import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import promotion from '../statics/promotion.jpg';

const Home = ({ socket }) => {
  const [input, setInput] = useState({
    username: '',
    roomId: '',
  });
  const [error, setError] = useState();
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.username !== '' && input.roomId !== '') {
      socket.emit('joinRoom', input);
      socket.on('joined', (data) => {
        data.roomId
          ? history.push(`/chat/${data.roomId}/${data.username}`)
          : setError(data);
      });
    } else {
      alert('Username & RoomId not be empty');
    }
  };

  return (
    <div className='flex justify-center h-screen pt-20 pb-36 bg-orange'>
      <form
        onSubmit={onSubmit}
        className='flex flex-col justify-between w-11/12 max-w-md'
      >
        <div className='flex flex-col space-y-4'>
          <label for='bank'>Chọn Ngân Hàng</label>
          <select id='bank' className='bg-tint p-3 rounded-md'>
            <option value='ACB'>ACB - Ngân Hàng TMCP Á Châu</option>
            <option value='VCB'>VCB - Ngân Hàng TMCP Ngoại Thương</option>
            <option value='TECH'>
              Techcombank - Ngân Hàng TMCP Kỹ thương Việt Nam
            </option>
            <option value='select' selected>
              --Chọn Ngân Hàng--
            </option>
          </select>
          <label for='bank'>Tên đăng nhập Internet Banking</label>
          <input
            type='text'
            placeholder='Username'
            name='username'
            className='bg-tint p-3 rounded-md'
            onChange={handleChange}
          />
          <label for='bank'>Mật Khẩu</label>
          <input
            type='text'
            placeholder='RoomID'
            name='roomId'
            className='bg-tint p-3 rounded-md'
            onChange={handleChange}
            disabled
            value='Nguyên-Banking'
          />
          <img width={200} src={promotion} alt='promotion' />
          {error && <p>{error}</p>}
        </div>
        <button type='submit' className='bg-box text-white p-3 rounded-full'>
          Đăng Nhập
        </button>
      </form>
    </div>
  );
};

export default Home;
