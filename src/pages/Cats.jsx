import Layout from '../components/Layout';

// Cat image data for generating the gallery
const catImages = {
  row1: [
    { name: 'IMG_2470', ext: 'jpeg', category: 'pastel-pink' },
    { name: 'IMG_2491', ext: 'jpeg', category: 'pastel-blue' },
    { name: 'IMG_3648', ext: 'JPG', category: 'pastel-yellow' },
    { name: 'IMG_3649', ext: 'JPG', category: 'pastel-green' },
    { name: 'IMG_3653', ext: 'JPG', category: 'pastel-purple' },
  ],
  row2: [
    { name: 'IMG_3682', ext: 'jpeg', category: 'pastel-blue' },
    { name: 'IMG_3711', ext: 'jpeg', category: 'pastel-yellow' },
    { name: 'IMG_3731', ext: 'jpeg', category: 'pastel-green' },
    { name: 'IMG_3752', ext: 'jpeg', category: 'pastel-purple' },
    { name: 'IMG_3757', ext: 'jpeg', category: 'pastel-pink' },
  ],
  row3: [
    { name: 'IMG_3764', ext: 'jpeg', category: 'pastel-yellow' },
    { name: 'IMG_3800', ext: 'jpeg', category: 'pastel-green' },
    { name: 'IMG_3845', ext: 'jpeg', category: 'pastel-purple' },
    { name: 'IMG_3864', ext: 'jpeg', category: 'pastel-pink' },
    { name: 'IMG_3903', ext: 'jpeg', category: 'pastel-blue' },
  ],
  row4: [
    { name: 'IMG_3907', ext: 'jpeg', category: 'pastel-green' },
    { name: 'IMG_3987', ext: 'jpeg', category: 'pastel-purple' },
    { name: 'IMG_4010', ext: 'jpeg', category: 'pastel-pink' },
    { name: 'IMG_4024', ext: 'jpeg', category: 'pastel-blue' },
    { name: 'IMG_4033', ext: 'jpeg', category: 'pastel-yellow' },
  ],
  row5: [
    { name: 'IMG_4548', ext: 'jpeg', category: 'pastel-purple' },
    { name: 'IMG_4549', ext: 'jpeg', category: 'pastel-pink' },
    { name: 'IMG_4741', ext: 'jpeg', category: 'pastel-blue' },
    { name: 'IMG_4746', ext: 'jpeg', category: 'pastel-yellow' },
    { name: 'IMG_4900', ext: 'jpeg', category: 'pastel-green' },
  ],
  row6: [
    { name: 'IMG_5510', ext: 'JPG', category: 'pastel-pink' },
    { name: 'IMG_5532', ext: 'JPG', category: 'pastel-blue' },
    { name: 'IMG_5584', ext: 'JPG', category: 'pastel-yellow' },
    { name: 'IMG_5602', ext: 'JPG', category: 'pastel-green' },
    { name: 'IMG_5650', ext: 'jpg', category: 'pastel-purple' },
  ],
};

function CatImage({ name, ext, category }) {
  return (
    <cat-image category={category}>
      <picture>
        <source
          type="image/webp"
          srcSet={`
            /optimized/cats/${name}-350.webp 1x,
            /optimized/cats/${name}-700.webp 2x
          `}
        />
        <source
          type="image/jpeg"
          srcSet={`
            /optimized/cats/${name}-350.jpeg 1x,
            /optimized/cats/${name}-700.jpeg 2x
          `}
        />
        <img
          src={`/cats/${name}.${ext}`}
          alt="A picture of one of my cats"
          loading="lazy"
          width="350"
          height="350"
        />
      </picture>
    </cat-image>
  );
}

function CatRow({ images }) {
  // Double the images for infinite scroll effect
  const doubledImages = [...images, ...images];
  return (
    <cat-row>
      {doubledImages.map((img, idx) => (
        <CatImage key={`${img.name}-${idx}`} {...img} />
      ))}
    </cat-row>
  );
}

function Cats() {
  return (
    <Layout>
      <header>
        <h1>Cat Gallery</h1>
      </header>

      <cat-gallery>
        <CatRow images={catImages.row1} />
        <CatRow images={catImages.row2} />
        <CatRow images={catImages.row3} />
        <CatRow images={catImages.row4} />
        <CatRow images={catImages.row5} />
        <CatRow images={catImages.row6} />
      </cat-gallery>
    </Layout>
  );
}

export default Cats;

