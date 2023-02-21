import React from 'react'
function Test() {
  return (
    <html>
        <head>
            <style>
                {/* h1{
                    color: red,
                } */}
            </style>
        </head>
        <body>
            <h1>hello world</h1>
        </body>
    </html>
  )
}
export default Test;
// import React from 'react'
// function Text({children, style, element}) {
//   console.log(style);
//   return (<div>
//     <p className={` ${element.type}`}   dangerouslySetInnerHTML={{ __html: children }}/>
//     <style>{`\
//         .${element.type}{\
//           background-color: gray;\
//         }\
//         .${element.type}{}
//       `}</style>
//     </div>)
// }
// export default Text