import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Select from './components/Select.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      options : [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ],
    }
  }

  // getData(currentValue) {
  //   axios.get('/data').then(response => {
  //     console.log(response.data);
  //   })
  // }

  render () {
    const {options} = this.state;
    return (
      <div>
        <Select options={options} searchable={true}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));