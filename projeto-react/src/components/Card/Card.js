import { CardForum, Container, InformacoesCard, Titulo } from "./Card.jsx";
import { BiMessageAltDetail } from 'react-icons/bi'
import { useEffect } from "react";
import axios from 'axios'

function Card(props) {

    const pegarNoticias = () => {
        axios.get('http://localhost:8000/news')
        .then(response => props.setNews(response.data))
        .catch(error => console.error(error))
    }

    useEffect(() => {
        pegarNoticias()
    }, [])

    const novasNoticias = props.news.map((item) => {
        return (
            <CardForum key={item.id}>
                <Titulo>{item.title}</Titulo>
                <p>{item.content}</p>
                <hr />
                <InformacoesCard>
                    <span >
                        <img
                            src='https://github.com/eduardofronzav4company.png'
                            alt='Imagem do usuário'
                            style={{
                                width: '40px',
                                borderRadius: '50%',
                                marginRight: '10px'
                            }} />
                        Nome usuário
                    </span>
                    <span>

                        12h
                    </span>
                    <span>
                        <BiMessageAltDetail />
                        5
                    </span>
                </InformacoesCard>
            </CardForum>
        )
    })

    return (
       <>
          {novasNoticias}
      </>
    );
}

export default Card;