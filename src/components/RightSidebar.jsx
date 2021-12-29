import React from 'react'
import styled from 'styled-components'

function RightSidebar() {
    return (
        <RightSidebarStyled>
            <div className="search">
                <i class="fas fa-search"></i>
                <input type="search" name="" id="" placeholder="Search Twitter"/>
            </div>
            <div className="trends">
                <div className="head">
                    <div className="title">
                        Trends For You
                    </div>
                    <i class="fas fa-cog"></i>
                </div>
                <div className="item">
                    <div className="one">
                        Topic
                    </div>
                    <div className="two">#hashtag</div>
                    <div className="three">1.5k Tweets</div>
                </div>
                <div className="item">
                    <div className="one">
                        Topic
                    </div>
                    <div className="two">#hashtag</div>
                    <div className="three">1.5k Tweets</div>
                </div>
                <div className="item">
                    <div className="one">
                        Topic
                    </div>
                    <div className="two">#hashtag</div>
                    <div className="three">1.5k Tweets</div>
                </div>
                <div className="item">
                    <div className="one">
                        Topic
                    </div>
                    <div className="two">#hashtag</div>
                    <div className="three">1.5k Tweets</div>
                </div>
                <div className="item">
                    <div className="one">
                        Topic
                    </div>
                    <div className="two">#hashtag</div>
                    <div className="three">1.5k Tweets</div>
                </div>
            </div>
        </RightSidebarStyled>
    )
}

export default RightSidebar

const RightSidebarStyled = styled.div`
    height: 100vh;
    width: 25vw;
    padding-right: 7%;
    padding-left: 1%;
    padding-top: 10px;
    .search{
        width: calc(25vw - 8%);
        background-color: #EFF3F4;
        display: flex;
        align-items: center;
        padding: 5px 20px;
        border-radius: 50px;
        margin-bottom: 10px;
        i{
            color: #536471;
        }
        input{
            border: none;
            outline: none;
            background-color: transparent;
            font-size: 1.1rem;
            padding: 5px;
            margin-left: 5px;
        }
    }
    .trends{
        background-color: #F7F9F9;
        border-radius: 20px;
        width: calc(25vw - 8%);
        .head{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
        .title{
            font-size: 1.3rem;
        }
    }
    .item{
        padding:10px 20px;
        &:hover{
            background-color: #EFF1F1;
        }
        .one, .three{
            color: #77858F;
            font-size: 0.8rem;
        }
    }
    }


`