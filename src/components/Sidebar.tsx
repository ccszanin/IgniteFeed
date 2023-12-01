import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import {PencilLine} from 'phosphor-react';

export function Sidebar(){
  return(
   <aside className={styles.sidebar}>
    <img 
    className={styles.cover}
    src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    />
    
    <div className={styles.profile}>
       <Avatar src="https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.18169-9/24900144_1606308282791474_6922683776110579438_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeGuaicm_qFUq5MPFEYgoHgZYrS6TYOR6fxitLpNg5Hp_MFH0PwDk2kO_YhhFe_XS86GOVghLyn4wVfflRQfwTW5&_nc_ohc=sFIbaIRqlOQAX_6hwHW&_nc_oc=AQm6ecHIZXxdn_RXJHiwuh740LFoQlFfU5wgP458rWSazh9Fglr7ywoaLY94m1vEcNFCoTKMDr8NRzXoRZv6lhrl&_nc_ht=scontent.fsjk1-1.fna&oh=00_AfDAl37vNGdmJL_URE-q0bcdxZiLVUl-NWc-9BT0IDlorg&oe=657E1C73"/>
       <strong>Carla Cristine</strong>
       <span>Web Developer</span>
    </div>
    <footer>
      <a href='#'>
        <PencilLine size={20} />
        Editar seu perfil
      </a>
    </footer>
   </aside>
  );
}