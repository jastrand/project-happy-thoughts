import React, { useState } from 'react';
import './messagelist.css'

export const Hearts = (props) => {
  const [heartClicks, setHeartClicks] = useState((props.hearts));

  const likeClick = () => {
    fetch(`https://happy-thoughts-api-johanna.herokuapp.com/${props.id}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        setHeartClicks(heartClicks + 1)
      })
  };

  return (
    <div>
      <button
        className={heartClicks > 0 ? 'liked' : 'unliked'}
        onClick={() => { likeClick() }}>
        <span role='img' aria-label='Click to like'>{'❤️  '}</span>
      </button>
      x{heartClicks}
    </div >
  )
}
