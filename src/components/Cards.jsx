// import React from 'react';

// function Cards({ item }) {
//   return (
//     <>
//       <div className="card bg-white w-full shadow-xl transform transition duration-300 hover:scale-105 flex flex-col h-full cursor-pointer">
//         <figure className="h-48 overflow-hidden flex-shrink-0">
//           <img
//             src={item.image}
//             alt={item.title}
//             className="w-full h-full object-cover"
//           />
//         </figure>
//         <div className="card-body p-4 flex flex-col justify-between flex-grow">
//           <h2 className="card-title text-lg font-semibold flex justify-between items-center">
//             {item.title}
//             <div className="badge badge-secondary ml-2">FREE</div>

//           </h2>
//           <p className="text-gray-600">{item.name}</p>
          
//           <div className="card-actions justify-between">
//             <div className="badge badge-outline">{item.price} </div>
//           <div className=" px-2 py-1 cursor-pointer rounded-lg border-[2px] hover:bg-pink-500 hover:text-white duration-200">Read Now</div>
//           </div>
          

//         </div>
//       </div>
//     </>
//   );
// }

// export default Cards;

import React from 'react';

function Cards({ item }) {
  // Use the highest resolution image available
  const imageUrl = item.imageLinks?.extraLarge || item.imageLinks?.large || item.imageLinks?.medium || item.imageLinks?.small || item.imageLinks?.thumbnail;

  return (
    <>
      <div className="card bg-white w-full shadow-xl transform transition duration-300 hover:scale-105 flex flex-col h-full cursor-pointer rounded-lg overflow-hidden">
        <figure className="h-64 overflow-hidden flex-shrink-0 rounded-lg">
          <img
            src={imageUrl}
            alt={item.title}
            className="w-full h-full object-cover filter brightness-110 contrast-105 saturate-120"
          />
        </figure>
        <div className="card-body p-4 flex flex-col justify-between flex-grow">
          <h2 className="card-title text-lg font-semibold flex justify-between items-center max-h-10 overflow-hidden">
            <span className="truncate">{item.title}</span>
            <div className="badge badge-secondary ml-2">FREE</div>
          </h2>
          <p className="text-gray-600 truncate">{item.authors?.join(', ')}</p>
          <div className="card-actions justify-between mt-4">
            <a 
              href={item.previewLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-2 py-1 cursor-pointer rounded-lg border-[2px] hover:bg-pink-500 hover:text-white duration-200"
            >
              Read Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

