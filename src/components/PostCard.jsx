import React from 'react'
import styled from 'styled-components'
import profile from "../img/profile.jpg"
import post from "../img/post.jpg"

function PostCard() {
    return (
        <PostCardStyled>
             <div className="usrPic">
                    <img src={profile} alt="" />
            </div>
            <div className="tweet">
                <div className="intro">
                    <div className="head">
                        <div className="bold">John Doe</div>
                        <div className="light">@username | 1m</div>
                    </div>
                    <div className="desc">
                        This is the tweet description.
                    </div>
                </div>
                <img src={post} alt="" />
                <div className="react">
                    <i class="fas fa-reply"></i>
                    <i class="fas fa-retweet"></i>
                    <i class="far fa-heart"></i>
                    <i class="far fa-share-square"></i>
                </div>
            </div>
        </PostCardStyled>
    )
}

export default PostCard

const PostCardStyled = styled.div`
      display: flex;
        padding: 20px;
        border: 1px solid #EFF3F4;
        cursor: pointer;
        &:hover{
            background-color: #F7F7F7;
        }
        .usrPic{
            margin-right: 10px;
            img{
                height: 60px;
                width: 60px;
                border-radius: 50%;
                cursor: pointer;
            }
        }
        .tweet{
            width: calc(100% - 70px);
            .intro{
                .head{
                    display: flex;
                    align-items:flex-end ;
                    margin-bottom: 10px;
                    .bold{
                        font-size: 1.1rem;
                        font-weight: 900;
                        margin-right: 10px;
                    }
                    .light{
                        font-size: 0.9rem;
                        font-weight: lighter;
                    }
                }
            }
            img{
                width: 100%;
                height: auto;
                border-radius: 30px;
                margin-top: 10px;
                margin-bottom: 10px;
            }
            .react{
                font-size: 1.2rem;
                i{
                    margin-right: 60px;
                    color: #677681;
                    &:hover{
                        color: #1D9BF0;
                    }
                }
            }
        }

`