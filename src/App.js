import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

//components import
import Home from './components/home/Home';
import Blogs from './components/blogs/Blogs';
import NewBlog from './components/newBlogs/NewBlog';



function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/blogs/newBlog" component = {NewBlog}></Route>
          <Route path="/blogs" component = {Blogs}></Route>
          <Route path="/" component = {Home}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
