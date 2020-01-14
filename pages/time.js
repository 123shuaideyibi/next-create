import React, { useState } from 'react';
import dynamic from 'next/dynamic'

// 关键代码
const One = dynamic(import('../components/one'))

function Time() {
    const [nowTime, setTime] = useState(Date.now())

    const changeTime = async () => {
        const moment = await import('moment')
        setTime(moment.default(Date.now()).format())
    }

    return (
        <>
            <div>显示时间为：{nowTime}</div>
            <div><button onClick={changeTime}>改变时间格式</button></div>

            {/* 关键代码 */}
            <One />
        </>
    )
}

export default Time