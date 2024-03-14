import Comments from "@/app/components/Comments";
import Home_button from "@/app/components/Home_button";
import React from "react";

export default function page() {
  return (
    <div className="pl-10 pt-5 w-full">
      <div className="bg-blue-500 text-white font-semibold p-2 w-16 rounded-md mb-10">
        <Home_button />
      </div>
      <span className="text-5xl font-semibold">article1</span>
      <div className="font-sans bg-gray-100 p-4">
        <h2 className="border-b-2 border-gray-700 pb-2 text-2xl font-bold mb-4">
          The Geography of India: A Diverse Tapestry of Landscapes and Cultures
        </h2>

        <h3 className=" pb-2 text-xl font-semibold mb-2">Physical Features</h3>
        <p className="mb-4">
          One of the most prominent features of India's geography is the
          majestic Himalayan mountain range, which serves as a natural northern
          boundary. This vast mountainous region is home to some of the world's
          highest peaks, including Mount Everest. The Himalayas not only protect
          India from the harsh cold winds of Central Asia but also contribute to
          the country's rich river systems.
        </p>

        <h3 className=" pb-2 text-xl font-semibold mb-2">Climate</h3>
        <p className="mb-4">
          India experiences a diverse range of climates, owing to its vast size
          and varied topography. The country can be broadly categorized into
          four climatic zones...
        </p>

        <h3 className=" pb-2 text-xl font-semibold mb-2">Natural Resources</h3>
        <p className="mb-4">
          India is blessed with a wealth of natural resources that have played a
          significant role in shaping its economy. Some key resources include...
        </p>

        <h3 className=" pb-2 text-xl font-semibold mb-2">
          Influence on Culture and People
        </h3>
        <p className="mb-4">
          The geographical diversity of India has a profound impact on its
          culture, traditions, and ways of life. Different regions have distinct
          languages, cuisines, art forms...
        </p>

        <h3 className=" pb-2 text-xl font-semibold mb-2">
          Economic Significance
        </h3>
        <p className="mb-4">
          India's geography has a direct impact on its economy, shaping the type
          of economic activities that thrive in different regions...
        </p>

        <h3 className=" pb-2 text-xl font-semibold mb-2">
          Challenges and Opportunities
        </h3>
        <p className="mb-4">
          While India's geography has provided numerous advantages, it also
          poses challenges that the country must address for sustainable
          development...
        </p>

        <h3 className=" pb-2 text-xl font-semibold mb-2">Conclusion</h3>
        <p className="mb-4">
          In conclusion, the geography of India is a fascinating mosaic of
          diverse landscapes, climates, and natural resources. From the towering
          peaks of the Himalayas to the sun-soaked beaches of the Indian
          Ocean...
        </p>
      </div>
      <div className="p-5 w-full flex justify-center">
        <Comments articleName="article1" />
      </div>
    </div>
  );
}
