import "./App.css";
import axios from 'axios'
import ReactFileReader from 'react-file-reader';

function App() {

  const handleClick = (e) => {
    e.preventDefault();
    axios.post('/predict')
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log('no not get')
      })
  }

  return (
    <div className="App">
      <p>Contact Me</p>
      <div>
        <form>
          <label>First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
          <label>Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
          />

          <label>Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>
          <input onClick={handleClick} type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
