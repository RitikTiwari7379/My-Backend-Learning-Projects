export const addtoserver = async (_id, title, body, reactions, userId, tags) => {
  const response = await fetch("http://localhost:3002/api/blog/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ _id, title, body, reactions, userId, tags }),
  });
  const item = await response.json();
  return item;
};

export const getfromserver = async()=>{
  const response = await fetch( "http://localhost:3002/api/blog/posts" ,{
    method : "GET",
  });
  const item = await response.json();
  return item;
}

export const deleteElementinserver = async(id)=>{
  const response = await fetch(`http://localhost:3002/api/blog/posts/${id}`,{
    method: "DELETE",
  });
  return id;
}
