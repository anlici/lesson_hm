import { useState,useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
const Search = () => {
    const [query, setQuery] = useState('')
    const [result, setResult] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
    const handleSearch = (newQuery: string) => {
      if (query.trim() === '') {
        setResult('请输入有效的搜索内容')
        return
    }
       setResult(`搜索结果: ${query}`) // 更新搜索结果

       setSearchParams({ q: newQuery })
    }

    useEffect(() => {
      console.log('loading..');
      
    }, [searchParams])

    return (
      <div className="container mx-auto p-4">
        <div className="flex gap-2">
          <Input
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
           onClick={handleSearch(query)}
          >Search</Button>
        </div>
        <h1>{result}</h1>

      </div>
    )
}
  
export default Search