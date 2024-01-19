import React, {useEffect,useState} from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/yash-madhani')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-xl'>Github Followers: {data.followers}</div>
  )
}

export default Github