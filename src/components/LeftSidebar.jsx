import React from 'react'
import styled from 'styled-components'
import profile from "../img/profile.jpg"


function LeftSidebar() {
    return (
        <LeftSidebarStyled>
            <div className="logo">
                <i class="fab fa-twitter"></i>
            </div>
            <div className="buttons">
                <button><i class="fas fa-home"></i>Home</button>
                <button><i class="fas fa-hashtag"></i>Explore</button>
                <button><i class="far fa-bell"></i>Notifications</button>
                <button><i class="far fa-envelope"></i>Message</button>
                <button><i class="far fa-bookmark"></i>Bookmarks</button>
                <button><i class="far fa-list-alt"></i>Lists</button>
                <button><i class="far fa-user"></i>Profile</button>
                <button><i class="fas fa-ellipsis-h"></i>More</button>
                <button className="tweet">Tweet</button>
            </div>
            <div className="profile">
                <img src={profile} alt="" />
                <div>
                    <p>John Doe</p>
                    <p className="usrName">@username</p>
                </div>
                <i class="fas fa-ellipsis-h"></i>
            </div>

        </LeftSidebarStyled>
    )
}

export default LeftSidebar

const LeftSidebarStyled = styled.div`
    height: 100vh;
    width: 25vw;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-left: 7%;
    padding-right: 1%;
    padding-top: 10px;
    .logo{
        font-size: 2rem;
        color: #1D9BF0;
        cursor: pointer;
        border-radius: 50%;
        height: 50px;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
            background-color: #E8F5FD;
        }
        margin-bottom: 10px;
    }
    .buttons{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .tweet{
            text-align: center;
            background-color: #1D9BF0;
            color: #fff;
            padding: 10px 80px;
            &:hover{
                background-color: #1A8CD8;
            }
        }
        button{
            height: 45px;
            border-radius: 30px;
            margin-bottom: 10px;
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            padding: 10px 20px;
            border: none;
            outline: none;
            cursor: pointer;
            background-color: transparent;
            i{
                margin-right: 20px;
            }
            &:hover{
                background-color: #E7E7E8;
            }
        }
    }
    .profile{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        padding: 10px;
        border-radius: 50px;
        cursor: pointer;
        &:hover{
                background-color: #E7E7E8;
            }
        img{
            height: 50px;
            width: 50px;
            border-radius: 50%;
            margin-right: 10px;
        }
        div{
                font-weight: 900;
            .usrName{
                color: #75828D;
                font-weight: normal;
            }
        }
        i{
            margin-left: 50px;
        }
    }
`