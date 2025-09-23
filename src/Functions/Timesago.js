export function timeAgo(date) {
    //console.log("--------->",date);
    if (!date) return "Just now";
    
    
    const uploaded = new Date(date); 
    //console.log(uploaded);
    
    const now = new Date();    
    //console.log("---------------------------",now);
    //console.log(now.getTime());
    //console.log("-------",uploaded.getTime());
    //console.log(now.getTime() - uploaded.getTime()/1000);
    
    const diff = Math.floor((now.getTime() - uploaded.getTime()) / 1000); // seconds
    //console.log(diff/60);
    
    if (diff < 60)
    {
        return `${diff}s ago`;
    }
    else if (diff < 3600) 
    {
        return `${Math.floor(diff / 60)}m ago`;
    }
    else if (diff < 86400)
    {
        return `${Math.floor(diff / 3600)}h ago`;
    } 
    else
    {
        return `${Math.floor(diff / 86400)}d ago`;
    }
    
}

