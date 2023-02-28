import { Dialog } from "@headlessui/react";
import { useState } from "react";
import "./Article.css"
export const Article = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  

  function kitcut(text, limit) {
    text = text?.trim();
    if (text?.length <= limit) return text;

    text = text?.slice(0, limit);
    const lastSpace = text?.lastIndexOf(":");

    if (lastSpace > 0) {
      text = text?.substr(0, lastSpace);
    }
    return text + ":" ;
  }
  console.log(props)

  return (
    <>
    <li>
      <h2 className="articlsNumber">{props.news.number_of_news}</h2>
      <p className="articleComp">{kitcut(
        props.news.text, 200
        )}
   <button className="btnGlobal" onClick={() => setIsOpen(true)}>далее</button>
        </p>

    </li>

 <div className="parentBlock">
 <Dialog open={isOpen} onClose={()=> setIsOpen(false)}>
    <div className="bg2">
   <Dialog.Panel className="popup2">
    <div className="modal2">
   <button className="btnXGlob" onClick={() => setIsOpen(false)} ></button>
      <h2 className="articlsNumberH2">{props.news.number_of_news}</h2>
    <p className="fullArticle">{props.news.text}</p>
    </div>
   </Dialog.Panel>
    </div>
   </Dialog>
 </div>
 
        </>
  )
} 