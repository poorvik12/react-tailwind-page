import './App.css'
import Section1 from './components/section1/section1'
const App = () => {
  const user=[
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQUwVs3md5L4n6o5qied1xPX7cPOxAH9tu8YI12X3yKA&s=10',
      intro:'Passionate IT professional skilled in technology, innovation, problem-solving, and collaboration.',
      tag:'Engineer'
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSBgL07ojdCePYKUGhoIZxm8mA8rLA_akhaTYNfUXMgw&s=10',
      intro:'Resilient individual seeking opportunities, growth, stability, and meaningful community impact.',
      tag:'Underserved'
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv8IWS_n6qdCM2MsBNCK6p6AQu2fri9BmGKIdrgWAi_g&s=10',
      intro:'Ambitious woman pursuing financial independence, opportunity, stability, and personal growth.',
      tag:'Underbanked'
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxTD7G9BVBgefOc1M4_fJIojdM1p2CP_LnM28HR02Cw&s=10',
      intro:'Motivated student developing skills, gaining experience, and preparing for future opportunities.',
      tag:'Undergraduate'
    }
  ]
  return (
    <div id='body' className='min-h-screen flex flex-col overflow-hidden bg-[#A8B0BE] items-center justify-center'>
      <div className='w-full h-auto lg:ml-100 lg:h-110 flex px-6 lg:px-0 py-8 lg:py-0 gap-10'>
        <div className='flex flex-col lg:flex-row lg:items-center w-full items-center gap-4'>
          <img src="/profile-image.png" alt="Profile" className='w-32 h-32 lg:w-50 lg:h-50 rounded-full object-cover'/>
          <div className='text-center lg:text-left'>
            <h2 className='text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-gray-800'>PRESENTATION DESIGN</h2>
            <p className='text-xl sm:text-2xl lg:text-4xl text-gray-700'>Простая React-страница, созданная с использованием Js tg: @poorvik__</p>
          </div>
        </div>
      </div>
      <div className='w-[95%] h-auto sm:w-[92%] lg:w-[90%] bg-white px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-15 mb-15 overflow-hidden shadow-2xl' >
        <Section1 user={user}/> 
      </div>
    </div>
  )
}

export default App
