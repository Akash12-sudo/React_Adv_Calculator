
import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Buttons from './Buttons';
import { evaluate } from 'mathjs';

const App = () => {

  const [calc, setCalc] = useState(0);
  const [Exp, setExp] = useState();
  const [topItem, setTopItem] = useState([]);
  const [calcItem, setCalcItem] = useState([]);




  const Click9 = () => {

    setTopItem((oldItem) => {

      return [9, ...oldItem];

    })

    setCalcItem((oldCalcItem) => {

      return [9, ...oldCalcItem];
    })
  }


  const Click8 = () => {

    setTopItem((oldItem) => {

      return [8, ...oldItem];

    })

    setCalcItem((oldCalcItem) => {

      return [8, ...oldCalcItem];
    })
  }



  const Click7 = () => {

    setTopItem((oldItem) => {

      return [7, ...oldItem];

    })

    setCalcItem((oldCalcItem) => {

      return [7, ...oldCalcItem];
    })

  }
  const Click6 = () => {

    setTopItem((oldItem) => {

      return [6, ...oldItem];

    })

    setCalcItem((oldCalcItem) => {

      return [6, ...oldCalcItem];
    })

  }
  const Click5 = () => {

    setTopItem((oldItem) => {

      return [5, ...oldItem];

    })

    setCalcItem((oldCalcItem) => {

      return [5, ...oldCalcItem];
    })

  }

  const Click4 = () => {

    setTopItem((oldItem) => {

      return [4, ...oldItem];

    })

    setCalcItem((oldCalcItem) => {

      return [4, ...oldCalcItem];
    })

  }

  const Click3 = () => {

    setTopItem((oldItem) => {

      return [3, ...oldItem];

    })

    setCalcItem((oldCalcItem) => {

      return [3, ...oldCalcItem];
    })

  }

  const Click2 = () => {

    setTopItem((oldItem) => {

      return [2, ...oldItem];

    })

    setCalcItem((oldCalcItem) => {

      return [2, ...oldCalcItem];
    })

  }

  const Click1 = () => {

    setTopItem((oldItem) => {

      return [1, ...oldItem];

    })

    setCalcItem((oldCalcItem) => {

      return [1, ...oldCalcItem];
    })

  }

  const Click0 = () => {

    setTopItem((oldItem) => {

      return [0, ...oldItem];

    })

    setCalcItem((oldCalcItem) => {

      return [0, ...oldCalcItem];
    })

  }


  const Clickdot = () => {
    setTopItem((oldItem) => {

      return ['.', ...oldItem];

    })

    setCalcItem((oldCalcItem) => {

      return ['.', ...oldCalcItem];
    })

  }

  const Add = () => {

    setTopItem((oldItem) => {

      return ['+', ...oldItem];

    })

    setCalcItem((oldCalcItem) => {

      return ['+', ...oldCalcItem];
    })

  }

  const Minus = () => {

    setTopItem((oldItem) => {

      return ['-', ...oldItem];

    })

    setCalcItem((oldCalcItem) => {

      return ['-', ...oldCalcItem];
    })

  }

  const Product = () => {

    setTopItem((oldItem) => {

      return ['*', ...oldItem];

    })

    setCalcItem((oldCalcItem) => {

      return ['*', ...oldCalcItem];
    })

  }

  const Division = () => {

    setTopItem((oldItem) => {

      return ['/', ...oldItem];

    })

    setCalcItem((oldCalcItem) => {

      return ['/', ...oldCalcItem];
    })

  }

  const Equals = () => {

    calcItem.reverse();
    let exp = calcItem.join("");
    let val = evaluate(exp);
    console.log(val);
    setCalcItem((oldCalcItem) => {

      return [val];
    })

    setTopItem((oldItem) => {
      return [val, '=', ...oldItem];
    })

  }



  const Clear = () => {
    setCalcItem([]);
    setTopItem([]);
  }

  return (
    <>
      <div className="calculator">
        {/* <div className="Header1">
          <br />
          <br />
          {topItem.map((itemVal, index) => {
            return <p style={{ display: "inline-block", position: 'inherit', float: "left" }} className="top_para">{itemVal}</p>

          })}
        </div> */}
        <div className="Header2">
          <br /><br /><br /><br />
          {calcItem.map((ItemVal2, index) => {
            return <p style={{ display: 'inline-block', position: "relative", float: "right" }} className="calc_para">{ItemVal2}</p>
          })}
        </div>


        <div className="midDiv">
          <span className="span_top">
            <Buttons onclick={Clear} name='AC' height='12rem' width='29.2rem' Color="secondary"></Buttons>
            <Buttons onclick={Division} name='/' height='12rem' width='14.5rem' Color="default"></Buttons>
            <Buttons onclick={Product} name='X' height='12rem' width='14.5rem' Color="default"></Buttons>
          </span>

          <span className="span_mid1" id="mid_1">
            <Buttons onclick={Click7} name='7' height='12rem' width='14.5rem' Color="default"></Buttons>
            <Buttons onclick={Click8} name='8' height='12rem' width='14.5rem' Color="default"></Buttons>
            <Buttons onclick={Click9} name='9' height='12rem' width='14.5rem' Color="default"></Buttons>
            <Buttons onclick={Minus} name='-' height='12rem' width='14.5rem' Color="default" ml="0.1rem"></Buttons>
          </span>

          <span className="span_mid1" id="mid_2">
            <Buttons onclick={Click4} name='4' height='12rem' width='14.5rem' Color="default"></Buttons>
            <Buttons onclick={Click5} name='5' height='12rem' width='14.5rem' Color="default"></Buttons>
            <Buttons onclick={Click6} name='6' height='12rem' width='14.5rem' Color="default"></Buttons>
            <Buttons onclick={Add} name='+' height='12rem' width='14.5rem' Color="default" ml="0.1rem"></Buttons>
          </span>

          <span className="span_mid1" id="mid_3">
            <Buttons onclick={Click1} name='1' height='12rem' width='14.5rem' Color="default"></Buttons>
            <Buttons onclick={Click2} name='2' height='12rem' width='14.5rem' Color="default"></Buttons>
            <Buttons onclick={Click3} name='3' height='12rem' width='14.5rem' Color="default"></Buttons>
          </span>
          <span className="span_mid1" id="mid_4">
            <Buttons onclick={Click0} name='0' height='12rem' width='29.2rem' Color="default" mt="0.1rem" ml="0.1rem"></Buttons>
            <Buttons onclick={Clickdot} name='.' height='12rem' width='14.5rem' Color="default" mt="0.1rem" ml="0rem"></Buttons>
          </span>
          <Buttons onclick={Equals} Id='equal_btn' name='=' height='24.3rem' width='14.5rem' Color="primary" mt="39rem" ml="44.3rem"></Buttons>
        </div>
      </div>
    </>
  )
};

export default App;