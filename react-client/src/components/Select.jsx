import React from 'react';
import OptionItem from './OptionItem';

export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: "",
      label: ""
    }
  }
  handleClick = () => {
    const {open} = this.state
    this.setState({
      open: !open
    })
  }

  handleOptionClick = (option) => {
    const {open} = this.state;
    this.setState({
      value: option.value,
      label: option.label,
      open: !open
    })
  }
  render() {
    const {open, value, label} = this.state;
    const {options} = this.props;
    return (
      <div className="select-container">
        <div className="select-bar" onClick={this.handleClick}>
          <input className="select-item" placeholder="Select..." value={label} disabled></input>
          <img className="chev" src={open ? 'https://static.thenounproject.com/png/3513276-200.png': 'https://static.thenounproject.com/png/227299-200.png' } />
        </div>
        <div className={`option-items ${open ? '' : 'close'}`}>
          {options.map(option => 
            <OptionItem option={option} handleOptionClick={this.handleOptionClick} key={option.value}/>
          )}
        </div>
      </div>
    );
  }
}
