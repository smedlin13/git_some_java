import { useEffect, useState } from 'react';
import { RewardConsumer } from '../../providers/RewardProvider';
import RewardList from './RewardList';
import { useParams } from 'react-router-dom';
import RewardForm from './RewardForm';
import { Button, Modal } from 'react-bootstrap';

const Rewards = ({ getAllRewards, rewards, addReward }) => {
  const [adding, setAdd] = useState(false);

  const params = useParams()

  useEffect( () => {
    getAllRewards(params.rewardsId);
  }, [])

  return (
    <>
      <h1>Rewards</h1>
      <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Reward</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RewardForm
            addReward={addReward}
            setAdd={setAdd}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setAdd(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <RewardList rewards={rewards} />
    </>
  )
}

const ConnectedRewards = (props) => (
  <RewardConsumer>
    { value => <Rewards {...props} {...value} />}
  </RewardConsumer>
)

export default ConnectedRewards;