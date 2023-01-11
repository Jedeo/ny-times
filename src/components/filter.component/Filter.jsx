
import "./Filter.css"

const Filter = ({filter, allArticles, setFiltered})  => {
    const options = filter.map(option=> <option  key={option} value={option}> {option}</option>)
    
    const handleFilter = (e)=> {
        const articles = [...allArticles]
        let filtered = articles.filter(article => article.section === e.currentTarget.value)
        setFiltered(filtered) 
    }
    
    return (<form action="">
        <select className='filter-dropDown' name="" id="" onChange={(e)=> handleFilter(e)}>
            <option value="All"> All </option>
            {options}
        </select>
    </form>)
} 

export default Filter 