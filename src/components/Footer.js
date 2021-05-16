
const Footer = () => {
    let year = new Date().getFullYear();

    return (
        <div className='footer-div'>
            <h3 className='about-author'>This app belongs to pr0mpt Copyright ⓒ {year}</h3>
        </div>
    )
}


export default Footer