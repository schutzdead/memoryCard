import "./styles/header.css"

export function Header (props:{score:number, bestScore:number}) {

    const {score, bestScore} = props

    return(
        <div className='header'>
            <div className="title">Memory Game</div>
            <div className="description">Click only once time on each card !</div>
            <div className="resume">
                <div className="score">{score}/12</div>
                <div className="bestScore">(best score : {bestScore})</div>
            </div>
        </div>
    )
}