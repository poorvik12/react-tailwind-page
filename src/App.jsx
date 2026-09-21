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
    <div id='body' className='min-h-screen flex flex-col overflow-hidden bg-[#A8B0BE] items-center justify-center '>
      <div className='w-full ml-100 h-110 flex gap-10'>
        <div className='flex items-center gap-4'>
          <img src="/profile-image.png" alt="Profile" className='w-50 h-50 rounded-full object-cover'/>
          <div className=''>
            <h2 className='text-8xl font-bold tracking-tight text-gray-800'>PRESENTATION DESIGN</h2>
            <p className='text-4xl text-gray-700'>Простая React-страница, созданная с использованием Js tg: @poorvik__</p>
          </div>
        </div>
      </div>
      <div className='w-[95%] h-[85vh] sm:w-[92%] lg:w-[90%] bg-white px-10 py-15 mb-15 overflow-hidden shadow-2xl' >
        <Section1 user={user}/> 
      </div>
    </div>
  )
}

export default App
