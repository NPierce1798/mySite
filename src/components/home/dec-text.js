import Typed from "typed.js";
import React from "react";
function DecText() {

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Clean.","Efficient.","Simple.","Professional.","Nicolas Pierce."],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true
    });

        return () => {
            typed.destroy();
        };
    }, []);



    return (

      <div className="dectext__container">
        <span ref={el} className="dectext__text"/>
      </div>

      
    );
  }
  
  export default DecText;