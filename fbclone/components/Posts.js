import Post from "./Post";

function Posts() {
  return (
    <div>
            <Post
              name={`Ana Laura`}
              message={`CONTATO:
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              E-mail: analauraoferreira1@gmail.com ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              GitHub: github.com/alofrrr ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              LinkedIn: linkedin.com/in/analauraoliveiraferreira`}
              image={"https://i.ibb.co/k2HPMDy/80932554.jpg"}
            />

            <Post
              name={`Ana Laura`}
              image={"https://i.ibb.co/k2HPMDy/80932554.jpg"}
              postImage={"https://i.ibb.co/85fpZ0z/Ol-Recruiter-1.png"}
            />
    </div>
  );
}

export default Posts;