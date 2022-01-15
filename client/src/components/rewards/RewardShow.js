import { RewardConsumer } from '../../providers/RewardProvider';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Modal, Button } from 'react-bootstrap';
import RewardForm from './RewardForm';

const RewardShow = ({ updateReward }) => {
  const params = useParams()
  const [reward, setReward] = useState({ desc: '', points: 0})
  const [editing, setEdit] = useState(false)

  useEffect(() => {
    axios.get(`/api/rewards/${params.rewardId}`)
      .then( res => setReward(res.data))
      .catch( err => console.log(err))
  }, [])

  const { desc, points } = reward
  return (
    <>
      <h1>Reward: {desc}</h1>
      <h3>Points: {points}</h3>
      <Button variant="warning" onClick={() => setEdit(true)}>
        Edit
      </Button>

      <Modal show={editing} onHid={() => setEdit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RewardForm
          {...reward}
          id={params.RewardId}
          updateReward={updateReward}
          setEdit={setEdit}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setEdit(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const ConnectedRewardShow = (props) => (
  <RewardConsumer>
    { value => <RewardShow {...props} {...value} />}
  </RewardConsumer>
)

export default ConnectedRewardShow;