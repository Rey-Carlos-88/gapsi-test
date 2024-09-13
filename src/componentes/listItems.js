import React, { useEffect, useState } from 'react'

import { apiGetListItems } from '../services/services'


 //------------------------component Card----------------------

 import Box from '@mui/material/Box';
 import Card from '@mui/material/Card';
 import CardActions from '@mui/material/CardActions';
 import CardContent from '@mui/material/CardContent';
 import Button from '@mui/material/Button';
 import Typography from '@mui/material/Typography';
 
const ListItems = ()  => {

    const [items, setItems] = useState([])
    const [valueSearch, setValueSearch] = useState('computer')
    const [page, setPage] = useState(1)

    const onGetLsitItems = async (
        searchArg = valueSearch, 
        pageArg = page
    ) => {
        try {
            const allItems = await apiGetListItems(searchArg, pageArg)
            setItems(allItems)

            console.log('data desde api en componente', allItems)
        } catch (error) {
            console.log('data error => ',error)
        }
    }


    useEffect(() => {
        onGetLsitItems();
    },[])


    const CardComics = () => {
        return (
            <>
                {items.map((item) => {
                    return (
                        <>
                            <div key={item.id} className='card-items'>
                                <React.Fragment>
                                    <CardContent>
                                        <div className='card-items-title'>
                                            <strong>Nombre del Producto: </strong> {item.name}
                                        </div>
                                        <div className='card-items-img'>
                                            <img src={item.image} />
                                        </div>
                                        <div>
                                            <strong>Precio: </strong> Precio: {item.price}
                                        </div>
                                            <Button className='button-open-modal'
                                                onClick={() => {
                                                    console.log('mandar a llamar api detail')
                                                    //fetchComicDetail(comic.id)
                                                    //setIdComicDetail(comic.id)
                                                    //handleClickOpen();
                                                }}                                    
                                                size="small"
                                            >
                                                ver detalle
                                            </Button>
                                    </CardContent>
                                </React.Fragment>
                            </div>
                        </>
                    )
                })}  
            </>
        )
    }


  return (
    <>
         <div className='conten-filter'>
            <div className='filter-name'>
                <input 
                    type='text'
                    value={valueSearch}
                    placeholder='Name:'
                    onChange={(e) => {
                        setValueSearch(e.target.value)
                        onGetLsitItems(valueSearch, page);

                    }}
                   
                />
                <Button className='button-search'
                    onClick={() => {
                        console.log('mandar a llamar api')
                    }}                                    
                    size="small"
                >
                    Search
                </Button>
            </div>
        </div>

        <div className='conten-card'>
                <Box className='box-card'>
                    <Card className='card-card'>
                        {<CardComics/>}
                    </Card>
                </Box>
            </div> 
    </>
  )
}

export default ListItems
