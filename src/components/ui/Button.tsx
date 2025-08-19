// import React from 'react'

// interface ButtonProps {
//   name:string;
//   onClick: () => void;
// }

// export default function Button({ name, onClick }: ButtonProps) {
//   return (
//     <button onClick={onClick} className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
//       {name}
//     </button>
//   )
// }

import React from 'react'

interface ButtonProps {
  name:string;
}

export default function Button({ name }: ButtonProps) {
  return (
    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
      {name}
    </button>
  )
}
