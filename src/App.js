import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
const customers = [
  {
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name': 'Ju Jinho'
  ,'birthday': '001026'
  ,'gender': 'Male'
  ,'job': 'Student'
  

},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name': 'James'
  ,'birthday': '981021'
  ,'gender': 'Male'
  ,'job': 'professor'
  

},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name': 'Tuan'
  ,'birthday': '960514'
  ,'gender': 'Male'
  ,'job': 'Designer'
  

}

]

class App extends Component {
  render() {
    return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />

          )
        })
      }
      
    </div>
          
    
      );

  }
}

export default App;
