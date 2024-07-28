

const Darkmode = () => {
    const switchTheme = (e) => {
        e.preventDefault();
        document.querySelector('body').classList.toggle("light")
    }
    return (
        <button id="darkmode" onClick={(e) => switchTheme(e)}>
           <img className="light-icon" src={`/images/icons/sun-01.svg`} alt="Sun images" />
           <img className="dark-icon" src={`/images/icons/vector.svg`} alt="Sun images" />
        </button>
    )
}

export default Darkmode;