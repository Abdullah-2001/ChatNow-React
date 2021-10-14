import React, { useState } from 'react';
import './chat.css';
import Searchbar from '../../components/search-bar/search';
import Inputbar from '../../components/input-box/input';
import Activeusers from '../../components/active-users/active';
import Conversations from '../../components/conversations/conversations';
import { MyMesseges } from '../../components/messeges/messeges';
// import { UserMesseges } from '../../components/messeges/messeges';
import { NavLink } from 'react-router-dom';
import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import user4 from '../../assets/user4.jpg';
import user5 from '../../assets/user5.jpg';
import user6 from '../../assets/user6.jpg';
import user7 from '../../assets/user7.jpg';

const ALLMESSAGES = [

    {
        message: 'Hi how are you ? ',
        user_1: {
            _id: '1',
            name: 'William',
            img: user1,
        }
    },

    {
        message: 'I am fine',
        user_2: {
            _id: '2',
            name: 'William',
            img: user1,
        }
    },

    {
        message: 'I am fine',
        user_3: {
            _id: '3',
            name: 'William',
            img: user1,
        }
    },

    {
        message: 'I am fine',
        user_4: {
            _id: '4',
            name: 'William',
            img: user1,
        }
    },

]

const Chat = () => {

    const [messages, setMessages] = useState([]);

    return (

        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 chat_row">
                        <div className="card left-side">
                            <div className="chat-group-container">
                                <p className="chat-head">Chats</p>
                                <p style={{ cursor: "pointer" }}>Create group</p>
                            </div>
                            <div>
                                <Searchbar />
                            </div>
                            <div className="active-users-list">
                                <Activeusers name="William" img={user1} />
                                <Activeusers name="Doris" img={user2} />
                                <Activeusers name="Emily" img={user3} />
                                <Activeusers name="Steve" img={user4} />
                                <Activeusers name="Nathan" img={user5} />
                            </div>
                            <p className="recent-head">Recent</p>
                            <div className="card conversation">
                                <NavLink style={{ textDecoration: 'none' }} activeClassName="active" className="links" to="/chat"><Conversations name="William" img={user1} time="Now" messege="Hello! hi how are you" /></NavLink>
                                <NavLink style={{ textDecoration: 'none' }} activeClassName="active" className="links" to="/chat1"><Conversations name="Doris" img={user2} time="09:40" messege="Sorry i am busy" /></NavLink>
                                <NavLink style={{ textDecoration: 'none' }} activeClassName="active" className="links" to="/chat1"><Conversations name="Emily" img={user3} time="10:00" messege="Typing..." /></NavLink>
                                <NavLink style={{ textDecoration: 'none' }} activeClassName="active" className="links" to="/chat1"><Conversations name="Steve" img={user4} time="12:00" messege="Thanks for give me the advice" /></NavLink>
                                <NavLink style={{ textDecoration: 'none' }} activeClassName="active" className="links" to="/chat1"><Conversations name="Nathan" img={user5} time="05:23" messege="Can we go for dinner ?" /></NavLink>
                                <NavLink style={{ textDecoration: 'none' }} activeClassName="active" className="links" to="/chat1"><Conversations name="Maria" img={user6} time="1:22" messege="I am going for a party" /></NavLink>
                                <NavLink style={{ textDecoration: 'none' }} activeClassName="active" className="links" to="/chat1"><Conversations name="Warner" img={user7} time="Now" messege="Bye good night" /></NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-12 chat_row">

                        <div className="card right-side">

                            <div className="current-chat">

                                <div className="name-messege">

                                    <div className="current_user">
                                        <img className="active-user" src={user1} alt="" />
                                        <span className="current-status"></span>
                                    </div>

                                    <div style={{ marginTop: "-10px" }}>
                                        <p className="name">William</p>
                                        <p className="current-chat-status">Active now</p>
                                    </div>

                                </div>

                                <div className="call-video-icons">
                                    <i className="fas fa-search"></i>
                                    <i className="fas fa-phone"></i>
                                    <i className="fas fa-video"></i>
                                    <i className="fas fa-bars"></i>
                                </div>

                            </div>

                            <div className="card messeges">

                                {ALLMESSAGES.map((v, i) => {
                                    return (
                                        <div key={i}>
                                            <MyMesseges img={user1} messege={v.message} />
                                        </div>
                                    )
                                })}

                            </div>

                            <div className="send-messeges">
                                <Inputbar />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Chat;