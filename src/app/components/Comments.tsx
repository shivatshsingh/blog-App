"use client";
import React, { useEffect, useState } from "react";
type props = {
  articleName: string;
};

// type submitcomment = {
//   Name : string;
//   Comment: string;
// }

function Comments({ articleName }: props) {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [comments, setComments] = useState([]);
  async function submitComment() {
    if (comment == "" || name == "") {
      alert("comment or name is empty");
      return;
    }

    const body = {
      name: name,
      description: comment,
      article: articleName,
    };
    try {
      const data = await fetch("http://localhost:5000/api/v1/comment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.log("error while submitting comment", error);
    }

    setComment("");
    setName("");

    getComments();
  }

  async function getComments() {
    try {
      const data = await fetch("http://localhost:5000/api/v1/comment");
      const res = await data.json();

      const filteredArray = res.comments.filter(
        (item: any) => item.article === `${articleName}`
      );

      console.log(filteredArray);
      setComments(filteredArray);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getComments();
  }, []);
  return (
    <div className="flex flex-col w-full items-center">
      <span className="font-semibold">Comments</span>
      <label> Name</label>
      <input
        className="w-1/6 rounded-md border-2 p-2 text-lg focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
        type="text"
        required
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label> Comment</label>

      <textarea
        className="w-1/3 h-[200px] rounded-md border-2 p-2 text-lg focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
        rows={4}
        cols={50}
      />
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5"
        onClick={() => {
          submitComment();
        }}
      >
        submit
      </button>

      <div className="w-1/2">
        {comments.map((comment: any) => (
          <div className="">
            <div className="font-semibold" key={comment._id}>
              {comment.name}
            </div>
            <div className="">{comment.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
