'use client';

import React, { useState } from 'react';

const Descriptor = () => {

  const descriptors = ["Software Engineer", "Full Stack Developer", "Problem Solver", "Collaborator"]

  const [descriptor, setDescriptor] = useState(descriptors[0])

  const changeDescriptor = () => {
    const currentIndex = descriptors.indexOf(descriptor);
    const nextIndex = (currentIndex + 1);
    if (nextIndex < descriptors.length) {
      setDescriptor(descriptors[nextIndex]);
    } else {
      setDescriptor(descriptors[0]);
    }
  }

  setTimeout(changeDescriptor, 2000);

  return (
    <div className="text-2xl text-blue-500 pt-4">
      {descriptor}
    </div>
  )
}

export default Descriptor;