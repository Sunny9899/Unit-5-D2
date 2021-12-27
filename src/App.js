import './App.css';

function App() {

  const arr1=["Mobile Operating System","Android","Blckberry","iPhone","Windows Phone"];
  const arr2=["Mobile Manufacturers","Samsung","HTC","Micromax","Apple"];

  const style={
    textAlign:"left",
    fontFamily:"Segoe UI",
    fontSize:"14px",
    fontWeight:"400",
  };

  return (
    <div className="App" style={style}>

     <Tilte titl={arr1[0]}/>
      <Small arr={arr1}/> 
     <Tilte titl={arr2[0]}/>
      <Small arr={arr2}/>  
    
     </div>
  );
}

function Tilte({titl}){
  return <h1>{titl}</h1>;
}

function Small({arr}){
  let ars=arr.slice(1);

  return ars.map(e => <li>{e}</li>);
}



export default App;
