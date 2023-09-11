import './Exercise.css';

const Exercise = () => {
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    };
    return (
        <div>
            <h1 style={{color: 'red', backgroundColor: 'lightblue'}}>This is a Header</h1>
            <h1 style={style_header}>This is a Header</h1>
            <p className='para'>This is a Paragraph</p>
            <a href="#">This is a Link</a>
            <p>This is a Form:</p>
            <p>Enter your name:</p>
            <input></input>
            <button>Submit</button>

            <p>Here is an Image:</p>
            <img src="https://www.freecodecamp.org/news/content/images/2022/04/featured.jpg"></img>

            <ul>This is a List:
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </div>
    );
};

export default Exercise;