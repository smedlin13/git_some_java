import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RewardShow from './RewardShow';

const RewardList = ({ rewards, userId, deleteReward, updateReward }) => {

  return (
    <>
          { rewards.map( r => 
           <>
            <Link to={`/rewards/${r.id}`}>
            <h1>{r.desc}</h1>
            <h2>Points: {r.points}</h2>
            </Link>
           </>
          )}
    </>
  )
}

export default RewardList;