import axios from "axios"
import { useEffect, useState } from "react"
import BlockArticle from "../../components/BlockArticle/BlockArticle"
import BlockBook from "../../components/BlockBook/BlockBook"
import './Bookpage.css'

const BookPage = () => {
    const [news, setNews] = useState([])
    const getArticls = async () => {
        const { data } = await axios("https://jakshyjol.herokuapp.com/news/")
        setNews(data)
        console.log(data);
    }
    useEffect(() => {
        getArticls()
    }, [])
    return (
        <div >
            <div className="bookPageCss">

                <BlockBook />
                <BlockArticle articls={news} />
            </div>

        </div>

    )
}
export default BookPage