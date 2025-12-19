const Card = ({ user, profession,url }) => {
  return (
    <div className="cards">
      <div className="card1">
        <div className="cardImage">
          <img src={url || 'https://via.placeholder.com/130'} alt={user} />
        </div>

        <h1>{user}</h1>
        <h2>{profession}</h2>

        <p>
          Hello, I am {user}, currently pursuing my Bachelor's in
          Computer Science and building modern UI with React.
        </p>

        <button className="cardBtn">View Profile</button>
      </div>
    </div>
  );
};

export default Card;
