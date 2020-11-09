import React from 'react';
import './Post.css';
import { Avatar} from '@material-ui/core';
import { ChatBubbleOutline, FavoriteBorder, Repeat, Publish, VerifiedUser } from '@material-ui/icons';

function Post() {
    return <div className="post">
        <div className="post__avatar">
        <Avatar></Avatar>
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        Newall Jemuel {" "}
                        <span className="post__headerSpecial">
                        <VerifiedUser className="post-badge" /> @newallJemuel
                        </span>
                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p>I challenge you to build a twitter clone with react</p>
                </div>
            </div>
            <img src="https://media0.giphy.com/media/3ornjTqcV6IvKTLDuE/giphy.gif" alt=""/>
            <div className="post__footer">
                <ChatBubbleOutline fontSize="small"/>
                <Repeat fontSize="small"/>
                <FavoriteBorder fontSize="small"/>
                <Publish fontSize="small"/>
            </div>
        </div>
    </div>
}

export default Post
