import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useParams, useHistory} from "react-router-dom"
import styled from "styled-components"; 


const MainBox = styled.div`
    width: 350px;
    height: 100vh;
    border: 1px solid gray;
    margin: auto;
    border-radius: 10px;
`

const DaysBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`
const H1 = styled.h3`
    background-color: orange;
    border-radius:5px;
    color:white;
    margin-right: 10px;
    padding: 5px;
`
const DayBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Circle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 10px;
    padding: 2px;
`
const BtnBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`
const Btn = styled.button`
    padding: 15px 65px;
    background-color: purple;
    color:white;
`

const Detail = (props) => {
    const random = Math.floor((Math.random() *5 ) +1 )
    const [score, setScore] = useState(random)
    const history = useHistory()
    const params = useParams();
    console.log(params.id)
    console.log(score)
    return(
    <>
        <MainBox>
            <DaysBox>
            <H1>{params.id}요일</H1>
            <span>평점 남기기</span> 
            </DaysBox>
            <DayBox>
                {Array.from({length:5},(i,n)=>{
                    return(
                        <Circle style={{backgroundColor:score < n+1 ? "gray" : "gold"}} key={n} onClick={()=>{setScore(n+1)}}/>
                    )
                })}
            </DayBox>
            <BtnBox>
            {/* <Btn><Link to={"/"}>Click</Link></Btn> */}
            <Btn onClick={()=> {history.goBack("/")}}>Click</Btn>
            </BtnBox>
        </MainBox>
    </>
        
    )
}

export default Detail;