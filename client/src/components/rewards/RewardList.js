import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RewardShow from './RewardShow';

const RewardList = ({ rewards, userId, deleteReward, updateReward }) => {

  return (
    <>
          { rewards.map( r => 
           <>
            <RewardShow
            {...r}
            userId={userId}
            deleteReward={deleteReward}
            updateReward={updateReward}
            />
           </>
          )}
    </>
  )
}

export default RewardList;