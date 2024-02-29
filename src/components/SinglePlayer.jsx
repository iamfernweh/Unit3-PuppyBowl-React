import { useParams } from "react-router";
import { useGetSinglePlayerQuery } from "../API/playersSlice";

function SinglePlayer() {
    const { id } = useParams();
    const { data, isLoading } = useGetSinglePlayerQuery(id);
    const player = data?.data.player;

    return (
        <>
            <h2>SinglePlayer Component</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h3>{player.name}</h3>
                    <h3>{player.breed}</h3>
                </div>
            )}


            <h3>Player has the ID of {id}.</h3>
        </>
    );
}

export default SinglePlayer;