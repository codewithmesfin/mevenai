'use client';

import React from 'react'
import Typewriter from 'typewriter-effect';

export default function TypewriterEffect({items}:any) {
  return <Typewriter
  options={{
    strings:items,
    autoStart: true,
    loop: true,
  }}
/>
}
