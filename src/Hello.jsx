import './Hello.css';
export default function Hello({name="John",surname="Doe",age=20}){
    return(
    <>
    <img className= "profile" 
    src="Octocat.png"/>
    <h1>Hello {name} {surname} 
        {age}</h1>
    </>
    );
}