const newFormHandler = async (event) => {
  event.preventDefault();

  const description = document.querySelector("#comment").value.trim();
  const blog_id = event.target.getAttribute("data-blog_id");

  if (description) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ description, blog_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to create comment");
    }
  }
};

const updateFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#update-name").value.trim();
  const description = document.querySelector("#update-desc").value.trim();
  const id = event.target.getAttribute("data-blog_id");

  if (name && description) {
    const response = await fetch(`/api/blogs/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to update post");
    }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute("data-id")) {
//     const id = event.target.getAttribute("data-id");

//     const response = await fetch(`/api/comments/${id}`, {
//       method: "DELETE",
//     });

//     if (response.ok) {
//       document.location.reload();
//     } else {
//       alert("Failed to delete comment");
//     }
//   }
// };

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newFormHandler);

// document
//   .querySelector(".comment-list")
//   .addEventListener("click", delButtonHandler);
