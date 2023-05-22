import React from "react";

const commentData = [
  { name: "XYZ", text: "Lorem Ipsum heheh hhehehe heehe", replies: [] },
  { name: "XYZ", text: "Lorem Ipsum heheh hhehehe heehe", replies: [] },
  { name: "XYZ", text: "Lorem Ipsum heheh hhehehe heehe", replies: [] },
  {
    name: "XYZ",
    text: "Lorem Ipsum heheh hhehehe heehe",
    replies: [
      { name: "XYZ", text: "Lorem Ipsum heheh hhehehe heehe", replies: [] },
      { name: "XYZ", text: "Lorem Ipsum heheh hhehehe heehe", replies: [] },
      { name: "XYZ", text: "Lorem Ipsum heheh hhehehe heehe", replies: [] },
      {
        name: "XYZ",
        text: "Lorem Ipsum heheh hhehehe heehe",
        replies: [
          { name: "XYZ", text: "Lorem Ipsum heheh hhehehe heehe", replies: [] },
          { name: "XYZ", text: "Lorem Ipsum heheh hhehehe heehe", replies: [] },
          { name: "XYZ", text: "Lorem Ipsum heheh hhehehe heehe", replies: [] },
          { name: "XYZ", text: "Lorem Ipsum heheh hhehehe heehe", replies: [] },
          {
            name: "XYZ",
            text: "Lorem Ipsum heheh hhehehe heehe",
            replies: [
              {
                name: "XYZ",
                text: "Lorem Ipsum heheh hhehehe heehe",
                replies: [],
              },
              {
                name: "XYZ",
                text: "Lorem Ipsum heheh hhehehe heehe",
                replies: [],
              },
              {
                name: "XYZ",
                text: "Lorem Ipsum heheh hhehehe heehe",
                replies: [
                  {
                    name: "XYZ",
                    text: "Lorem Ipsum heheh hhehehe heehe",
                    replies: [],
                  },
                  {
                    name: "XYZ",
                    text: "Lorem Ipsum heheh hhehehe heehe",
                    replies: [],
                  },
                  {
                    name: "XYZ",
                    text: "Lorem Ipsum heheh hhehehe heehe",
                    replies: [
                      {
                        name: "XYZ",
                        text: "Lorem Ipsum heheh hhehehe heehe",
                        replies: [],
                      },
                      {
                        name: "XYZ",
                        text: "Lorem Ipsum heheh hhehehe heehe",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-xl my-2">
      <img
        className="w-12 h-12"
        src="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          <div className="pl-5 border border-l-black ml-5">
            <CommentsList comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p=2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
