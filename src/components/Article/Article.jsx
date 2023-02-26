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

  return (
    <>
    <li>
      <h2>{props.articls.number}</h2>
      <p className="articleComp">{kitcut(
        props.articls.article, 200
        )}
   <button className="btnGlobal" onClick={() => setIsOpen(true)}>Далее</button>
        </p>

    </li>

 <div className="parentBlock">
 <Dialog open={isOpen} onClose={()=> setIsOpen(false)}>
    <div className="bg2">
   <Dialog.Panel className="popup2">
    <div className="modal2">
   <button className="btnXGlob" onClick={() => setIsOpen(false)} ></button>
      <h2>{props.articls.number}</h2>
    <p className="fullArticle">{props.articls.article}</p>
    </div>
   </Dialog.Panel>
    </div>
   </Dialog>
 </div>
 
        </>
  )
} 