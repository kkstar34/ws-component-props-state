import React, { useEffect } from 'react'

export const Form =  ({users, submit, children})  => {

    



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
    </div>
  )
}




