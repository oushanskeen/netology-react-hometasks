const wrapper = { paddingTop: 150, paddingLeft: 20 };
const box = {
  display: "flex",
  border: "1px solid lightGrey"
};
const boxCol = { ...box, flexDirection: "column" };
const data1 = {
  img: "Image cap",
  header: "Card title",
  body:
    "Some quick example text to build on the card title and make up the bulk on the crad's content",
  button: "Go to somewhere"
};
const data2 = {
  header: "Special title treatment",
  body: "With supporting text below as a natural lead-in to additional content",
  button: "Go to somewhere"
};
const buttonStyle = {
  background: "blue"
};
const card = {
  width: 290,
  background: "white",
  margin: 20
};
const cardTextStyle = {
  padding:20
};
const imgStyle = {
  display:"flex",
  flexDirection:"column",
  color:"lightGrey",
  justifyContent:"center",
  alignItems:"center",
  width: 290,
  height: 200,
  background: "grey"
};

const Card = ({ data }) => {
  const Image = ({ img }) => <img style={imgStyle} alt={data.img}/>
  const Header = ({ text }) => <h3>{text}</h3>;
  const Body = ({ text }) => <p>{text}</p>;
  const Button = ({ text }) => <button style={buttonStyle}>{text}</button>;
  return (
    <div style={{ ...boxCol, ...card }}>
      {data.img === undefined ? "" : <Image img={data.img} />}
      <div style={cardTextStyle}>
        <Header text={data.header} />
        <Body text={data.body} />
        <Button text={data.button} />
      </div>
    </div>
  );
};
const CardOne = () => <Card data={data1} />;
const CardTwo = () => <Card data={data2} />;
export const Cards = () => (
  <div style={wrapper}>
    <CardOne />
    <CardTwo />
  </div>
);
