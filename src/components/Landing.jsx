import { useState, useEffect } from 'react'
import axios from 'axios'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import ListItem from './shared/ListItem.jsx'
import GridItem from './shared/GridItem.jsx'
import 'react-tabs/style/react-tabs.css'

function Landing() {
   const [superheroes, setSuperheroes] = useState([])

  useEffect(() => {
    const url = 'https://tppublic.blob.core.windows.net/test-data/super-heroes.json'
    axios.get(url).then((response) => {
      setSuperheroes(response.data)
    })
    .catch((error) => {
      return error
    })
  }, [])

  return (
   <Tabs>        
      <TabList>
         <Tab>Superheroes List</Tab>
         <Tab>Superheroes Grid</Tab>
      </TabList>
      <TabPanel>
         <ul className="superhero-list">
            {
               superheroes.map((hero, index) => (
                  <ListItem
                     key={index}
                     id={hero.id}
                     name={hero.name}
                     realName={hero.biography['full-name']}
                     columnAlign={['left', 'left']}
                  />
               ))
            }
         </ul>
      </TabPanel>
      <TabPanel>
         {
            superheroes.map((hero, index) => (
               <GridItem
                  key={index}
                  name={hero.name}
                  imageSrc={hero.image.url}
               />
            ))
         }
      </TabPanel>
   </Tabs>
  )
}

export default Landing