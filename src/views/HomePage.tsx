import { Text, View, FlatList } from "react-native";
import { styles } from "../styles/homepage_styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { BillsMocked, months, BillsPaidMocked } from "../mocks/bills";
import { BillPaid } from "../models/billsModel";

const HomePage = () => {
  const month = 7;
  const renderItem = ({ item }: any) => {
    const paidBill: BillPaid[] = BillsPaidMocked.filter(
      (bill) => bill.idBill === item.id && bill.paidMonth === month
    );
    console.log(paidBill);
    return (
      <View style={styles.containerHeader}>
        <Text
          style={[
            styles.textBills,
            { width: 170 },
            paidBill.length > 0 && { color: "gray" },
          ]}
        >
          {item.billName}
        </Text>
        <Text
          style={[
            styles.textBills,
            { width: 60 },
            paidBill.length > 0 && { color: "gray" },
          ]}
        >
          {item.dueDate}
        </Text>
        <Text
          style={[
            styles.textBills,
            { width: 120 },
            paidBill.length > 0 && { color: "gray" },
          ]}
        >
          R$
          {parseFloat(
            paidBill.length > 0 ? paidBill[0].valuePaid : item.estimatedValue
          )
            .toFixed(2)
            .replaceAll(".", ",")}
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
          <Text style={[styles.headerText, { width: 170 }]}>Conta</Text>
          <Text style={[styles.headerText, { width: 60 }]}>Dia</Text>
          <Text style={[styles.headerText, { width: 120 }]}>Valor</Text>
        </View>
        <FlatList
          data={BillsMocked}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id}
        />
        <View style={styles.containerTotal}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalText}>R$ 1000,00</Text>
        </View>
      </View>
    </View>
  );
};

export default HomePage;
