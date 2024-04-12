import {useState} from 'react'

function Button() {
    const [jumps, setJump] = useState(0);

    function handleJump() {
        setJump(jumps + 1);
    }

    return (
        <>
            <button onClick={handleJump}>
                Jump!
            </button>
            <br/>
            <td>
                Jumped {jumps} times!
            </td>
        </>
    );
}

function SharedButtons({counter,clickFunction}) {
    return (
        <>
            <button onClick={clickFunction}>
                Spin Together!
            </button>
            <br/>
            <td>
                Spun {counter} times!
            </td>
        </>
    );
}

function Result() {
    const [spins, setSpins] = useState(0);

    function handleSpin() {
        setSpins(spins + 1);
    }
    return (
        <>
            <Button />
            <Button />
            <SharedButtons counter={spins} clickFunction={handleSpin}/>
            <SharedButtons counter={spins} clickFunction={handleSpin}/>
        </>
    )
}

export default Result;