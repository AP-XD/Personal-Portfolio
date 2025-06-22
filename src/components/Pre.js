import React from "react";

function Pre(props) {
  return (
    <div 
      id={props.load ? "preloader" : "preloader-none"}
      style={{
        willChange: props.load ? 'opacity' : 'auto',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
    >
      {props.load && (
        <div className="preloader-content">
          <div className="preloader-spinner"></div>
        </div>
      )}
    </div>
  );
}

export default Pre;
