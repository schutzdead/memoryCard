import './styles/body.css'
import { useEffect, useState } from 'react'
import { alea } from './object';

export function Body (props:{currentScore:number, score:any, bestScore:any}) {    
    
    const {score, bestScore, currentScore} = props;

    const [randomList, setRandomList] = useState(alea())
    const [previousShoot, setPreviousShoot]:any= useState([0])

    useEffect(() => {
        setRandomList(alea());

        return () => {
            setRandomList([])
        }
    },[currentScore])

    function changeScore (element:any) {
        let yourImg = Array.from([element.target.alt])

        for(const eachNumber of previousShoot) {
            if(eachNumber == yourImg){
                score(0)
                bestScore(currentScore)
                setPreviousShoot([0])
                break
            } else {
                setPreviousShoot(previousShoot.concat(yourImg))
                score(currentScore+1)
            }
        }    
        
    }

    return(
        <div className='body'>

            {randomList.map((element:any) => {
                if(element!==undefined){          
                return(
                    <div key={element.uniqid} className="cardContainer" onClick={(e) => changeScore(e)}>
                        <img src={element.path} alt={element.uniqid} />
                        <div className="legend">{element.name}</div>
                    </div>
                )
                }
            })}
        </div>
    )
}