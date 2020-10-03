import React, { useState } from 'react';
import HeaderTitle from './component/header';
import SearchInput from './component/searchInput';
import Loader from './component/loader';
import Thumbnil from './component/cityThumbnil';
import CityDetail from './component/cityDetails';
import Place from './component/places';
import Footer from "./component/footer";

function App() {
  var names = [
    {name : 'Goal ghar',  address : 'Opp.-Govt. Girls High school, Ashok Rajpath, Patna, Bihar 800001', description: 'According to a contemporary inscription at its base, the Golghar in Patna was intended to be just the first of a series of huge grain stores. In the end, however, no others were ever built. The granary was "part of a general plan … for the perpetual prevention of famine in these provinces. The beehive-shaped structure was designed by Captain John Garstin of the Bengal Engineers, part of the East India Companys Bengal Army. Its construction was completed on 20 July 1786.'}, 
    {name :'Ghandi Maidan', address : 'Gandhi Maidan is a historic ground in Patna, near the banks of the Ganges River, in Bihar, ... serial bomb blasts at Gandhi Maidan just before the BJP', description:'Gandhi Maidan is a historic ground in Patna, near the banks of the Ganges River, in Bihar, India. The Golghar falls to its west. During the period of 1824–1833, under British rule, it was used as a golf course and horse racing track and was called Patna Lawns. It is spread across 60 acres of land.'},
    {name :'mahaveer temple', address : 'CORPORATE OFFICE. M/s Reddy Structures Pvt Ltd. # 133/1, "The Residency" 2nd Floor, Residency Road, Bangalore - 560 025.', description:'As per the Patna High Court judgment in 1948 the temple exists since time immemorial. But from the scrutiny of historical facts and traditions it appears that this temple was originally established by Swami Balanand, an ascetic of Ramanandi sect in around 1730 A.D. This temple gained popularity in 1947 with large number of Hindu refugees coming to Patna after the partition of India. Subsequently, temple was rebuilt as a concrete house at same time. Even this was broken down in 1987 to make a huge marble temple. The idol of Sankat-Mochan stands in it.'}
  ];

  let [isSearch, setIsSearch] = useState(false)
  const handleSearch = (event) => {
    console.log(event.target.value)
    setIsSearch(true)
    }
  return (
    <div>
    <div style={{marginTop:'20px'}}>
       <HeaderTitle/>
    </div>
      <SearchInput
        handleSearch = {handleSearch}
       />
    <div style={{marginLeft:'23%', display:'none'}}>
      <Thumbnil/>
    </div>
    {
      isSearch ? <Loader /> :
      <div>
        <CityDetail
          name = {'patna'}
          state = 'Bihar'
          description = {'Patna is the capital of Bihar'}
        />  
            {names.map(function(el, index){
            return <div key={index}>{
              <Place
                placeName = {el.name}
                address = {el.address}
                description = {el.description}
                />}</div>;
            })}
      </div>
     }
      <Footer/>
     </div>   
  );
}

export default App;
