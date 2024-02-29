import NewPlayerForm from "./NewPlayerForm";

function AllPlayers() {

    return (
        <>
            <h2>All Players Component</h2>
            <NewPlayerForm />
            <h3>Roster</h3>

            {dummyPlayers.map((player) => (
                <div key={player.id} className="player-card">
                    <h4>{player.name}</h4>
                    <p>{player.breed}</p>
                    <img src={player.imageUrl} alt='player image'></img>
                    <button>View Details</button>
                    <button>Remove</button>
                </div>
            ))}
        </>
    );
}

export default AllPlayers;