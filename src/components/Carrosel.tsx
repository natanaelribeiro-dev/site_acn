import React from 'react';

function Carrosel() {
  const imagens = [
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
    "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
    "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
    "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
    "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
    "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
  ];

  return (
    <div 
      className="d-flex overflow-x-auto bg-dark rounded-4 p-3 gap-3 mx-auto" 
      style={{ maxWidth: '450px' }}
    >
      {imagens.map((src, index) => (
        <div key={index} className="flex-shrink-0">
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="rounded-4"
            style={{ width: '250px', height: '300px', objectFit: 'cover' }}
          />
        </div>
      ))}
    </div>
  );
}

export default Carrosel;