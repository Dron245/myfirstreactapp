import React from 'react'
import styles from './Block.module.css'
import { Link } from 'react-router-dom'
// import { add } from '../math'
// add()
import("../math").then(math=>math.add(2,3))
const Block = () => {
  return (
	 <div className={styles.asd}>
		Block
		<Link to='/qwe'>
			<button >lorem ipsum</button>
		</Link>
	 </div>
  )
}

export default Block
