
// import Layouts from "../Layouts/layouts";

const Home = ({posts}) => {
    console.log(posts);

    return (
        <div>

            <h1 className="title text-5xl">Home  </h1>

            <div>
            {posts.map(post => (
                    <div className="p-4 border-b" key={post.id}>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>

        </div>
    );

}
// Home.layout = page =>  <Layouts children={page} />
 export default Home;
