export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return { props: { users: data } };
};

export default function Home({ users }) {
  return (
    <div>
      {users.map((user) => {
        return <p>{JSON.stringify(user)}</p>;
      })}
    </div>
  );
}
