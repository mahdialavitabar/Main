import React, {useEffect} from "react"
const Main = (props) => {
    useEffect(() => {
        console.log('Main.js useEffect')
        setTimeout(() => {
           alert('HTTP Reaquest!') 
        }, 2000);
        return () => {
            console.log('Main.js CleanUp')
        }
    }, [])
    const btn= {
        backgroundColor: '#7b1fa2',
        color: '#ffffff',
        font:'inherit',
        border: 'none',
        outline: 'none',
        borderRadius: '3px',
        padding: '0.6rem',
        margin: '0.6rem auto',
    }
    return (
        <div>
<h2>Book Store</h2>
            <button style={btn} onClick={props.click}>
                Show/Hide Products
                </button> {/* point kardan be tavabe ya refrence kardane tavabe */}   
        </div>
    )
}

export default Main