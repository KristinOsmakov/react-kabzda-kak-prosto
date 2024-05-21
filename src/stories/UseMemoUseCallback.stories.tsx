import {useCallback, useMemo, useState} from "react";
import React from 'react';

export default {
    title: 'UseMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            resultA = resultA * i;

        }
        return  tempResultA;
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }
    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div><div>
            Result for b: {resultB}
        </div>
    </>
}

export const HelpsForRectMemoExample = () => {

}
const UsersSecret = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)
        }</div>
}
const Users = React.memo(UsersSecret);
export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem"])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1);
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers);
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"])

    const memoizedAddBook = useMemo( () => {
        return () => {
            console.log(books)
            const newUsers = [...books, 'Angular' + new Date().getTime()]
            setBooks(newUsers)
        }}, [books]
    )
    const memoizedAddBook2 = useCallback ( () => {
        return () => {
            console.log(books)
            const newUsers = [...books, 'Angular' + new Date().getTime()]
            setBooks(newUsers)
        }}, [books]
    )

    const addBook = () => {
        const newUsers = [...books, 'Angular' + new Date().getTime()]
        setBooks(newUsers);
    }
    // const memoizedAddBook = useMemo(() => {return addBook}, [books]);
    //
    // const newArray = useMemo(() => {
    //     return books.filter(u => u.toLowerCase().indexOf('a') > -1);
    // }, [books])



    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book  addBook={memoizedAddBook2}/>
    </>
}

type BookSecretPropsType = {

    addBook: () => void}
const BooksSecret = (props: BookSecretPropsType) => {
    debugger
    console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}
const Book = React.memo(BooksSecret)