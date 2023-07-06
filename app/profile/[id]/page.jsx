"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Profile from "@components/Profile";


const ProfileUser = ({params}) => {

    const searchParams = useSearchParams();
    const userName = searchParams.get("name");

    const [userPosts, setUserPosts] = useState([]);

    console.log(userPosts)


     useEffect(() => {
      const fetchPosts = async () => {
        const res = await fetch(`/api/users/${params?.id}/posts`);
        const data = await res.json();
        setUserPosts(data);
      }

      if(params?.id) fetchPosts();
    }, []) 
    

    return (
        <Profile 
        name={`${userName}'s `}
        desc={`Welcome to ${userName}'s profile page`}
        data={userPosts}
    />
    )
}

export default ProfileUser