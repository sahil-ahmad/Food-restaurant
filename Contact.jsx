import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='contacts' id='contact'>
                <h1 className='heading'>
                    Contact <span>Us</span>
                </h1>
                <div className='row'>
                    <form>
               
                        <div className='inputBox'>
                            <span className='fas fa-user'></span>
                            <input type='text' placeholder='Name' />
                        </div>
                        <div className='inputBox'>
                            <span className='fas fa-envelope'></span>
                            <input type='text' placeholder='Email' />
                        </div>
                        <div className='inputBox'>
                            <span className='fas fa-phone'></span>
                            <input type='text' placeholder='Number' />
                        </div>
                        <input type='submit' value='contact now' className='btn'/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact