// import React from "react";
// import { Link } from "react-router-dom";

// function FetchHomeData({ data }) {
//   return (
 
//     <div className="my-12">
//       <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
//         {data?.map((d) => {
//           return (
//             <div key={d.id}>
//               <Link to={`/article/${d.id}`}>
//                 <div className="border bg-stone-100">
//                   <img
//                     className="w-[560px] h-[200px] border object-cover"
//                     src={d.urls.regular}
//                     alt="alt"
//                   />
//                   <h4 className="text-xl my-2 font-light tracking-wider font-serif">{`${d.user?.username}`}</h4>
//                 </div>
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     </div>

//   );
// }

// export default FetchHomeData;