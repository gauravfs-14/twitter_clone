import React from 'react'
import styled from 'styled-components'
import profile from "../img/profile.jpg"
import PostCard from './PostCard'


function MainContent() {
    return (
        <MainContentStyled>
            <div className="tweetBox">
                <div className="usrPic">
                    <img src={profile} alt="" />
                </div>
                <div className="tweet">
                <textarea placeholder="What's Happening?"></textarea>
                <div className="buttons">
                    <div className="left">
                        <i class="far fa-image"></i>
                        <i class="far fa-chart-bar"></i>
                        <i class="far fa-smile"></i>
                        <i class="far fa-clock"></i>
                    </div>
                    <button>Tweet</button>
                </div>
                </div>
            </div>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </MainContentStyled>
    )
}

export default MainContent

const MainContentStyled = styled.div`
    width:45vw;
    height: 100vh;
    border: 1px solid #EFF3F4;
    overflow: auto;
    .tweetBox{
        display: flex;
        padding: 20px;
        border: 1px solid #EFF3F4;
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
            width: calc(100% - 80px);
            textarea{
                height: 60px;
                width: 100%;
                border: none;
                outline: none;
                font-size: 1.5rem;
                padding: 10px;
                resize: none;
                margin-bottom: 20px;
            }
            .buttons{
                width: calc(100% - 70px);
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                button{
                    text-align: center;
                    background-color: #1D9BF0;
                    color: #fff;
                    padding: 10px 30px;
                    border-radius: 30px;
                    border: none;
                    outline: none;
                    cursor: pointer;
            &:hover{
                background-color: #1A8CD8;
            }
                }
                .left{
                    font-size: 1.2rem;
                    i{
                        margin-right: 10px;
                        color: #1D9BF0;
                        cursor: pointer;
                    }
                    
                }
                
            }
        }
    }
`