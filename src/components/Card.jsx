import React from 'react'

function Card(cardData, borderColor) {
    console.log(cardData);
    const cardHeading = cardData.cardData.heading;
    const cardContent = cardData.cardData.content;
    const cardFooter = cardData.cardData.footer;
    const cardUserImg = cardData.cardData.userImg;
    const cardUserName = cardData.cardData.userName;

  return (
    
    <>
    <div class="w-72 mt-5 h-80 mx-auto relative bg-gray-100 rounded-xl shadow-2xl">
  <div class="flex items-center p-3">
    <div class="px-1">
      <span class="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer"></span>
    </div>
    <div class="px-1">
      <span class="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer"></span>
    </div>
    <div class="px-1">
      <span class="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer"></span>
    </div>

    
  </div>
  <div>
    <h1 class="text-xl font-bold text-center text-gray-800">{cardHeading}</h1>
    <p class="text-center text-gray-600">{cardContent}</p>
  </div>
  <div>
    <p class="text-center text-gray-600">{cardFooter}</p>
  </div>
  <div className='flex p-5 justify-start items-center absolute bottom-0'>
    <img className={`h-12 w-12 rounded-full`} src={cardUserImg} alt="" srcset="" />
    <p class="ml-2 text-lg text-gray-600">{cardUserName}</p>
  </div>
</div>

    </>
  )
}

export default Card