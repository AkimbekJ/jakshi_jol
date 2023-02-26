import axios from "axios"
import { useEffect, useState } from "react"
import BlockArticle from "../../components/BlockArticle/BlockArticle"
import BlockBook from "../../components/BlockBook/BlockBook"


const BookPage =() => {
    const [articls, setArticls] = useState([])
    const getArticls = async() => {
        const {data} = await axios("http://localhost:8000/articls")
        setArticls(data)
        console.log(data);
    }
    useEffect(() => {
        getArticls()
    },[])
    return(
        <div>
        <BlockBook/>
        <BlockArticle  articls={articls} />
        </div>
    
    )
}
export default BookPage