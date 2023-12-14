import Image from 'next/image';
import React from 'react';

import BuyMeCoffeeButton from '../components/buyMeCoffee/BuyMeCoffeeButton';

function about_me() {
  return (
    <div className="w-100 fade-in">
      <div className="w-100 d-flex justify-content-center">
        <img src="pfp.jpg" width={250} height={250} className="pfp mb-4" />
      </div>
      <div id="about_me" className="mb-4">
        <h4 className="underlined_text">
          <div className="text">About Me</div>
        </h4>
        <p className="pt-2">
          {'\u00A0\u00A0'} I'm Tim, a multilingual individual fluent in Russian,
          Greek, English, and Polish. Although currently residing in Poland,
          I've spent the majority of my life in Greece. As a digital craftsman,
          both my work and hobby revolve around creating and continuous
          learning. Finding solace in this lifestyle, I have a penchant for
          romanticizing programming.
        </p>
      </div>
      <div id="work" className="mb-4 pt-2">
        <h4 className="underlined_text">
          <div className="text">Work</div>
        </h4>
        <p className="pt-2">
          {'\u00A0\u00A0'}I am a Full Stack Developer at DemandSphere, where my
          role involves devops monitoring, design, web scraping and more.
          Proficient in both frontend and backend, I design user-friendly
          interfaces, implement features, optimize platform performance, and
          integrate external services. I conduct in-depth analyses using
          monitoring tools like Elastic, Grafana, Sentry, and RabbitMQ. I
          address production incidents across time zones, ensuring seamless
          operations and uninterrupted service delivery.
        </p>
      </div>
    </div>
  );
}

export default about_me;
