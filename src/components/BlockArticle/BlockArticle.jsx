import axios from "axios"
import { Link } from "react-router-dom"
import { Article } from "../Article/Article"
import "./BlockArticle.css"
const BlockArticle = (props) => {

    return (
        <div className="blcokArticle">
            <h2 className="h2Article">Последние изменения в законодательстве ПДД КР</h2>
                {
                    props.articls.map(articl => {
                        return(
                            <Article key={articl.id} articls={articl} />
                            )
                    })
                }
            <div className="blockGreenTwo">

            </div>
            <div className="blockArticleTwo">
            <h3>Пройдтите тест по ПДД и получите 10% скидку на книгу</h3>
            <p>Внимательно читайте каждый вопрос и все варианты ответов. Не торопитесь!</p>
            <Link className="test" to="/">начать тест</Link>
            </div>

        </div>
    )
}
export default BlockArticle