import axios from "axios"
import { Link } from "react-router-dom"
import { Article } from "../Article/Article"
import "./BlockArticle.css"
const BlockArticle = (props) => {

    return (
        <div>
 <div className="blcokArticle">
            <h2 className="h2Article">Последние изменения в законодательстве ПДД КР</h2>
            <div className="blockGreenTwo"> </div>

                {
                    props.articls.map(news => {
                        return(
                            <Article key={news.id} news={news} />
                            )
                    })
                }
            <div className="blockArticleTwo">
            <h3>Пройдтите тест по ПДД и получите 10% скидку на книгу</h3>
            <p>Внимательно читайте каждый вопрос и все варианты ответов. Не торопитесь!</p>
            <Link className="test" to="/">начать тест</Link>
            </div>

        </div>
        </div>
       
    )
}
export default BlockArticle