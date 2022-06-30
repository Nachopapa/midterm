import React from 'react'
import s1 from './photos/s1.png'
import './Card.css'
function Card({ title, body }) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={s1} alt='s1' />
            </div>
            <div className='card-container'>
                <div className='card-title'>
                    <h3>{title}</h3>
                </div>
                <div className='card-body'>
                    <p>{body}</p>
                </div>
                <div className='btn'>
                    <button>
                        <a>
                            grade
                        </a>
                    </button>
                </div>

            </div>
            <div className='image-container'>
                <img src={s1} alt='s1' />
            </div>
            <div className='card-container'>
                <div className='card-title'>
                    <h3>{title}</h3>
                </div>
                <div className='card-body'>
                    <p>{body}</p>
                </div>
                <div className='btn'>
                    <button>
                        <a>
                            grade
                        </a>
                    </button>
                </div>

            </div>
            
        </div>
    )
}

export default Card