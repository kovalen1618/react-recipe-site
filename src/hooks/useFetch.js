import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {
        const controller = new AbortController()

        const fetchData = async () => {
            setIsPending(true)

            try {
                const res = await fetch(url, { signal: controller.signal })
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                const data = await res.json()

                setIsPending(false)
                setData(data)
                setError(null)
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("The fetch was aborted") 
                } else {
                    setIsPending(false)
                    setError('Could not fetch the data')
                }
            }
        }

        fetchData()

        return () => {
            controller.abort()
        }
    }, [url])

    return { data, isPending, error }
}

/* This is a custom hook called useFetch that allows you to make a request to a given url and handle the response. 
It uses the useState and useEffect hooks from React.

The useState hook is used to declare three state variables: data, isPending, and error. 
data is used to store the data returned from the fetch request, isPending is a boolean that indicates whether the fetch request 
is in progress, and error is used to store any errors that may occur during the fetch request.

The useEffect hook is used to perform the actual fetch request and update the state variables accordingly. 
It takes a function as an argument, which is called every time the component renders. 
In this case, the function sets up a new AbortController and uses it to make an asynchronous fetch request to the given url. 
If the request is successful, the response data is stored in the data state variable and the isPending state variable 
is set to false. If there is an error, the error state variable is set to a string message and isPending is set to false. 
The AbortController is used to cancel the fetch request if the component unmounts before the request is complete.

The useFetch hook returns an object containing the current values of data, isPending, and error, which can be destructured 
and used in the component that calls the hook. */