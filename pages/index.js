export async function getServerSideProps(context) {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function Home() {
  return <h1 className="text-3xl font-bold">Hello world!</h1>;
}
