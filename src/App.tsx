import { Header } from './components/Header'
import {Post, PostType} from './components/Post'
import './global.css'
import  styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

const posts: PostType []=[
  {
    id: 1,
    author:{
      avatarUrl: 'https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.18169-9/24900144_1606308282791474_6922683776110579438_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeGuaicm_qFUq5MPFEYgoHgZYrS6TYOR6fxitLpNg5Hp_MFH0PwDk2kO_YhhFe_XS86GOVghLyn4wVfflRQfwTW5&_nc_ohc=sFIbaIRqlOQAX_6hwHW&_nc_oc=AQm6ecHIZXxdn_RXJHiwuh740LFoQlFfU5wgP458rWSazh9Fglr7ywoaLY94m1vEcNFCoTKMDr8NRzXoRZv6lhrl&_nc_ht=scontent.fsjk1-1.fna&oh=00_AfDAl37vNGdmJL_URE-q0bcdxZiLVUl-NWc-9BT0IDlorg&oe=657E1C73',
      name: 'Carla Cristine',
      role: 'Developer'
    },
     content:[
    {type:'paragraph', content: 'Fala galeraa 👋'},
    {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type:'link', content:  'jane.design/doctorcare'},
       
     ],
     publishedAt: new Date('2023-5-5 20:00:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/zaninDe.png',
      name: 'Gabriel Zanin',
      role: 'Developer'
    },
     content:[
    {type:'paragraph', content: 'Fala galeraa 👋'},
    {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type:'link', content:  'jane.design/doctorcare'},
       
     ],
     publishedAt: new Date('2023-6-5 20:00:00'),
  },
];

 export function App() {

  return (
    <div>
    <Header/>

    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
       {posts.map(post => {
         return (
         <Post 
          key={post.id}
          post={post}
         />
        )
       } )}

      </main>
    </div>

    </div>
  )
}

export default App
