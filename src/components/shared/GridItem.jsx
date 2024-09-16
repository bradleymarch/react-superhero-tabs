
const GridItem = (props) => {

   const {
      name,
      imageSrc,
   } = props

   return (
      <div className="grid-item">
         <h4>{name}</h4>
         <img 
            src={imageSrc} 
            className="superhero-image" 
            alt="Superhero Image" 
         />
      </div>
   )
}

export default GridItem