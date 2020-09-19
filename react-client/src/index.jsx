import React from 'react';
import ReactDOM from 'react-dom';
import Select from './components/Select'

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
  componentDidMount() {
    let options = this.getData();
    this.setState({
      options: options
    })
  }

  getData(currentValue) {
    axios.get('/data').then(response => {
      console.log(response.data);
    })
  }

  render () {
    const {options} = this.state;
    return (
      <div>
        <Select options={options}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));