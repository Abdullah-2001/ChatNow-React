import React from 'react';
import './messeges.css';

export const MyMesseges = (props) => {

    const { messege, img } = props

    return (

        <div>

            <div className="messege-container-1">

                <div style={{ display: "flex", alignItems: "flex-start" }}>

                    <div>
                        <img width="50" className="users" src={img} alt="" />
                    </div>

                    <div style={{ marginLeft: "10px", marginTop: "2px", border: "none", backgroundColor: "rgb(51, 95, 179)", padding: "10px 20px 10px 20px", color: "white", borderRadius: 50 }}>
                        <p className="messege">{messege}</p>
                    </div>

                </div>

            </div>

            <div className="messege-container-2">

                <div style={{ display: "flex", alignItems: "flex-start" }}>

                    <div style={{ marginRight: "10px", marginTop: "2px", border: "none", backgroundColor: "#f5f7fb", padding: "10px 20px 10px 20px", color: "black", borderRadius: 50 }}>
                        <p className="messege">{messege}</p>                   </div>

                    <div>
                        <img width="50" className="users" src={img} alt="" />
                    </div>

                </div>
                
            </div>

        </div>

    )

}

// export const UserMesseges = (props) => {

//     const { messege, img } = props

//     return (

//         <div>

//             <div className="messege-container-2">

//                 <div style={{ display: "flex", alignItems: "flex-start" }}>

//                     <div style={{ marginRight: "10px", marginTop: "2px", border: "none", backgroundColor: "#f5f7fb", padding: "10px 20px 10px 20px", color: "black", borderRadius: 50 }}>
//                         <p className="messege">{messege}</p>
//                     </div>

//                     <div>
//                         <img width="50" className="users" src={img} alt="" />
//                     </div>

//                 </div>

//             </div>

//         </div>

//     )

// }