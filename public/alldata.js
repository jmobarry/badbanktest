function AllData(){
  const [data,setData] = React.useState('');

  React.useEffect(() => {


    fetch('/account/all')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(JSON.stringify(data));
      });

  }, []);


  return(

    <>
    <h5>All Data in Store</h5>
    {data}    
    </>

  )



}





// function AllData(){
//   const [show,setShow] = React.useState(true);
//   const [adminPin,setAdminPin] = React.useState('');
//   const [header,setHeader] = React.useState('Enter Security Pin')
//   const ctx = React.useContext(UserContext);
 
//   function renData(array){
//         var toextract = array;
//         var s = '';
//         for (let i=0; i < array.users.length; i++){

//           s+=( '[User '+ (i+1) + ' Name: ' +
//             toextract.users[i].name + ' Email:' +
//             '\n ' + 
//             toextract.users[i].email + ' Password:' +
//             '\n ' + 
//             toextract.users[i].password + ' Balance: $' +
//             '\n ' +
//             toextract.users[i].balance + ']'
//           )
//         }
//         return s;
//        }
 
//  function checkPin(){
  
//   if (adminPin == '00001234'){

//     setShow(false);
//     setHeader('User Information');
//   }
//   else{
//     alert('incorrect pin number')
//   }

//  }
 
 
//   return (

    
//     <Card 
//     bgcolor="primary"
//     header= {header}
//     body={







//         show ? (
//         <>

//         Administrator Pin Number<br/>
//         <input type ="number" className="form-control"  id = "pin" placeholder={'****'} value={adminPin}
//         onChange={e =>setAdminPin(e.currentTarget.value)}
//         /><br/>
//         <button type="submit" className = "btn  btn-light" onClick={checkPin}>Login Attempt</button>



//         </>
//         )
        
//         :
        
//         (
//         <>
//            <h1>All Data</h1>
//           {renData(ctx)}

//         </>
//         )
//     }
//     />
//   );

// }
