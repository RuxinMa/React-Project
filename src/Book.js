const Book = (props) => {
    const { img, title, author, number } = props; // access props - destructuring
  
    return (
      <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author.toUpperCase()} </h4>
        <span className='number'>{`#${number + 1}`}</span>
      </article>
    ); // omit prop. prefix
  };
  
  export default Book;