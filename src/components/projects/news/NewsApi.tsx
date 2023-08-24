import React, { useState } from 'react'
import { Card } from './Card';
import './news.css'
import dataNews from '../../../data.json';

export const NewsApi = () => {
    const [articles, setData] = useState<any[]>([])
    const [category, setCategory] = useState<string>("")

    const getNews = async (category: string) => {
     console.log(dataNews.data.business)

    }

    const handleSelect = (evento: React.FormEvent<HTMLSelectElement> | any) => {
        setCategory(evento.target.value);
    }

    const handleClick = (evento: React.FormEvent) => {
        evento.preventDefault()
        getNews(category);
    }

    return (
        <div className='container-news'>
            <div className="container-form">
                <form action="">
                    <label htmlFor="">¿Sobre que tema te interesan las noticias?</label>
                    <select name="category" id="category" onChange={handleSelect}>
                        <option value="technology">Tecnología</option>
                        <option value="entertainment">Entretenimiento</option>
                        <option value="science">Ciencia</option>
                        <option value="sports">Deportes</option>
                        <option value="health">Salud</option>
                        <option value="business">Negocios</option>
                    </select>
                    <input type="submit" value="Enviar" onClick={handleClick} />
                </form>
            </div>
            <div className="container-cards">
                {
                    articles.length > 0 &&
                    articles.map((value,index)=> ( <Card key={index} title={value.title} author={value.author} publishedAt={value.publishedAt} /> ))
                }
            </div>
        </div>
    )
}
