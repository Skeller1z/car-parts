import React from 'react';

type Review = {
  title: string;
  content: string;
  author: string;
};

const reviews: Review[] = [
  {
    title: 'Amazing Product!',
    content: 'This product exceeded my expectations...',
    author: 'John Doe'
  },
  {
    title: 'Not Satisfied',
    content: 'Unfortunately, this product did not meet my needs...',
    author: 'Jane Smith'
  },
  // Add more review objects here
];

const ProductReview: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">{review.title}</h2>
      <p className="mt-2 text-gray-600">{review.content}</p>
      <div className="mt-4 text-sm text-gray-500">{review.author}</div>
    </div>
  );
};

const Reviewer: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Product Reviews</h1>
      {reviews.map((review, index) => (
        <ProductReview key={index} review={review} />
      ))}
    </div>
  );
};

export default Reviewer;
