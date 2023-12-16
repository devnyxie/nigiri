import React, { useEffect, useState } from 'react';
import { ProfilePicture, capitalizeText, findKeys } from '../utils/utils';
import markdownToHtml from '../lib/markdownToHtml';

function about_me({ config }) {
  const [paragraphs, setParagraphs] = useState([]);
  useEffect(() => {
    let new_paragraphs = [];
    for (let key in config) {
      if (config.hasOwnProperty(key)) {
        const value = config[key];
        if (key.includes('_paragraph') && value.trim() !== '') {
          const cleanedKey = key.replace('_paragraph', '');
          new_paragraphs.push({
            paragraph_title: cleanedKey,
            paragraph_text: value,
          });
        }
      }
    }
    setParagraphs(new_paragraphs);
  }, []);

  return (
    <div className="w-100 fade-in">
      <div className="w-100 d-flex justify-content-center">
        <ProfilePicture config={config} size={250} className="pfp mb-4" />
      </div>
      {paragraphs.map((paragraph, index) => {
        let markdown = markdownToHtml(paragraph.paragraph_text);

        if (markdown) {
          return (
            <div id={paragraph.paragraph_title} className="mb-4">
              <h4 className="underlined_text">
                <div className="text">
                  {capitalizeText(paragraph.paragraph_title)}
                </div>
              </h4>
              <div className="d-flex pt-2">
                <div
                  className="ps-2"
                  dangerouslySetInnerHTML={{
                    __html: markdown,
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

export default about_me;
