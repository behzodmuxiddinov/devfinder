import React from 'react'
import { useEffect } from "react"

export const useSubmitEnter = (callback, targetKey) => {
    useEffect(() => {
        const pressKey = (e) => {
            if(e.key === targetKey){
                callback()
            }
        }
        document.addEventListener("keydown", pressKey)
        return () => {
            document.removeEventListener("keydown", pressKey)
        }
    }, [callback, targetKey])
}