export async function generateStaticParams() {
  const posts = [1, 2, 3];
  return posts.map((post) => ({
    id: post,
  }));
}

const Project = ({ params }) => {
  return <div>Project {params.id}</div>;
};

export default Project;
