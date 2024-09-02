// import React from 'react'
// import Header from './Header'
// import { useOutletContext } from 'react-router-dom';
// import Card from './Card';
// import PrivateData from './PrivateData';

// function Feed({props}) {

//   const { userData , colors} = useOutletContext();
//   const AlternateColor =[
//     'bg-red-500',
//     'bg-yellow-400',
//     'bg-green-500'

//   ]

//   const cardData = [
//     {
//       heading : 'heading one',
//       content : 'content one',
//       footer : 'footer one',
//       userImg : 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       userName : 'user one'
//     },{
//       heading : 'heading two',
//       content : 'content two',
//       footer : 'footer two',
//       userImg : 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       userName : 'user two'

//     },{
//       heading : 'heading three',
//       content : 'content three',
//       footer : 'footer three',
//       userImg :'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       userName : 'user three'
//     },{
//       heading : 'heading four',
//       content : 'content four',
//       footer : 'footer four',
//       userImg :'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       userName : 'user four'

//     },{
//       heading : 'heading five',
//       content : 'content five',
//       footer : 'footer five',
//       userImg :'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       userName : 'user five'
//     }
//   ]

 
 

//   return (
//     <>

    

//     <div className={`bg-gray-800 ${colors.text} flex text-center p-4 items-center justify-center gap-5`} >
//       <img className='rounded-md h-10 w-10' src={userData.picture} alt="" />
//       <h2 >Wellcome {userData.name}</h2>
//     </div>

//     <div >
//     {cardData.map((card, index) => {
//       // Calculate the color index based on the current card index
//       // This is useful if AlternateColor array is shorter than cardData array and you want to loop through colors
//       const colorIndex = index % AlternateColor.length;
//       // Get the color from the AlternateColor array
//       const borderColor = AlternateColor[colorIndex];
//       return <Card key={card.id} cardData={card} borderColor={borderColor} />;
//     })}
//     </div>
//     {/* <header className='w-full h-10'>
//       <h2>Wellcome {userData.name}</h2>
//       <h2>userId {userData.id}

//       </h2>
//       <h2>email {userData.email}</h2>
//       <h2>picture {userData.picture}</h2>


//     </header> */}

//     </>
//   )
// }

// export default Feed

import React from 'react'

function Feed() {
  return (
    <div>Feed</div>
  )
}

export default Feed