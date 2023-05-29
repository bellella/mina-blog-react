import { useState } from 'react';
import { useOutlet } from 'react-router-dom';

function FrozenOutlet() {
  let [context] = useState(useOutlet());
  return context;
}

export default FrozenOutlet;