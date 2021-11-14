import cards from './response.json';
import ('./posts.css');
import { Table } from 'react-bootstrap/'

function Posts () {
let entradas = cards.map((card) => { return (
  <div class="Post">
    <a href={card.url}>
    <img src={card.thumbnailUrl} alt=""/>
    <p>{card.title}</p></a>
  </div>
)} );   
    return (
        <div id="containerPosts">
          {entradas}
        </div>
    );
}

export default Posts;