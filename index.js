const element = (
  // Write your code here.
  <div className="congrats-card">
    <h1>Congratulations</h1>
    <div className="profile-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-image"
      />
      <h1 className="heading">Kiran V</h1>
      <p className="paragraph">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="profile-sub-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
