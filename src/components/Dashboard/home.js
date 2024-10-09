import React, { useRef, useState } from 'react'
import { auth, db, storage } from '../../firebase.js'
import { getDownloadURL, ref,uploadBytes } from 'firebase/storage';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore/lite';

const Home = () => {

  const form = useRef();
  const submitProject = (e) => {
    e.preventDefault();
    const name = form.current[0]?.value;
    const description = form.current[1]?.value;
    const url = form.current[2]?.value;
    const image = form.current[3]?.files[0];

    const storageRef = ref(storage, `project/${image.name}`)

    uploadBytes(storageRef, image).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadUrl) => {
          saveProject({
            name,
            description,
            url,
            image: downloadUrl
          })
        }, (error) => {
          console.log(error)
          saveProject({
            name,
            description,
            url,
            image: null
          })
        })
      }, (error) => {
        console.log(error)
        saveProject({
          name,
          description,
          url,
          image: null
        })
      }
    )
  }

  const saveProject = async (project) => {
    console.log(project)
    try {
      await addDoc(collection(db, "project"), project);
      window.location.reload(false);
    } catch (error) {
      alert('failed')
    }
  }

  return (
    <div className='dashboard'>
      <form ref={form} onSubmit={submitProject}>
        <p><input type='text' placeholder='Name'/></p>
        <p><textarea placeholder='Description'/></p>
        <p><input type='text' placeholder='URL'/></p>
        <p><input type='file' placeholder='Image'/></p>
        <button type='submit'>Submit</button>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </form>
    </div>
  )
}

export default Home