
const ListItem = (props) => {

   const {
      id,
      name,
      realName,
      columnAlign
   } = props

   return (
      <>
         <li>
            <table>
            <tbody>
               <tr>
                  <td align={columnAlign[0]}>ID:</td>
                  <td align={columnAlign[1]}>{id}</td>
               </tr>
               <tr>
                  <td align={columnAlign[0]}>Name:</td>
                  <td align={columnAlign[1]}>{name}</td>
               </tr>
               <tr>
                  <td align={columnAlign[0]}>Real Name:</td>
                  <td align={columnAlign[1]}>{realName}</td>
               </tr>
            </tbody>
            </table>
         </li>
         <hr />
      </>
   )
}

export default ListItem