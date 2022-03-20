import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import './App.css';




export default function HomeCard() {


    const cardDetails = [
        {

            avatarHeight: 200,
            avatarWidth: 250,
            title: "Fancy Product",
            starRange: "4.5",
            priceStart: "$40.00",
            priceEnd: "$80.00",
            offerPrice: "",
            cardAction: "View Options"
        },
        {

            avatarHeight: 200,
            avatarWidth: 250,
            title: "Special Item",
            starRange: "5",
            priceStart: "$20.00",
            priceEnd: "$80.00",
            offerPrice: "$18.00",
            cardAction: "Add to cart"
        },
        {

            avatarHeight: 200,
            avatarWidth: 250,
            title: "Sale Item",
            starRange: "3",
            priceStart: "$20.00",
            priceEnd: "$80.00",
            offerPrice: "$18.00",
            cardAction: "Add to cart"
        },
        {

            avatarHeight: 200,
            avatarWidth: 250,
            title: "Popular Item",
            starRange: "5",
            priceStart: "$40.00 ",
            priceEnd: "$80.00",
            offerPrice: '',
            cardAction: "Add to cart"
        },
        {

            avatarHeight: 200,
            avatarWidth: 250,
            title: "Sale Item",
            starRange: "3.5",
            priceStart: "$50.00",
            priceEnd: "$80.00",
            offerPrice: "$25.00",
            cardAction: "Add to cart"
        },
        {

            avatarHeight: 200,
            avatarWidth: 250,
            title: "Fancy Product",
            starRange: "4",
            priceStart: "$120.00 ",
            priceEnd: "$280.00",
            offerPrice: '',
            cardAction: "View Options"
        }, {

            avatarHeight: 200,
            avatarWidth: 250,
            title: "Special Item",
            starRange: "5",
            priceStart: "$20.00",
            priceEnd: "$80.00",
            offerPrice: "$18.00",
            cardAction: "Add to cart"
        },
        {

            avatarHeight: 200,
            avatarWidth: 250,
            title: "Popular Item",
            starRange: "5",
            priceStart: "$40.00",
            priceEnd: "$80.00",
            offerPrice: "",
            cardAction: "Add to cart"
        }

    ];

    let count = 0;

    function updateCartCount() {
        ++count;
        document.querySelector('.cartCount').innerText = count

    }



    return (

        cardDetails.map((cardElemnt, i) => {



            if (cardElemnt.title === "Fancy Product") {
                return (

                    <Card className='card'>
                        <CardMedia
                            component="img"
                            height={cardElemnt.avatarHeight}
                            image="https://fakeimg.pl/300x200/"
                            alt="450 X 300"
                        />
                        <CardContent className='cardContent'>
                            <Typography gutterBottom variant="h5" component="div">
                                {cardElemnt.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {cardElemnt.priceStart} - {cardElemnt.priceEnd}
                            </Typography>
                        </CardContent>
                        <CardActions >
                            <Button className='cardBtn'
                                className={`card_${i}`}

                                sx={{
                                    '&:hover': {
                                        color: '#fff',
                                        backgroundColor: '#000'
                                    },
                                    border: '1px solid black',
                                    color: "#000"
                                }}>{cardElemnt.cardAction}
                            </Button>
                        </CardActions>
                    </Card >


                )
            }
            if (cardElemnt.title === "Special Item") {
                return (

                    <Card className='card'>
                        <CardMedia
                            component="img"
                            height={cardElemnt.avatarHeight}
                            image="https://fakeimg.pl/300x200/"
                            alt="450 X 300"
                        />
                        <CardContent className='cardContent'>

                            <Typography gutterBottom variant="h5" component="div">
                                {cardElemnt.title}
                            </Typography>
                            <Rating
                                name="simple-controlled"
                                value={Number(cardElemnt.starRange)}

                            />

                            <Typography variant="body2" color="text.secondary">
                                <span className='strikeRate'>{cardElemnt.priceStart}</span>
                                <span className='offerRate'>{cardElemnt.offerPrice}</span>
                            </Typography>


                        </CardContent>
                        <CardActions>
                            <Button className='cardBtn'
                                className={`card_${i}`}

                                onClick={updateCartCount}
                                sx={{
                                    '&:hover': {
                                        color: '#fff',
                                        backgroundColor: '#000'
                                    },
                                    border: '1px solid black',
                                    color: "#000"
                                }}>{cardElemnt.cardAction}</Button>
                        </CardActions>
                    </Card >


                )
            }
            if (cardElemnt.title === "Sale Item") {
                return (
                    <Card className='card'>
                        <CardMedia
                            component="img"
                            height={cardElemnt.avatarHeight}
                            image="https://fakeimg.pl/300x200/"
                            alt="450 X 300"
                        />
                        <CardContent className='cardContent'>

                            <Typography gutterBottom variant="h5" component="div">
                                {cardElemnt.title}
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                <span className='strikeRate'>{cardElemnt.priceStart}</span>
                                <span className='offerRate'>{cardElemnt.offerPrice}</span>
                            </Typography>


                        </CardContent>
                        <CardActions>
                            <Button className='cardBtn'
                                className={`card_${i}`}

                                onClick={updateCartCount}

                                sx={{
                                    '&:hover': {
                                        color: '#fff',
                                        backgroundColor: '#000'
                                    },
                                    border: '1px solid black',
                                    color: "#000"
                                }}>{cardElemnt.cardAction}</Button>
                        </CardActions>
                    </Card >


                )
            }
            if (cardElemnt.title === "Popular Item") {
                return (

                    <Card className='card'>
                        <CardMedia
                            component="img"
                            height={cardElemnt.avatarHeight}
                            image="https://fakeimg.pl/300x200/"
                            alt="450 X 300"
                        />
                        <CardContent className='cardContent'>

                            <Typography gutterBottom variant="h5" component="div">
                                {cardElemnt.title}
                            </Typography>
                            <Rating
                                name="simple-controlled"
                                value={Number(cardElemnt.starRange)}

                            />

                            <Typography variant="body2" color="text.secondary">
                                <span>{cardElemnt.priceStart}</span>

                            </Typography>


                        </CardContent>
                        <CardActions>
                            <Button className='cardBtn'
                                className={`card_${i}`}
                                onClick={updateCartCount}

                                sx={{
                                    '&:hover': {
                                        color: '#fff',
                                        backgroundColor: '#000'
                                    },
                                    border: '1px solid black',
                                    color: "#000"
                                }}>{cardElemnt.cardAction}</Button>
                        </CardActions>
                    </Card >


                )
            }

        })

    )

}



