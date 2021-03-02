import React from "react";
import pf from "petfinder-client";
import { navigate } from "@reach/router"

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET,
});

class Details extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true,
            id: this.props.id
        }
    }

    componentDidMount(){
        petfinder.pet.get({
            output: "full",
            id: this.state.id
        }).then( data => {
            const pet = data.petfinder.pet;
            let breed;
            if (Array.isArray(pet.breeds.breed)){
                breed = pet.breeds.breed.join(', ')
            } else {
                breed = pet.breeds.breed;
            }

            this.setState({
                name: pet.name,
                animal: pet.animal,
                location: `${pet.contact.city}, ${pet.contact.state}`,
                description: pet.description,
                media: pet.media,
                breed,
                loading: false,
                id: this.propsid
            });
        })  .catch(() => {
            navigate("/")
        });
    }

    render() {
        if (this.state.loading){
            return <h1> loading.. </h1>
        }
        const {animal, breed, location, description, name, id, media } = this.state;

        return (
            <div>
                <div>
                    <img src={media.photos.photo[0].value} alt={name}/>
                </div>
                <div>
                    <h1> {name} </h1>
                    <h2> {animal} - {breed} - {location} - id:{id} </h2>
                    <p> {description} </p>
                </div>
            </div>
        );
    }
}

export default Details