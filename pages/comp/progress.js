import React from 'react'
import { Spinner } from 'react-activity'
import "react-activity/dist/Spinner.css";
import progress from '../css/progress.module.css';

export default function ProgressActivity() {
  return (
    <div className={progress.activity_parent}>
    <Spinner color="#000000" size={32} speed={1} animating={true} />
    </div>
  )
}
