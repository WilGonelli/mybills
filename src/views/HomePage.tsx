import React, { ReactNode } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { styles } from "../styles/homepage_styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { useBills } from "../viewmodels/billsViewModel";

function renderItem({ item }: any) {
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
      <Text style={[styles.textBills, { width: 220 }]}>{item.billName}</Text>
      <Text style={[styles.textBills, { width: 100 }]}>
        {item.due_day > 9 ? item.due_day : `0${item.due_day}`}
      </Text>
    </View>
  );
}

const HomePage = () => {
  const { bills, month, monthId, year, incrementMonth, decrementMonth } =
    useBills();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <MaterialIcons
          name="arrow-left"
          size={72}
          color="white"
          onPress={() => decrementMonth()}
        />
        <View style={styles.monthContainer}>
          <Text style={styles.homeTitle}>{month}</Text>
          <Text style={styles.year}> {year}</Text>
        </View>

        <MaterialIcons
          name="arrow-right"
          size={72}
          color="white"
          onPress={() => incrementMonth()}
        />
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
          style={styles.containerFlatList}
        />
        <View style={styles.containerTotal}>
          <Text style={styles.totalText}>Total mesal</Text>
          <Text style={styles.totalText}>0</Text>
        </View>
      </View>
      <View style={styles.btnAddBill}>
        <TouchableOpacity>
          <Text style={styles.textBtn}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;
