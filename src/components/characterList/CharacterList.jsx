

const CharacterList = (props) => {
    const {children} = props;
  return (
    <div className="container">
        <div className="d-flex align-content-center justify-content-center flex-wrap ">
            {children}
        </div>
        
    </div>
  )
}

export default CharacterList