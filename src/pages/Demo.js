import React from 'react';
import style from './Demo.module.scss';

class Demo extends React.Component{

  componentDidMount() {
    console.log(style);
  }

  render() {
    return (
      <div className={style.Demo}>
        Hello World
      </div>
    );
  }
}

export default Demo;