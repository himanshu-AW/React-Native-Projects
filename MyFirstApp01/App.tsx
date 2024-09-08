import React from 'react'
import { SafeAreaView, ScrollView} from 'react-native'
import FlatCard from './components/FlatCard';
import ScrollableCards from './components/ScrollableCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ListItemCard from './components/ListItemCard';

function App() {
    return (
      <SafeAreaView>
        <ScrollView>
          <FlatCard />
          <ScrollableCards/>
          <FancyCard />
          <ListItemCard />
          <ActionCard />
        </ScrollView>
      </SafeAreaView>
    )
  }

export default App;
