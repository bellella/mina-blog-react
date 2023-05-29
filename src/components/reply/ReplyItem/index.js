import React from 'react';
import { formatDate } from "../../../utils/format"

function ReplyItem({item: {userName, email, content, createdAt}}) {
  return (
    <li className="comm_item">
      <div className="comm_name">
        {userName}
      </div>
      <div className="comm_info">
      <span>{formatDate(createdAt)}</span><span>{email}</span>
      </div>
      <div className="comm_text">
        {content}
      </div>
    </li>
  );
}

export default ReplyItem;