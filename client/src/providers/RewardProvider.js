import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const RewardContext = React.createContext();
export const RewardConsumer = RewardContext.Consumer;

const RewardProvider = ({ children }) => {
  const [rewards, setRewards] = useState([])

  const navigate = useNavigate()

  const getAllRewards = () => {
    axios.get('/api/rewards')
      .then( res => setRewards(res.data))
      .catch( err => console.log(err))
  }

  const addReward = (reward) => {
    axios.post('/api/rewards', { reward } )
      .then( res => setRewards([...rewards, res.data]))
      .catch( err => console.log(err))
  }

  const updateReward = (rewardId, reward) => {
    axios.put(`/api/rewards/${rewardId}`, { reward })
      .then( res => {
        const newUpdatedRewards = rewards.map( r => {
          if (r.id === rewardId) {
            return res.data
          }
          return r
        })
        setRewards(newUpdatedRewards)
        navigate(`/rewards/${rewardId}`)
      })
      .catch( err => console.log(err))
  }

  return (
    <RewardContext.Provider value={{
      rewards,
      getAllRewards: getAllRewards, 
      addReward: addReward, 
      updateReward: updateReward, 
    }}>
      { children }
    </RewardContext.Provider>
  )
}

export default RewardProvider;