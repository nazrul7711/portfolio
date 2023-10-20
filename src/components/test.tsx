
import React from 'react'

const test = () => {
  return (
    <div>test</div>
  )
}

export default test
//initial:{},animate:{},transition:{},whileHover = {{}},
//animate fontSize,opacity,color , rotateZ mariginTop
//initial:{{x:"-100vw"}}
//animate:{{x:0}}
//transition:{type:"spring","tween",stiffness:120 high or low effect on spring , work on tween ?}
//does duration work on opacity 0 to 1 ? duration , ease:"easeIn"
//diff between tween and spring
//can u use delay with both tween and spring
//whileHover:{textshadow and box shadow,originX:0,scale sth with spring}
//variants and how to propagate properties defined in the parent
//finish parent animation before child animation occur when:""
//what will mass and damping do
//staggerChildren
//keyframes scale:1.1,transition:{yoyo:10 or Infinity}
//AnimatePresence exit={{y:-1000}}
//svg hidden:{opacity:0,pathLength:0}
//drag dragConstraints={{}}
