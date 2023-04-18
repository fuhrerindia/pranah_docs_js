import Link from 'next/link'
import React from 'react'
import style from '../css/result.module.css';

export default function Result({link, title, snap}) {
  return (
    <div className={style.search_result}>
        <Link href={`${link}`} className={style.search_result_a}>
            <span>{title}</span>
        </Link>
        <p className={style.search_result_p}>{snap}</p>
    </div>
  )
}
