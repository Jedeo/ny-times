
import { useState } from 'react';

const Filter = ({filter, allArticles, fetchArticles, setFiltered})  => {
    const [selected, setSelected] = useState("All")
    const options = filter.map(option=> <option  key={option} value={option}> {option}</option>)
    
    const handleFilter = (e)=> {
        const Articles = [...allArticles]
        let filtered = Articles.filter(article => article.section === e.currentTarget.value)
        setSelected(e.currentTarget.value)
        setFiltered(filtered) 
    }

   console.log(selected);
    
    return (<form action="">
        <select name="" id="" onLoad={()=> setFiltered(allArticles) } onChange={(e)=> handleFilter(e)}>
            <option value="All" onSelect={(e)=> console.log(e.currentTarget)}> All </option>
            {options}
        </select>
    </form>)
} 

export default Filter