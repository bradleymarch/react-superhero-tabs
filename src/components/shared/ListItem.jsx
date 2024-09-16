
const ListItem = (props) => {

   const {
      id,
      name,
      realName,
      columnAlign
   } = props

   return (
      <>
         <li className="superhero-list-item">
            <table>
            <tbody>
               <tr>
                  <td className="superhero-data-cell" align={columnAlign[0]}>ID:</td>
                  <td className="superhero-data-cell" align={columnAlign[1]}>{id}</td>
               </tr>
               <tr>
                  <td className="superhero-data-cell" align={columnAlign[0]}>Name:</td>
                  <td className="superhero-data-cell" align={columnAlign[1]}>{name}</td>
               </tr>
               <tr>
                  <td className="superhero-data-cell" align={columnAlign[0]}>Real Name:</td>
                  <td className="superhero-data-cell" align={columnAlign[1]}>{realName}</td>
               </tr>
            </tbody>
            </table>
         </li>
         <hr />
      </>
   )
}

export default ListItem