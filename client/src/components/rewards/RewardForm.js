import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

const RewardForm = ({ addReward, updateReward, setEdit, menuId, setAdd, id, desc, points }) => {
  const [reward, setReward] = useState({desc: '', points: 0})

  useEffect( () => {
    if (id) {
      setReward({ desc, points })
    }
  }, [])


const handleSubmit = (e) => {
  e.preventDefault()
  if (id) {
    updateReward(id, reward)
    setEdit(false)
  } else {
    addReward(reward)
    setAdd(false)
  }
  setReward({ desc: '', points: 0})
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