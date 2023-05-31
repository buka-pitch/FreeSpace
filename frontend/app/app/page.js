"use client"
import styles from './page.module.css';
import axios from  "axios";
import {useState,React,useEffect} from 'react';


const getdata = async ()=>{
    let req = await  fetch("http://localhost:5000/api/v1/posts");
    return req.json();
    // return data;
}

export default async function Home()
 {
  const [data,setData] = useState(null);
  const res = await getdata();
  console.log(`res ${res.data}`);


   
  return (
    <div className={styles.container}>
      <div className={styles.header}>

      <div className={styles.posts}>
     {res && res.map(item=><><div>{item._id}</div><h1>{item.title}</h1><div>{item.topic}</div></> )}
</div>      </div>
      </div>
  )
}
