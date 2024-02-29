export default function NewPlayerForm() {
    return (
        <>
            <h3>Add a new player</h3>
            <form>
                <label>
                    Name:
                    <input
                        type="text"
                        name="player-name"
                        id="player-name"
                        placeholder="Lucky"
                    />
                </label>
                <label>
                    Breed:
                    <input
                        type="text"
                        name="player-breed"
                        id="player-breed"
                        placeholder="dalmatian"
                    />
                </label>
                <label>
                    Image URL:
                    <input
                        type="text"
                        name="player-image"
                        id="player-image"
                        placeholder="https://placedog.net/640/480?random"
                    />
                </label>
                <button>Submit</button>
            </form>
        </>
    );
}