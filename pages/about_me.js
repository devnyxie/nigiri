import React from 'react';
import { ProfilePicture, capitalizeText } from '../utils/utils';
import markdownToHtml from '../lib/markdownToHtml';

function about_me({ config, paragraphs }) {

  return (
    <div className="w-100 fade-in">
      <div className="w-100 d-flex justify-content-center">
        <ProfilePicture config={config} size={250} className="pfp mb-4" />
      </div>
      {paragraphs.map((paragraph, index) => {
        if (paragraph.html) {
          return (
            <div key={index} id={paragraph.paragraph_title} className="mb-4">
              <h4 className="underlined_text">
                <div className="text">
                  {capitalizeText(paragraph.paragraph_title)}
                </div>
              </h4>
              <div className="d-flex pt-2">
                <div
                  className="ps-2"
                  dangerouslySetInnerHTML={{
                    __html: paragraph.html,
                  }}
                ></div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export async function getStaticProps() {
  const config = (await import('../configuration.yaml')).default;
  
  const paragraphs = [];
  for (let key in config) {
    if (config.hasOwnProperty(key)) {
      const value = config[key];
      if (key.includes('_paragraph') && value.trim() !== '') {
        const cleanedKey = key.replace('_paragraph', '');
        const html = await markdownToHtml(value);
        paragraphs.push({
          paragraph_title: cleanedKey,
          html: html,
        });
      }
    }
  }

  return {
    props: { paragraphs },
  };
}

export default about_me;
