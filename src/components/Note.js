

const Note = (props) => {
    const handleClick = () =>{
        props.deleteNote(props.id)
    }
    let palette = ['#FAEBEB', '#F8EEEC',
    '#F3F2F1',
    '#FFB093',
    '#FFA477',	
    '#FDBC80',
    '#FFEC88',
    '#D2FF76',	
    '#D0E9E9',	
    '#A3D2FF']

    const getRandomLightColor = () =>{
        let shade = palette[Math.floor(Math.random()*palette.length)]
        console.log(shade)
        return  shade
    }
    return (
        <div className="note" style={{ backgroundColor:getRandomLightColor() }}>
        <h1>{props.title}</h1>
        <p>{props.data}</p>
        <button onClick={handleClick}><i className="fa fa-trash"></i></button>
      </div>
    )
}

export default Note