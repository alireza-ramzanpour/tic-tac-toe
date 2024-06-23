import React, { useRef, useState } from 'react'
import circle_icon from '../../assets/image/Circle.png'
import cross_icon from '../../assets/image/Red_X.png'
import fall_tree from '../../assets/image/fall_tree.png'
import flowers from '../../assets/image/flowers.png'
import maple_leaf from '../../assets/image/maple_leaf.png'
import snow from '../../assets/image/snow.png'
import storm from '../../assets/image/storm.png'
import summer_holidays from '../../assets/image/summer_holidays.png'
import sun from '../../assets/image/sun.png'
import tree from '../../assets/image/tree.png'
import './TicTacToe.css'


let data = ["", "", "", "", "", "", "", "", ""]

function TicTacToe(props) {

    const [selectedTheme, setSelectedTheme] = useState('');
    const [th, setTh] = useState('')
    const [playerOneName, setPlayerOneName] = useState('Player One');
    const [playerTwoName, setPlayerTwoName] = useState('Player Two');

    let [count, setCount] = useState(0)
    let [lock, setLock] = useState(false)
    let titleRef = useRef(null)
    let box1 = useRef(null)
    let box2 = useRef(null)
    let box3 = useRef(null)
    let box4 = useRef(null)
    let box5 = useRef(null)
    let box6 = useRef(null)
    let box7 = useRef(null)
    let box8 = useRef(null)
    let box9 = useRef(null)

    let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9]


    const toggle = (e, index) => {
        if (lock) {
            return 0
        }


        if (count % 2 == 0) {
            e.target.innerHTML = selectedTheme == 'default' ? `<img src= '${cross_icon}'>` : selectedTheme == 'spring' ? `<img src= '${flowers}'>` : selectedTheme == 'summer' ? `<img src= '${sun}'>` : selectedTheme == 'fall' ? `<img src= '${maple_leaf}'>` : selectedTheme == 'winter' ? `<img src= '${storm}'>` : null
            data[index] = "x";
            setCount(++count);
        } else {
            e.target.innerHTML = selectedTheme == 'default' ? `<img src= '${circle_icon}'>` : selectedTheme == 'spring' ? `<img src= '${tree}'>` : selectedTheme == 'summer' ? `<img src= '${summer_holidays}'>` : selectedTheme == 'fall' ? `<img src= '${fall_tree}'>` : selectedTheme == 'winter' ? `<img src= '${snow}'>` : null
            data[index] = "o";
            setCount(++count);
        }
        checkWin();
    }

    const checkWin = () => {
        if (data[0] == data[1] && data[1] == data[2] && data[2] != "") {
            won(data[2])
        } else if (data[3] == data[4] && data[4] == data[5] && data[5] != "") {
            won(data[5])
        } else if (data[0] == data[3] && data[3] == data[6] && data[6] != "") {
            won(data[6])
        } else if (data[1] == data[4] && data[4] == data[7] && data[7] != "") {
            won(data[7])
        } else if (data[2] == data[5] && data[5] == data[8] && data[8] != "") {
            won(data[8])
        } else if (data[0] == data[4] && data[4] == data[8] && data[8] != "") {
            won(data[8])
        } else if (data[6] == data[7] && data[7] == data[8] && data[8] != "") {
            won(data[8])
        } else if (data[2] == data[4] && data[4] == data[6] && data[6] != "") {
            won(data[6])
        } else if (!data.includes("")) {
            won('try again')
        }


    }

    const won = (winner) => {
        setLock(true)
        if (winner == "x") {
            titleRef.current.innerHTML = `Congratulations: ${playerOneName} wins :)`
            // titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon}> wins :)`
        } else if (winner == "o") {
            titleRef.current.innerHTML = `Congratulations: ${playerTwoName} wins :)`
        } else {
            titleRef.current.innerHTML = 'Try Again'
        }
    }

    const reset = () => {
        setLock(false)
        data = ["", "", "", "", "", "", "", "", ""]
        titleRef.current.innerHTML = 'Tic Tac Toe Game'
        box_array.map((e) => {
            e.current.innerHTML = ""
        })
    }






    // Modal Codes

    const [modalIsOpen, setModalIsOpen] = useState(false)


    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const handleEdittingGame = () => {
        let k = props.themes.find((item) => item == selectedTheme)
        setTh(k)
        closeModal()
    }

    // Modal Codes

    return (
        <>
            <div className={`${th} container`}>
                <h1 className='title' ref={titleRef}>
                    Tic Tac Toe Game
                </h1>
                <div className='board'>
                    <div className='row'>
                        <div className='boxes' ref={box1} onClick={(e) => { toggle(e, 0) }}></div>
                        <div className='boxes' ref={box2} onClick={(e) => { toggle(e, 1) }}></div>
                        <div className='boxes' ref={box3} onClick={(e) => { toggle(e, 2) }}></div>
                    </div>
                    <div className='row'>
                        <div className='boxes' ref={box4} onClick={(e) => { toggle(e, 3) }}></div>
                        <div className='boxes' ref={box5} onClick={(e) => { toggle(e, 4) }}></div>
                        <div className='boxes' ref={box6} onClick={(e) => { toggle(e, 5) }}></div>
                    </div>
                    <div className='row'>
                        <div className='boxes' ref={box7} onClick={(e) => { toggle(e, 6) }}></div>
                        <div className='boxes' ref={box8} onClick={(e) => { toggle(e, 7) }}></div>
                        <div className='boxes' ref={box9} onClick={(e) => { toggle(e, 8) }}></div>
                    </div>
                </div>
                <div className='buttonWrapper'>
                    <button className='customBtn' onClick={() => reset()}>Reset</button>
                    <button className='customBtn' onClick={() => openModal()}>Settings</button>
                </div>
            </div>

            {modalIsOpen &&
                <div className='modal'>
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        <h2 className='modalTitle'>Select the field</h2>
                        <form>
                            <input type='text' value={playerOneName} onChange={(e) => setPlayerOneName(e.target.value)} /> <br />
                            <input type='text' value={playerTwoName} onChange={(e) => setPlayerTwoName(e.target.value)} /> <br />

                            <select onChange={(e) => setSelectedTheme(e.target.value)}>
                                {
                                    props.themes.map((theme) => (
                                        <option value={theme}>{theme}</option>
                                    ))
                                }
                            </select>
                            <div className='buttonWrapper'>
                                <input type='button' className='cancel-btn customBtn' value="Ok" onClick={handleEdittingGame} />
                                <input type='button' className='cancel-btn customBtn' value="Close" onClick={closeModal} />
                            </div>

                        </form>
                    </div>
                </div>
            }

        </>
    )
}

export default TicTacToe
