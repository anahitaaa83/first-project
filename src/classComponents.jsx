import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
//   نمایش در لحظه اول یا برای درخواست فرستادن به سرور
  componentDidMount(){
    console.log("componentDidmount:کامپوننت روی صفحه آمد");
    

  }
//   هروقت props یا stateتغییر کنه این صدا زده میشه 
componentDidUpdate(prevstate,prevprops){
console.log("change props");

}
// وقتی میخاد از domخارج شه
componentWillUnmount(){
    console.log();
    
}

  render() {
    return (
      <div>
        <Welcome name="Anahita" />   {/* استفاده از کامپوننت Welcome */}
        <h1>Count: {this.state.count}</h1>
        {/* دکمه برای افزایش */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase
        </button>
      </div>
    );
  }
}

export default Counter;
