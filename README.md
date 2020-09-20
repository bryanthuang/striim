# striim

## How to use this repository
Install all dependencies

`npm install`

Build Webpack 

`npm run build`

Start Server

`npm start`


## Demo

![](https://i.imgur.com/zbCELuN.gif)


## Usage

User can easily use this component in their app by importing the components `Select.jsx && OptionItem.jsx` into their own app. Then simply importing the Select component into the component they want to use it in and providing an options array with this structure.

``` 
  const options = [
    {
      label: 'Label',  // this is what is shown in the UI
      value: 'value'   // this is what is filtered on when searching
    },
    {
      label: 'Label',
      value: 'value'
    },
  ]