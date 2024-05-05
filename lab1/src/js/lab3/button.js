import {useState} from 'react'

function Button(color) {
    const [jumps, setJump] = useState(0);
    console.log(color)
    function handleJump() {
        setJump(jumps + 1);
    }

    return (
        <>
            <button className={`bg-${color.color}-300 hover:bg-${color.color}-700 text-white font-bold py-2 px-4 rounded`} onClick={handleJump}>
                Jump!
            </button>
            <p>
                Jumped {jumps} times!
            </p>
        </>
    );
}

function SharedButtons({counter,clickFunction}) {
    return (
        <>
            <button className='bg-yellow-300 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded' onClick={clickFunction}>
                Spin Together!
            </button>
            <p>
                Spun {counter} times!
            </p>
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
            <Button color='red'/>
            <Button color='green'/>
            <SharedButtons counter={spins} clickFunction={handleSpin}/>
            <SharedButtons counter={spins} clickFunction={handleSpin}/>
        </>
    )
}

export default Result;