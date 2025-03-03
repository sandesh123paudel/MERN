function Hello(){
  let myName="Sandesh Paudel";
  let number=456;
  let fullName=() =>{
    return 'Sandesh Paudel';
  }

  return <p>
    Message No:{number} I am your master {fullName()}
  </p>
}

export default Hello;