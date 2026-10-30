function Categories() {

  const categories = [
    { name: "Mobiles", image: "phone.jpg" },
    { name: "Shoes", image: "shoes.jpg" },
    { name: "Headphones", image: "headphone.jpg" },
    { name: "Fashion", image: "perfume.jpg" },
    { name: "Watches", image: "watch.jpg" },
    { name: "Furniture", image: "furniture.jpg" },
  ];

  return (
    <section className="categories" id="categories">

      <div className="section-title">
        <h2>Shop By Categories</h2>
        <p>Explore top categories</p>
      </div>

      <div className="categories-container">

        {categories.map((category) => (
          <div className="category-card" key={category.name}>

            <img
              src={`/images/${category.image}`}
              alt={category.name}
            />

            <h3>{category.name}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Categories;