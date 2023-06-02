import React, { useState, useContext } from 'react'
import { View, Text, FlatList, StyleSheet, Image, TextInput } from 'react-native'
import useStyle from '../hooks/useStyles'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default ContactsList = () => {
  
  const styles = useStyle(customStyles)
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'John Doe',
      phone: '555-555-5555',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      id: 2,
      name: 'Jane Smith',
      phone: '444-444-4444',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
    },
    {
      id: 3,
      name: 'Bobbie Doeman',
      phone: '333-333-3333',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
    },
    {
      id: 4,
      name: 'Cabnth Johnson',
      phone: '333-333-3333',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar4.png',
    },
    {
      id: 5,
      name: 'Krekvh Martin',
      phone: '333-333-3333',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar5.png',
    },
    {
      id: 6,
      name: 'Jose Cassti',
      phone: '333-333-3333',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
    },
    {
      id: 7,
      name: 'John Mrtiuhg',
      phone: '333-333-3333',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar7.png',
    },
  ])
  const [searchText, setSearchText] = useState('')
  const [filteredContacts, setFilteredContacts] = useState(contacts)

  const handleSearch = text => {
    setSearchText(text)
    const filtered = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(text.toLowerCase())
    })
    setFilteredContacts(filtered)
  }

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.header}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.subText}>@username</Text>
        </View>
        <Text style={styles.signOutText} >
            Sign Out
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={filteredContacts}
        renderItem={({ item }) => (
          <TouchableOpacity>
          <View style={styles.itemContainer}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.textContainer}>
              <Text style={styles.nameText}>{item.name}</Text>
              <Text style={styles.phoneText}>{item.phone}</Text>
            </View>
          </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

const customStyles = theme => ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor:'#fff',
    justifyContent: 'center',
  },
  userContainer:{
    marginTop:30,
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  signOutText:{
    padding:10,
    paddingTop:20,
    color: theme.colors.danger,
    fontWeight:800
  },
  name: {
    fontSize:20,
    fontWeight:'bold',
    marginLeft:20,
    marginBottom:3,
  },
  subText: {
    fontSize:14,
    marginLeft:20,
    color:'#808080'
  },
  searchContainer: {
    backgroundColor: '#eee',
    padding: 8,
    
  },
  searchInput: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    padding: 8,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  textContainer: {
    marginLeft: 16,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  phoneText: {
    fontSize: 16,
    color: '#999',
  },
})
