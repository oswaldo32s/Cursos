import { Link } from "react-router-dom"

function Home() {
  return(
    <>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to={`profile`}>Profile page</Link>
          </li>
          <li>
            <Link to={`profile/spinach`}>Spinach</Link>
          </li>
          <li>
            <Link to={`profile/popeye`}>Popeye</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Home