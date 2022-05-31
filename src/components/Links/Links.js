import React from "react";
import "./Links.css";

const Links = () => {
  return (
    <>
    <div className="links">
      <div className="left_Container">
        <a
          href="https://stackoverflow.co/teams/integrations/microsoft-teams"
          className="left___Items"
        >
          <img
            src="https://cdn.sstatic.net/Img/home/illo-integrations-left.png?v=0a97d470e180"
            style={{ width: "421px", height: "465px" }}
            className="img_Item"
            alt=""
          />
          <div className="fs-subheading">
            <img
              src="https://logos-world.net/wp-content/uploads/2021/04/Microsoft-Teams-Emblem.png"
              className="fs-subheading-img"
              alt=""
            />
          </div>
        </a>
      </div>
      <div className="mid_Container">
        <h2 className="mid_Container-text">
          Integrates with and improves other tools
        </h2>
        <p className="mid_Container-desc">
          All plans come with integrations for ChatOps tools
          <a
            href="https://stackoverflow.co/teams/integrations/slack"
            className="slackTag"
          >
            Slack
          </a>
          &
          <a
            href="https://stackoverflow.co/teams/integrations/microsoft-teams"
            className="slackTag"
          >
            Microsoft Teams
          </a>
          in order to cut down on pings, limit distractions and make the tools
          even more powerful. Business and Enterprise customers get access to
          Jira, GitHub & Okta integrations.
        </p>
        <div className="socialMediaIcons">
          <a href="/teams/integrations/slack" className="socialMediaImage">
            <i className="icon2 fa-brands fa-slack"></i>
          </a>
          <a href="/teams/integrations/slack" className="socialMediaImage">
            <i className="icon2 fa-solid fa-people-group"></i>
          </a>
          <a href="/teams/integrations/slack" className="socialMediaImage">
            <i className="icon2 fa-brands fa-github"></i>
          </a>
          <a href="/teams/integrations/slack" className="socialMediaImage">
            <i className="icon2 fa-brands fa-jira"></i>
          </a>
          <a href="/teams/integrations/slack" className="socialMediaImage">
            <i className="icon2 fa-brands fa-stack-overflow"></i>{" "}
          </a>
        </div>
      </div>
      <div className="right_Container">
          <a href="https://stackoverflow.co/teams/integrations/slack" className="right_Container-link">
              <div className="slackIcon">
              <i className="icon3 fa-brands fa-slack"></i>
                <h5 className="slack_text">Slack</h5>
              </div>
              <img src="https://cdn.sstatic.net/Img/home/illo-integrations-right.png?v=90c26b9154c7" className="right_Container-image" style={{width : '425px', height : '470px'}} alt="" />
          </a>
      </div>
    </div>
          <div className="premiumText">Some of the premium features available with paid tiers </div>
</>
  );
};

export default Links;
