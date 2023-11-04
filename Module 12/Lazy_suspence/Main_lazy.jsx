import React,{lazy,Suspense} from 'react'
// Without lazy loading import
import Hello from './Hello'

// with lazy loading import
const Morning =lazy(()=>import("./Morning")) ;

function Main_lazy() {
  return (
        <div className='container mt-5'>
            <h1>Hi i am main Component</h1><hr/>
            <Hello/>
            <Suspense fallback={<div class="spinner-border"></div>}>
                <Morning/>
            </Suspense>
        </div>
  )
}

export default Main_lazy