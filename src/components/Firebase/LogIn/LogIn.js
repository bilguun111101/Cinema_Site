import React, { Component } from 'react';
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../fireStore"

export const useGetDocLogIn = path => {

    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try{
                const snapshot = await getDocs(collection(db, path));
                snapshot.forEach(el => {
                    setData(old => {
                        let saveData = old;
                        saveData = [...saveData, el.data()]
                        return(
                            old = saveData
                        )
                    })
                })
            } catch(err) {
                console.log(err.message);
            }
        }
        getData();
    }, [])
    return data;
}