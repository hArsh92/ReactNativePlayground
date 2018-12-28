import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Header, Text, List } from 'native-base';
import data from './data.json';


const styles = StyleSheet.create({
    listItemPost:{backgroundColor: 'pink', height: 54},
    listItemEvent:{backgroundColor: 'red', height: 54},
    listItemDeed:{backgroundColor: 'yellow', height: 54},
})

const renderItem = item => {
    switch (item.type) {
        case 'type1':
            return <Text style={styles.listItemPost}>{item.mesage}</Text>
        case 'type2':
            return <Text style={styles.listItemEvent}>{item.mesage}</Text>
        case 'type3':
        default:
            return <Text style={styles.listItemDeed}>{item.mesage}</Text>
    }
}
const { width } = Dimensions.get('window');
class DynamicList extends React.Component {
    render() {
        return (
        <Container style={{flex: 1, width}}>
            <Content>
                <Header />
                <List dataArray={data.results}
                renderRow={(item) => renderItem(item)}/>
            </Content>
        </Container>
        )
    }
}

export default DynamicList;
