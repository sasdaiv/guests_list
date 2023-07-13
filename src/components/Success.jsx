import React from 'react';

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Successfully!</h3>
      <p>
        {count > 1
          ? `Invitations have been sent to ${count} users`
          : 'Invitation has been sent to 1 user'
        }
      </p>
      <button
        onClick={() => window.location.reload()}
        className="send-invite-btn"
      >
        Go Back
      </button>
    </div>
  );
};
