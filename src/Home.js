import React, { useState } from "react";
import styled from "styled-components"

import { useHistory} from "react-router-dom"
import { Link } from "react-router-dom";




const MainBox = styled.div`
    width: 350px;
    height: 100vh;
    border: 1px solid gray;
    margin: auto;
    border-radius: 10px;
`
const Title = styled.h1`
    text-align: center;
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
const ClickBox = styled.div`
    width: 0px; 
    height: 0px; 
    border-top: 13px solid transparent;
    border-bottom: 13px solid transparent; 
    border-left:13px solid purple;
    margin-left: 10px;
    &:hover{
        cursor: pointer;
    }

`

const AverBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    color:blue;
`

const ResetBox = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
`

const ResetBtn = styled.button`
    padding: 20px 30px;
    background-color: blueviolet;
    color:white;
    border-radius: 10px;
    &:hover{
        font-size: 18px;
        cursor: pointer;
    }
`

const Home = () => {
    const history = useHistory();

    let randomSum = 0;
    const days = ["일","월","화","수","목","금","토"] 
    const randomWeek = days.map((value, index) =>{
        const random = Math.floor((Math.random() *5 ) +1 );
        randomSum += random;
        return{
            day : value,
            score : random,
        };
    });
    // console.log(randomSum);
    // console.log(randomWeek);

    const scoreAverage = randomSum;
    const [score, setScore] = useState(scoreAverage);
    
    console.log(score)
    
    return(
        <div>
            <MainBox>
            <Title>My Week</Title>
            <hr/>
            {randomWeek.map((value, index) => {
                return(
                    <DayBox key={index}>
                        <p>{value.day}</p>
                        {Array.from({length:5},(i, n)=>{
                            return(
                               <Circle key={n} style={{backgroundColor: value.score > n? "gold" : "gray"}}/>
                            )
                        })} 
                        {/* <Link to={"/detail/" + value.day}><ClickBox></ClickBox></Link> */}
                        <ClickBox onClick={ () =>{history.push("/detail/" + value.day)}}></ClickBox>
                    </DayBox>
                )
            })}
            <AverBox>
                Average Rate
                <p>{(score/7).toFixed(1)}</p>
            </AverBox>
            <ResetBox>
                <ResetBtn onClick={()=>{setScore(0)}}>Reset</ResetBtn>
            </ResetBox>
            
            </MainBox>
        </div>
    )
}

export default Home;