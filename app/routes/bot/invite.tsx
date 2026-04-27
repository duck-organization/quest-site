import { useEffect } from 'react';

export default function Invite() {
    useEffect(() => {
        window.location.replace(
            'https://discord.com/oauth2/authorize?client_id=1494686224508522579&permissions=4504974218751046&scope=bot%20applications.commands'
        );
    }, []);
    
    return <p>Redirecting to Discord...</p>;
}