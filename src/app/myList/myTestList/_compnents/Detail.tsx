
import { useState, useEffect } from 'react'
import React, { } from 'react'


type product = {
  title: string;
  content: string;
  // Add other article fields as needed
};


async function Detail({ params }: any) {
  const response = await fetch(`/api/admin/articles/${params.id}`);
  const product = await response.json();
  return (
    <div>
      <h2>{product.title}</h2>
      <div>{product.content}</div>
      {/* Add other article details as needed */}
    </div>
  );
}

export default Detail;
