import "./Project.css";

const Project = () => {
  return (
    <>
      <section className="project" id="project">
        <div className="project-container">
          <div className="project-title">
            <h4>My Projects</h4>
            <p>Here you will find all my engineering projects</p>
          </div>
          <div className="projects-list">
            <div className="project-item-1">
              <i className="fa-solid fa-brain"></i>
              <h4>Robotics ARM</h4>
              <p>
                Robotic arms, aptly named because they resemble a human arm, are
                typically mounted to a base. The arm contains multiple joints
                that act as axes that enable a degree of movement.
              </p>
              <div className="btn" style={{ marginTop: "80px" }}>
                <button type="button" className="view-btn">
                  View
                </button>
              </div>
            </div>
            <div className="project-item-2">
              <i className="fa-solid fa-landmark"></i>
              <h4>Solar Power System</h4>
              <p>
                Photovoltaic (PV) systems use solar panels, either on rooftops
                or in ground-mounted solar farms, converting sunlight directly
                into electric power. Concentrated solar power (CSP) systems use
                mirrors or lenses to concentrate sunlight to extreme heat to
                make steam, which is converted into electricity by a turbine.
              </p>
              <div className="btn" style={{ marginTop: "10px" }}>
                <button type="button" className="view-btn">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
