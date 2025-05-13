'use client'

import React, { ChangeEvent, useState } from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <div className={'template'}>
            {children}
            <div className="global-input">
                <p>Input z template co resetuje stan pomiędzy segmentami</p>
                <input type="text" value={value} onChange={onChange} />
            </div>
        </div>
    )
}
