import { Text, View, FlatList } from "react-native";
import { styles } from "../styles/homepage_styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { months } from "../mocks/bills";
import { useBills } from "../viewmodels/billsViewModel";

const HomePage = () => {
  const { bills } = useBills();
  console.log(bills);
  const month = 7;
  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.containerHeader}>
        <BouncyCheckbox
          size={25}
          fillColor="blue"
          unFillColor="#ffffff"
          iconStyle={{ borderColor: "blue" }}
          innerIconStyle={{ borderWidth: 2 }}
          onPress={(isChecked: boolean) => {
            console.log(isChecked);
          }}
        />
        <Text
          style={[
            styles.textBills,
            { width: 220 },
            item.lastMonthPaid >= month && { color: "gray" },
          ]}
        >
          {item.billName}
        </Text>
        <Text
          style={[
            styles.textBills,
            { width: 100 },
            item.lastMonthPaid >= month && { color: "gray" },
          ]}
        >
          {item.due_day.toString().length > 1
            ? item.due_day
            : `0${item.due_day}`}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <MaterialIcons name="arrow-left" size={72} color="white" />
        <View style={styles.monthContainer}>
          <Text style={styles.homeTitle}>{months[month].name}</Text>
          <Text style={styles.year}> 2025</Text>
        </View>
        <MaterialIcons name="arrow-right" size={72} color="white" />
      </View>
      <View style={styles.containerBills}>
        <View style={styles.containerHeader}>
          <Text style={[styles.headerText, { width: 250, paddingLeft: 40 }]}>
            Conta
          </Text>
          <Text style={[styles.headerText, { width: 100 }]}>Dia</Text>
        </View>
        <FlatList
          data={bills}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id}
        />
        <View style={styles.containerTotal}>
          <Text style={styles.totalText}>Total mesal</Text>
          <Text style={styles.totalText}>0</Text>
        </View>
      </View>
    </View>
  );
};

export default HomePage;
