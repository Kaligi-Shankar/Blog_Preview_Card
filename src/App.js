import './App.css';
import MainPic from './assets/illustration-article.svg'
import ProfilePic from './assets/image-avatar.webp'
function App() {
  return (
   <div className='container'>
    <div className='card'>
      <div className='image'>
        <img src={MainPic} alt='main pic' width={336} height={200}/>
      </div>
      <div className='description'>
        <div className='heading'>Learning</div>
        <div className='published'>Published 21 Dec 2023</div>
        <h1 className='title'>HTML & CSS Foundations</h1>
        <div className='desc'>These languages are the backbone of every website defining structure, content and presentation.</div>
      </div>
      <div className='profile'>
        <img src={ProfilePic} alt='profilepic' width={32} height={32}/>
        <h3>Greg Hooper</h3>
      </div>
    </div>
   </div>
  );
}

export default App;
