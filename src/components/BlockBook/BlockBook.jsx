import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import image from '../../assets/book.png'
import './BlockBook.css'
import distance from '../../assets/distance.png'
import call from '../../assets/call.png'
const BlockBook = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="blockBook">
            <div className="bookArticle">
                <h2 className='h2Book'>правила дорожного движения кыргызской республики</h2>
                <p>Я во время преподавания ПДД в автошколе, обнаружил ошибки и не полную информацию в ПДД Кыргызстана от 5.02.2020 года. Отталкиваясь от этих ошибок, составил свою методичку по.</p>
                <button className='button' onClick={() => setIsOpen(true)} >Купить</button>
                <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                    <div className='bg'>
                        <Dialog.Panel className="popup">
                                <div className='modal'>
                            <button className='btnX' onClick={() => setIsOpen(false)}></button>

                                <div className='callInfo '>
                                    <h2 className='h2Info'>Вы можете купить книгу</h2>
                                    <div>1. В Академии программирования “Codify”</div>
                                    <div> <img src={distance} alt="" /> <span>Чуй/Исанова 105/3</span> </div>
                                    <div> <img src={call} alt="" /> <span>0505 431-430</span>  </div>
                                    <div className='divCall'>2. 2. Позвонив на номер </div>
                                    <div><img src={call} alt="" /> <span>0705 265-747</span> </div>
                                    <span className='price'>Цена: 250 сом</span>
                                </div>
                                <div className='modalImage'>
                                    <img  className='image' src={image} alt="" />
                                </div>
                            </div>

                        </Dialog.Panel>
                    </div>
                </Dialog>
            </div>
            <div className="bookImage">
                <img src={image} alt="" />
            </div>
            <div className='blockGreen'></div>

        </div>
    )
}
export default BlockBook