import React, {useContext, useState} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {useHistory} from 'react-router-dom';
import {v4 as uuid} from 'uuid';

const AddClient: React.FC = () => {
  const [name, setName] = useState<string>('');

  const {addClient} = useContext(GlobalContext);
  const history = useHistory();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newUser = {
      id: uuid(),
      name,
    };
    addClient(newUser);
    history.push('/');
  };

  const changeName = (e: any) => {
    // console.log('e', e);
    // console.log('typeof e', typeof e);
    setName(e.target.value);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text"
            value={name}
            name={name}
            onChange={changeName}
            placeholder="Digite o nome aqui" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddClient;
