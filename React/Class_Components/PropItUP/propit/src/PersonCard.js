import React , {Component} from "react";


//Class components
 class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age,
      hairColor:this.props.hairColor
    };
  }

  hairChanger = ()=> {
    
    if(this.state.hairColor === "Black"){
      this.setState({hairColor: "Brown"})
    }else if(this.state.hairColor === "Brown"){
      this.setState({hairColor: "Black"})
      
    }
    console.log(this.state.hairColor);
  };

  
  eventHandler = () => {
    const age = this.state.age;
    this.setState({ age: age + 1 });
  };

  


  render() {
    const { firstName, lastName } = this.props;
    return (
      <>
        <h2>
          {lastName}, {firstName}
        </h2>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {this.state.hairColor}</p>
        <button onClick={this.eventHandler}>
          Birthday button for {firstName} {lastName}
        </button>
        <button onClick = {this.hairChanger}>
          Change hair color
        </button>
      </>
    );
  }
} 

// const PersonCard = (props) => {
//   return (
//     <div>
//       <h1>
//         {props.lastName}, {props.firstName}
//       </h1>
//       <p>Age: {props.age}</p>
//       <p>Hair Color: {props.hairColor}</p>
//     </div>
//   );
// };
export default PersonCard;