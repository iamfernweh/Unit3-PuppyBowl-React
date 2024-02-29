import NewPlayerForm from "./NewPlayerForm";
import { useGetPlayersQuery } from "../API/playersSlice";
import { useNavigate } from "react-router";

export default function AllPlayers() {

    const { data, isLoading } = useGetPlayersQuery();
    const navigate = useNavigate();

    return (
        <>
            <h2>All Players component</h2>
            <NewPlayerForm />
            <h3>Roster</h3>
            {!isLoading ? (data?.data?.players.map((player) => (
                <div key={player.id} className="player-card">
                    <h4>{player.name}</h4>
                    <p>{player.breed}</p>
                    <img src={player.imageUrl} alt="player image" />
                    <br />
                    <button onClick={() => navigate(`/players/${player.id}`)}>View Details</button>
                    <button>Remove</button>
                </div>
            ))
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}