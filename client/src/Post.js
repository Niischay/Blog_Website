import image2 from './img/image_2.jpeg';
export default function Post(){
    return(
        <div className="post">
        <div className="image">
          <img src = {image2} alt =""></img>
        </div>
        <div className="text">
          <h2>Blue Sky</h2>
          <p className="info">
            <a className='author'>Nischay Chhetri</a>
            <time>14-11-2024 18:56</time>
          </p>
          <p className='summary'>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button a</p>
        </div>
      </div>
    );
}