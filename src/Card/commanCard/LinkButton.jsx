import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../../styles/LinkButton.module.css"

function LinkButton(props) {
  return (
    <Link className={styles.button} to={"character/" + props.link} >More info..</Link>
  )
}

export default LinkButton