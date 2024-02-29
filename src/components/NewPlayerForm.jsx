import { useState, refetch } from "react";
import { useGetPlayersQuery, useCreatePlayerMutation } from "../API/playersSlice";

export default function NewPlayerForm() {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const [createPlayer, result] = useCreatePlayerMutation();
    const { data, isLoading } = useGetPlayersQuery();


    function handlesSubmit(e) {
        e.preventDefault();
        createPlayer({ name, breed, imageUrl });
        refetch();
    }


    return (
        <>
            <h3>Add a new player</h3>
            <form onSubmit={handlesSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="player-name"
                        id="player-name"
                        placeholder="Waffles"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    Breed:
                    <input
                        type="text"
                        name="player-breed"
                        id="player-breed"
                        placeholder="Corgi"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                    />
                </label>
                <label>
                    Image Url:
                    <input
                        type="text"
                        name="player-image"
                        id="player-image"
                        placeholder="image link"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}