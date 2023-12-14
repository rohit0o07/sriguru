import React from "react";
import "../components/Container2.css";
import image1 from "../assets/images/card1.jpeg";
import image2 from "../assets/images/card2.jpeg";
import image3 from "../assets/images/card3.jpeg";

const Container4 = () => {
  return (
    <div className="card-main">
      
      <div className="card-subMain">
        <div className="card-image">
         
          <img src={image1} alt="text" className="img" title="Sri Gandham & Red SandalWood FarmLand @ Podili,Prakasam Dist,AP" />
          <a class="badge badge-primary p-2" title="search for post" href="/search/tags/post">post</a>
        </div>
        <div className="card-content">
          <h1>
            <span>
              Sri Gandham & Red SandalWood FarmLand @ Podili,Prakasam Dist,AP
            </span>
          </h1>
          <h5>By Sri Guru Infra Builders PVt Ltd | 27th September,2023</h5>
          <p>
            ***GET HIGH RETURNS WITH VERY LOW INVESTMENT*** Sri Gandham & Red
            Sandalwood Farmland for sale @ Podili, Prakasam District, AP SRI
            LAHARI PROJECTS MARKETING & MAINTENANCE BY SRI GURU INFRA BUIL...
          </p>
          <h6>...Read More</h6>
        </div>
      </div>

      <div className="card-subMain1">
        <div className="card-image">
          <img src={image1} alt="text" className="img" />
          <a class="badge badge-primary p-2" title="search for post" href="/search/tags/post">post</a>
        </div>
        <div className="card-content1">
          <h1>
            <span>
              Farm Land Plots for sale-Exotic Fruit Plantation &Commercial
              TreePlantatio...
            </span>
          </h1>
          <h5>By Sri Guru Infra Builders Pvt Ltd|19th September,2023 </h5>
          <p>
            Invest in Our SRI GURU INFRA BUILDERS Farm-Land plots and Grow
            Healthier & Wealthy.Best Farmland Destination Hill View @Zaheerabad
            Near to Mahindra 3rdGate & 4km from Zaheerabad Xroad. LOW...
          </p>
          <h6>...Read More</h6>
        </div>
      </div>

      <div className="card-subMain2">
        <div className="card-image">
          <img src={image2} alt="text" className="img" />
          <a class="badge badge-primary p-2" title="search for post" href="/search/tags/post">post</a>
        </div>
        <div className="card-content2">
          <h1>
            <span>
              LATEST NEWS:30467kg sandalwood sold at e-auction,fetching
              ₹37.22crore
            </span>
          </h1>
          <h5>By Sri Guru Infra Builders Pvt Ltd|18th September,2023</h5>
          <p>
            Sandalwood from Marayur,other divisions in the State, and cultivated
            by farmers a single tree fetches ₹1.25 crore Marayur sandalwood
            received a positive response in the auction that concluded on...
          </p>
          <br />
          <h6>...Read More</h6>
        </div>
      </div>

      <div className="card-subMain3">
        <div className="card-image">
          <img src={image3} alt="text" className="img" />
          <a class="badge badge-primary p-2" title="search for post" href="/search/tags/post">post</a>
        </div>
        <div className="card-content3">
          <h1>
            <span>LATEST NEWS: Red Sandalwood Garden opened at Raj Bhavan</span>
          </h1>
          <h5>By Sri Guru Infra Builders Pvt Ltd|18th September, 2023</h5>
          <p>
            Panaji:To mark Prime Minister NarendraModi’s 73rd birthday,Governor
            PS ShreedharanPillai inaugurated the‘Rakta Chandan Udyan'Red
            Sandalwood Garden at the Raj Bhavan campus on Friday.As...
          </p>
          <h6>...Read More</h6>
        </div>
      </div>
    </div>
  );
};

export default Container4;
