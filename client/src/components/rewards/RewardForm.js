import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

const RewardForm = ({ addReward, updateReward, setEdit, menuId, setAdd, id, desc, prizes, purchases, points }) => {
  const [reward, setReward] = useState({desc: '', prizes: '', points: 0, purchases: ''})

  useEffect( () => {
    if (id) {
      setReward({ desc, purchases, prizes, points })
    }
  }, [])


const handleSubmit = (e) => {
  e.preventDefault()
  if (id) {
    updateReward(menuId, id, reward)
    setEdit(false)
  } else {
    addReward(menuId, reward)
    setAdd(false)
  }
  setReward({ desc: '', purchases: '', prizes: '', points: '0'})
}

return (
  <>
  <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            type="text" 
            name='desc'
            value={reward.desc}
            onChange={(e) => setReward({ ...reward, desc: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Purchases</Form.Label>
          <Form.Select 
            aria-label="purchases" 
            name='purchases'
            value={reward.purchases}
            onChange={(e) => setReward({ ...reward, purchases: e.target.value })}
          >
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Prizes</Form.Label>
          <Form.Control 
            type="text" 
            name='prizes'
            value={reward.prizes}
            onChange={(e) => setReward({ ...reward, prizes: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Points</Form.Label>
          <Form.Control 
            type="text" 
            name='points'
            value={reward.points}
            onChange={(e) => setReward({ ...reward, points: e.target.value })}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default RewardForm;