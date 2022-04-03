import './App.css';
import { useState } from 'react';


function Upload() {
    const [file, setFile] = useState()

    function handleChange(event) {
        setFile(event.target.files[0])
        console.log("file uploaded")
        console.log(event.target.files)
    }

    const Upload = () => {
        localStorage.setItem("File", file);
        console.log("get", localStorage.getItem("File"))
        console.log("Successflly Uploaded")
        console.log(file)
    }

    return (
        <div className='App'>
            <form>
                <h1>React File Upload</h1>
                <input type="file" onChange={handleChange} />
            </form>

            <button onClick={() => Upload()}>Upload</button>
        </div>
    )
}


export default Upload;