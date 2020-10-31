import React from 'react';
import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

import INICIAL_STATE from '../utils/inicialState';

import { User, Class, Subjects } from 'user-data';

const socket = io(`${process.env.REACT_APP_API_URL}/inatec/comments`);

interface Props {
    data: {user: User, uClass: Class, subjects: Subjects[]};

  setData: React.Dispatch<React.SetStateAction<{user: User, uClass: Class, subjects: Subjects[]}>>;
  socket: SocketIOClient.Socket;
}

export const AuthContext =  createContext<Props>({} as Props);

const AuthProvider: React.FC = ({children}) => { 
  
  const [ data, setData ] = useLocalStorage('INATEC', INICIAL_STATE.data);

  return (
    <AuthContext.Provider value={{ socket, data, setData }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

