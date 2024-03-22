import Header from "./assets/Components/Header";
import Card from "./assets/Components/Card";

function App() {
  const datas = [
    {
      title: "Title 1",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. 1",
      image: {
        src: "https://via.placeholder.com/400",
        alt: "Placeholder 1",
      },
    },
    {
      title: "Title 2",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. 2",
      image: {
        src: "https://via.placeholder.com/400",
        alt: "Placeholder 2",
      },
    },
    {
      title: "Title 3",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. 3",
      image: {
        src: "https://via.placeholder.com/400",
        alt: "Placeholder 3",
      },
    },
    {
      title: "Title 4",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. 4",
      image: {
        src: "https://via.placeholder.com/400",
        alt: "Placeholder 4",
      },
    },
    {
      title: "Title 5",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. 5",
      image: {
        src: "https://via.placeholder.com/400",
        alt: "Placeholder 5",
      },
    },
    {
      title: "Title 6",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. 6",
      image: {
        src: "https://via.placeholder.com/400",
        alt: "Placeholder 6",
      },
    },
  ];
  return (
    <>
      <Header />

      <main className="cards">
        {datas.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            description={data.description}
            image={data.image}
          />
        ))}
      </main>
    </>
  );
}

export default App;
