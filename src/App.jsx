import { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
import { Hero } from './components/Hero'
import { Explore } from './components/Explore'
import { Contest } from './components/Contest'
import { Discuss } from './components/Discuss'
import { Profile } from './components/Profile'
import { Problems } from './components/Problems'
import { Interview } from './components/Interview'
import { Store } from './components/Store'
import { Premium } from './components/Premium'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
       <Appbar />
       <Routes>
          <Route path='/' element={<Hero />}/>
          <Route path='/explore' element={<Explore />}/>
          <Route path='/problems' element={<Problems />}/>
          <Route path='/contest' element={<Contest />}/>
          <Route path='/discuss' element={<Discuss />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/interview' element={<Interview />}/>
          <Route path='/store' element={<Store />}/>
          <Route path='/premium' element={<Premium />}/>
       </Routes>
    </BrowserRouter>
  )
}

function Appbar(){

  const navigate = useNavigate();

return <div className='flex justify-between m-2 px-7 items-center border-b-1 pb-3 border-gray-200 text-gray-700'>
      <div className='flex gap-7'>
      <button className='' onClick={()=> navigate('/')}><img className='max-h-6.5' src="/leetcode_logo.png" alt="" /></button>
      <div className='flex gap-6 text-md font-light'>

      <button onClick={()=> {
         navigate('/explore')
      }}>Explore</button>

      <button onClick={()=> {
         navigate('/problems')
      }}>Problems</button>

      <button onClick={()=> {
         navigate('/contest')
      }}>Contest</button>
      
      <button onClick={()=> {
         navigate('/discuss')
      }}>Discuss</button>
      
      <button onClick={()=> {
         navigate('/interview')
      }}>Interview</button>
      
      <button onClick={()=> {
         navigate('/store')
      }}>Store</button>
      
      </div>
      </div>
      <div className='flex rounded-full gap-4'>
          <button onClick={() => {navigate('/profile')}}><img className='rounded-full h-7 w-7 mt-1' src="/profile.png" alt="" /> </button> 
        <button onClick={()=> {navigate('/premium')}} className='bg-orange-50 px-2 rounded-lg p-1 text-orange-600'>Premium</button>
      </div>
</div>
}

export default App
