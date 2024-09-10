import { useState } from 'react';
import styled from 'styled-components';

function App() {
  const cupcakesArray = [
    "https://i.ibb.co/jMNg3Rd/cupcake1.webp",
    "https://i.ibb.co/1KcgshH/cupcake3.webp",
    "https://i.ibb.co/dDN17Gv/cupcake13.webp",
    "https://i.ibb.co/xjDtRWk/cupcake12.webp",
    "https://i.ibb.co/VpNZvcT/cupcake11.webp",
    "https://i.ibb.co/Xtyz15X/cupcake2.webp",
    "https://i.ibb.co/8ctKCjs/cupcake4.webp",
    "https://i.ibb.co/12RfZKd/cupcake5.webp",
    "https://i.ibb.co/9V9vL4H/cupcake6.webp",
    "https://i.ibb.co/5GQ653W/cupcake7.webp",
    "https://i.ibb.co/c1rRV71/cupcake8.webp",
    "https://i.ibb.co/t8NKtpG/cupcake9.webp",
    "https://i.ibb.co/3BqgckJ/cupcake10.webp"
  ];

  const [cupcakeIndex, setCupcakeIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const changeIdWithEffect = () => {
    if (isChanging) return; 

    setIsChanging(true); 
    let intervalId;
    let count = 0;
    const maxCount = 15; 

    
    intervalId = setInterval(() => {
      setCupcakeIndex((prevIndex) => (prevIndex + 1) % cupcakesArray.length);
      count++;

      if (count >= maxCount) {
        clearInterval(intervalId);

        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * cupcakesArray.length);
        } while (newIndex === cupcakeIndex);

        setCupcakeIndex(newIndex);
        setIsChanging(false);
      }
    }, 100);
  };

  return (
    <Container>
      <h1>Tu Veux Un Cupcake ?</h1>
      <img className="img" src={cupcakesArray[cupcakeIndex]} alt="Cupcake" />
      <button className='btn' onClick={changeIdWithEffect} disabled={isChanging}>
        {isChanging ? "Changement en cours..." : "Changer"}
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem;
  gap: 2rem;

  h1{
    font-family: "Playwrite CU", cursive;
    font-size: 3rem;
    color: purple;
    margin: 0;  
    background-color: pink;
    padding: .5rem;
    border-radius: 8px;
  }

  .img {
    width: 25%;
    border-radius: 14px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }

  .btn {
    font-size: 2rem;
    background-color: pink;
    color: purple;
    border: solid purple 2px;
    border-radius: 50px;
    padding: 1rem;
  }

  .btn:disabled {
    background-color: lightgrey;
    color: darkgrey;
    cursor: not-allowed;
  }

  .btn:hover:not(:disabled) {
    cursor: pointer;
    background-color: purple;
    color: pink;
    transform: scale(1.1);
    transition: transform 250ms ease-in-out;
  }

  @media screen and (max-width: 900px) {

    height: 65vh;

    h1{
      font-size: 1rem;
    }

    .img {
    width: 100%;
  }

  .btn{
    font-size: 1rem;
  }

  }
`;

export default App;
