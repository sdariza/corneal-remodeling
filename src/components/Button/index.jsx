const Button = (props) => {
    return (      <button
        className={`
          text-sm font-semibold border-2 px-3 py-1 rounded-lg transition
          ${
            props?.isActive
              ? "bg-blue-50 text-blue-700 border-blue-600 hover:bg-blue-100"
              : "hover:bg-blue-100"
          }
        `}
        {...props}
      >
        {props.text}
      </button>);
}
export default Button;