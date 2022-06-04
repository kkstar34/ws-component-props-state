import React, { useEffect, useState } from 'react'

export const Form =  ({users, submit, children})  => {

    

    const [user, setUser] = useState({
        name : "Kouassi Blaise",
        age : 2
    })



   useEffect(() => {






    return () =>{
        // willUnMount
    }



   }, [])



  return (
    <div className="form">
        <form action="">
            <label htmlFor="">Nom : </label>
            <input type="text" />

            <input type="submit" onClick={submit} />

            <p>{children}</p>
            <ul>
                
                    {
                        users.map(user =>
                            <li>{user.name}</li>
                        )
                    }
                </ul>
          </form>


          <div>
            <h3>Presentation du state</h3>
            <p>{user.name}</p>
            <p>{user.age}</p>
        </div>
    </div>
  )
}




