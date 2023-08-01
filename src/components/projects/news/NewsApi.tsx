import React, { useState } from 'react'
import { Card } from './Card';
import './news.css'

export const NewsApi = () => {
    const key = '9d65c517a24940308eb4199db1d0810c';

    const [articles, setData] = useState<any[]>([])
    const [category, setCategory] = useState<string>("")

    const getNews = async (category: string) => {
        try {
            const url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=${key}`
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const dataNews = await response.json();
            console.log(dataNews)
            setData(dataNews.articles)
        } catch (error) {
            console.log(error, "mensaje")
        }
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
                        <option value="general">General</option>
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
