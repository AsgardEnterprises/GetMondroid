'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

class Main extends Component {
constructor(props) {
  super(props);
  this.state =  {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    }),
    isLoading: true,
  };
}

async componentDidMount() {
  await this.getTransactions();
}

async getTransactions() {
  let headers = new Headers();
  headers.append('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaSI6Im9hdXRoY2xpZW50XzAwMDA5NFB2SU5ER3pUM2s2dHo4anAiLCJleHAiOjE0NTcyMDQxMzEsImlhdCI6MTQ1NzE4MjUzMSwianRpIjoidG9rXzAwMDA5NXF3Z0dpSUNSTXlIU0ZmYzEiLCJ1aSI6InVzZXJfMDAwMDk1cXFKWVduQ1RRbFRzb3hmdCIsInYiOiI0In0.BFsBRTzPwAKLG0vmkxk0K5_a42GjzPFMSSR0cnzbHvA')
  let response = await fetch('https://staging-api.getmondo.co.uk/transactions/?account_id=acc_000095qqJYvbiDHQiqQmLx', {
    headers: headers,
  });
  let responseJson = await response.json();
  this.setState({
    dataSource: this.state.dataSource.cloneWithRows(responseJson.transactions),
    isLoading: false,
  });
}

renderLoadingScreen() {
  return (
    <View style={styles.container}>
    <Text>
        I am loading senpai!
      </Text>
    </View>
  );
}

renderTransactionsScreen() {
  return (
    <View style={styles.container}>
    <Text>
      Here are your transactions
      </Text>
    </View>
  );
}

renderTransaction(transaction) {
  return (
    <View style={styles.container}>
         <Text style={styles.category}>{transaction.category}</Text>
         <Text style={styles.amount}>{transaction.amount}</Text>
     </View>
  );
}

render() {
  if (this.state.isLoading) {
    return this.renderLoadingScreen();
  }

  return (<ListView
    dataSource={this.state.dataSource}
    renderRow={this.renderTransaction}
    style={styles.listView}
  />);
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    paddingTop: 5,
  },
  category: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  amount: {
    textAlign: 'center',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

export default Main;
