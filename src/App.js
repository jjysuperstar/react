import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customer = [
  {
    'id': 1,
    'image': 'http://placeimg.com/64/64/any',
    'name': '장재영',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'http://placeimg.com/64/64/any',
    'name': '오랜징',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 3,
    'image': 'http://placeimg.com/64/64/any',
    'name': '김혁',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  }
]

class App extends Component {
  render(){
    return (
      <div>
        {
          customer.map( c => {
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
            );
          })
        }
      </div>
    );
  }
}

export default App;
