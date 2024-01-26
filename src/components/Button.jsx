import "../css/Button.css";

function Button({visual, type, children, onClick }) {
 
    return (
      <button className={`button ${visual}`} type={type} aria-label={`button ${visual}`} onClick={onClick}
      >
        {children}
      </button>
    );
  }
  
  export default Button;

