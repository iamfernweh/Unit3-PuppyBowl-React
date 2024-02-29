function NewPlayerForm() {
    return (
        <>
            <h3>Add a new player</h3>
            <form>
                <label>
                    Name: <input type='text' name='player-name' id='player-name' placeholder="Lucky" />
                </label>
                <label>
                    Breed: <input type='text' name='player-breed' id='player-breed' placeholder="Corgi" />
                </label>
                <label>
                    Image Url: <input type='text' name='player-image' id='player-image' placeholder="image url here" />
                </label>
                <button>Submit</button>
            </form>
        </>
    );
}

export default NewPlayerForm;