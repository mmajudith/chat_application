import { ChatEngine } from 'react-chat-engine';
import LoginForm  from './components/LoginForm';
import  ChatFeed  from './components/ChatFeed'

import './App.css'

const App = ()=>{

    if(!localStorage.getItem('username')) return <LoginForm />

    return(

        <ChatEngine 
            height="100vh"
            projectID="00dfaecc-7883-44fb-92e0-84fe9e591e5c"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppState)=> <ChatFeed {...chatAppState}/>}
        />

    )
}

export default App;
