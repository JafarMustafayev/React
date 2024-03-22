function Button(params) {
  return (
    <>
      <button>
        {params.name} <span className="buttonIcon">{params.icon}</span>
      </button>
    </>
  );
}

export default Button;
