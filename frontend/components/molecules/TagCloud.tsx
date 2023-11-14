import React from 'react';

const TagCloud = ({ tags }) => {
  const getRandomColor = () => {
    const colors = ['blue', 'green', 'yellow', 'indigo', 'purple', 'pink'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Tag Cloud</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <a
              key={index}
              href="#"
              className={`bg-gray-200 hover:bg-${getRandomColor()}-300 py-1 px-2 rounded-lg text-sm`}
            >
              {tag.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagCloud;
