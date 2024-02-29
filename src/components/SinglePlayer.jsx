import { useParams } from "react-router";

function SinglePlayer() {
    const { id } = useParams();
    return (
        <>
            <h2>SinglePlayer Component</h2>
            <h3>Player with id: {id} goes here</h3>
        </>
    );
}

export default SinglePlayer;