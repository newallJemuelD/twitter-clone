import React from 'react';
import './Post.css';
import { Avatar} from '@material-ui/core';
import { VerifiedUser } from '@material-ui/icons';

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
                        <span>
                        <VerifiedUser className="post-badge" />
                        </span>
                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p>I challenge you to build a twitter clone with react</p>
                </div>
            </div>
        </div>
    </div>
}

export default Post
