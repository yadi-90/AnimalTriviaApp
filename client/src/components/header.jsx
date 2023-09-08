const Header = (props) => {

    let message;
    if (props.user) {
      message = `Welcome to the AnimalKnow Game, ${props.user}!`;
    } else {
      message = `Want to test your animal knowledge? Enter your name to start!`;
    }
    
    return (
      <div className={"textHeader"}>
        <h3>{message}</h3>
      </div>
    );
  };
  
  export default Header;