// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

interface GitHubUserData {
    followers: number;
    avatar_url: string;
}

function Github() {
    const data = useLoaderData() as GitHubUserData | null;

    // const [data, setData] = useState<GitHubUserData | null>(null); // Initialize as null or undefined
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`https://api.github.com/users/arsalanlal414`);
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch data');
    //             }
    //             const userData: GitHubUserData = await response.json();
    //             setData(userData);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);
    
    return (
        <div className='text-center bg-gray-600 m-4 text-white text-3xl font-bold p-4'>
            Github Followers: {data?.followers}
            <img className='mt-6 m-auto' width={300} src={data?.avatar_url} alt="github picture" />    
        </div>
    );
}
 
export default Github;

export const githubInfoLoader = async (): Promise<GitHubUserData> =>{
    const response = await fetch(`https://api.github.com/users/arsalanlal414`);
    return response.json()
}