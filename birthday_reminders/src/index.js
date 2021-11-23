import React , {useState}from 'react';
import reactDom from 'react-dom';
import { data } from '../src/data';
import './css/style.css';

function App(){
  
  const [people,setPeople] = useState(data);

  const alert_close = ()=>{
    let propmt = document.querySelector('.alert');
    propmt.style.display="none";
  }

  const alert_open = (para)=>{
    console.log('hello world');
    let propmt = document.querySelector('.alert');
    propmt.style.display="block";

    let remove_item = people.filter((person)=>person.id !== para);
    console.log(remove_item);
    setPeople(remove_item);
  }


  return (
    <React.Fragment>

      <div className="container">
        <h1 className="heading">Birthday Reminders</h1>
        <div className="alert">
          <div className="success">
              <p>birthday successfully reminded!! ☺️</p>
              <i class="bi bi-x" onClick={alert_close}></i>
          </div>
        </div>
        <div className="item">
          {
              people.map((person)=>{
                 const data = person;
                 return <>
                    <div className="cards">
                      <Cards key={data.id} {...data}></Cards>
                        <div>
                          <input type="checkbox" name="" id="" onClick={()=>alert_open(data.id)} width="3em" height="3em"/>
                        </div>
                    </div>
                  
                  </>
                  

               })
          }
        </div>
        <button type="button" className="btn" onClick={()=>setPeople([])}>
          Check All
        </button>
      </div>
    </React.Fragment>
  )
}

const Cards = (para)=>{
  
  return(
    <>
      <img className="profile" src={para.img} alt={para.name}></img> 
      <div className="cards-body">
        <p className="name"> {para.name}</p>
        <div className="date">
            <i class="bi bi-calendar-event"></i>
            <p style={{marginLeft:'0.5em'}}>{para.date}</p>
        </div>
      </div>
    </>
  );
}

reactDom.render(<App/>,document.getElementById('root'));