import React from 'react'

const Card = (props) => {
    const cards = [
        { name: 'File-name-1' },
        { name: 'File-name-2' },
        { name: 'File-name-3' },
        { name: 'File-name-4' }
    ]
    return (
        <>
            {cards.map((item, index) => (
                <div className="card-1 mr-9 min-h-72 w-52 border rounded" key={index}>
                    <img src={props.url} alt="" className='' />
                    <h1 className='text-white text-center text-2xl py-1'>{item.name}</h1>
                    <div className="btns flex justify-center py-1 mb-3">
                        <button className='text-white px-3 border py-2 rounded hover:bg-black'>Download</button>
                    </div>
                </div>
            ))}
          
        </>
    )
}

export default Card
