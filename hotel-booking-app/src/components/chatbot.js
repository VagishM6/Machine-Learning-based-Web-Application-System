import React, {Component} from 'react';


export class Chatbox extends Component {

    componentDidMount(){

        (function(d, m){
            var kommunicateSettings = 
                {"appId":"17330840e4cd0baf5cba9cba19c152024","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */


    }

    render() {
        return (
            <div className="container m-t-1 text-center d-flex flex-column min-vh-100 ">
                <h1 className="text-dark">Welcome to the Chatbot Services...</h1>
                <h4 className="text-secondary">
                <p>
                Chatbot
                </p>
                </h4>
            </div>
        )
    }
}

export default Chatbox;

































// import ChatBot from 'react-simple-chatbot';



// function Chatbox() {

//     const steps = [
//     {
//         id: '0',
//         message: 'Welcome to react chatbot!',
//         trigger: '1',
//     },
//     {
//         id: '1',
//         message: 'Bye!',
//         end: true,
//     },
//     ];

//     return (
//         <ChatBot steps={steps} />
//     );

// }

// export default Chatbox;











// import React from "react";
// import {Chatbot} from "react-chatbot-kit";

// // import config from "./configs/chatbotConfig";
// // import MessageParser from "./chatbot/MessageParser";
// // import ActionProvider from "./chatbot/ActionProvider";

// function Chatbox() {
//   return (
//     <div className="App">
//       <Chatbot/>
//     </div>
//   );
// }

// export default Chatbox;

