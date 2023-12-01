import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps{
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content,onDeleteComment}: CommentProps){
   const [likeCount, setLikeCount] = useState(0);

 function handleDeleteComment(){
  onDeleteComment(content);
 }
  
function handleLikeComment(){
  setLikeCount((state) =>{
       return state + 1;
  });
}

  return(
    <div className={styles.comment}>
       <Avatar
       hasBorder={false}
        src='https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.18169-9/24900144_1606308282791474_6922683776110579438_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeGuaicm_qFUq5MPFEYgoHgZYrS6TYOR6fxitLpNg5Hp_MFH0PwDk2kO_YhhFe_XS86GOVghLyn4wVfflRQfwTW5&_nc_ohc=sFIbaIRqlOQAX_6hwHW&_nc_oc=AQm6ecHIZXxdn_RXJHiwuh740LFoQlFfU5wgP458rWSazh9Fglr7ywoaLY94m1vEcNFCoTKMDr8NRzXoRZv6lhrl&_nc_ht=scontent.fsjk1-1.fna&oh=00_AfDAl37vNGdmJL_URE-q0bcdxZiLVUl-NWc-9BT0IDlorg&oe=657E1C73'
        alt=''
       />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
              <header>
                <div className={styles.authorAndTime}>
                   <strong>Carla Cristine</strong>
                   <time title='17 de Novembro às 11:09h' dateTime='2023-11-17 11:09'>Cerca de 1h atrás</time>
                </div>
                <button onClick={handleDeleteComment} title='Deletar Comentário'>
                  <Trash size={24} />
                </button>
              </header>
              <p>{content}</p>
          </div>
           <footer>
             <button onClick={handleLikeComment}>
               <ThumbsUp/>
               Aplaudir <span>{likeCount}</span>
             </button>
           </footer>
        </div>
    </div>
  )
}