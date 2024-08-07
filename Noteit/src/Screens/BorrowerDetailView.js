import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { AuthContext } from '../Context/AuthContext';

const BorrowerDetailView = ({
    barrowerData,
    selectedTab,
    setSelectedTab,
    reversedLedgerData,
    ledgerData,

}) => {

    const { userInfo } = useContext(AuthContext);
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Hello {userInfo.firstName}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableLabel}>Borrower Name:</Text>
                        <Text style={styles.tableData}>{barrowerData.borrowerName}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableLabel}>Borrowed Date:</Text>
                        <Text style={styles.tableData}>{barrowerData.borrowedDate}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableLabel}>End Date:</Text>
                        <Text style={styles.tableData}>{barrowerData.endDate}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableLabel}>Principal Amount:</Text>
                        <Text style={styles.tableData}>{barrowerData.principalAmount}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableLabel}>Interest Rate:</Text>
                        <Text style={styles.tableData}>{barrowerData.interestRate}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableLabel}>Borrowed Basis:</Text>
                        <Text style={styles.tableData}>{barrowerData.creditStatus}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableLabel}>Period:</Text>
                        <Text style={styles.tableData}>{barrowerData.timePeriodUnit}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableLabel}>Loan/Credit Status:</Text>
                        <Text style={styles.tableData}>{barrowerData.borrowerName}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableLabel}>Status:</Text>
                        <Text style={styles.tableData}>{barrowerData.borrowerName}</Text>
                    </View>
                </View>
                <View style={{ paddingBottom: 20 }}>
                    <View style={{ height: 44, width: '100%', backgroundColor: '#C0C0C0', borderRadius: 10, borderColor: '#AD40AF', flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity
                            style={{ flex: 1, borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: selectedTab === 'card' ? '#AD40AF' : '#C0C0C0' }}
                            onPress={() => setSelectedTab('card')}
                        >
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: selectedTab === 'card' ? 'white' : '#AD40AF', fontFamily: 'Robot-Medium' }}>Card View</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ flex: 1, borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: selectedTab === 'table' ? '#AD40AF' : '#C0C0C0' }}
                            onPress={() => setSelectedTab('table')}
                        >
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: selectedTab === 'table' ? 'white' : '#AD40AF', fontFamily: 'Robot-Medium' }}>Table View</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {selectedTab === 'card' ? (
                    reversedLedgerData.map((item, index) => (
                        <View style={styles.card} key={index}>
                            <Text style={styles.cardMonth}>{item.month}</Text>
                            <View style={styles.cardContent}>
                                <View style={styles.cardRow}>
                                    <Text style={styles.cardLabel}>S No:</Text>
                                    <Text style={styles.cardData}>{index + 1}</Text>
                                </View>
                                <View style={styles.cardRow}>
                                    <Text style={styles.cardLabel}>Int Amt:</Text>
                                    <Text style={styles.cardData}>{item.interestAmount}</Text>
                                </View>
                                <View style={styles.cardRow}>
                                    <Text style={styles.cardLabel}>Days:</Text>
                                    <Text style={styles.cardData}>{item.days}</Text>
                                </View>
                                <View style={styles.cardRow}>
                                    <Text style={styles.cardLabel}>Principal Amount:</Text>
                                    <Text style={styles.cardData}>{item.principalAmount}</Text>
                                </View>
                                <View style={styles.cardRow}>
                                    <Text style={styles.cardLabel}>Locked:</Text>
                                    <Text style={styles.cardData}>{item.locked === true ? "Paid" : "Pending"}</Text>
                                </View>
                                <View style={styles.cardRow}>
                                    <Text style={styles.cardLabel}>Interest Paid:</Text>
                                    <Text style={styles.cardData}>{item.interestPaid}</Text>
                                </View>
                                <View style={styles.cardRow}>
                                    <Text style={styles.cardLabel}>Status:</Text>
                                    <Text style={styles.cardData}>{item.status}</Text>
                                </View>
                            </View>
                        </View>
                    ))
                ) : (
                    <View style={styles.table}>
                        <View style={styles.tableRowHeader}>
                            <Text style={styles.tableHeaderText}>S No.</Text>
                            <Text style={styles.tableHeaderText}>Int Amt</Text>
                            <Text style={styles.tableHeaderText}>Month</Text>
                            <Text style={styles.tableHeaderText}>Days</Text>
                            <Text style={styles.tableHeaderText}>Principal Amount</Text>
                            <Text style={styles.tableHeaderText}>Locked</Text>
                            <Text style={styles.tableHeaderText}>Interest Paid</Text>
                            <Text style={styles.tableHeaderText}>Status</Text>
                        </View>
                        {ledgerData.map((item, index) => (
                            <View style={styles.tableRow} key={index}>
                                <Text style={styles.tableCell}>{index + 1}</Text>
                                <Text style={styles.tableCell}>{item.interestAmount}</Text>
                                <Text style={styles.tableCell}>{item.month}</Text>
                                <Text style={styles.tableCell}>{item.days}</Text>
                                <Text style={styles.tableCell}>{item.principalAmount}</Text>
                                <Text style={styles.tableCell}>{item.locked === true ? "True" : "False"}</Text>
                                <Text style={styles.tableCell}>{item.status}</Text>
                            </View>
                        ))}
                    </View>
                )}

            </ScrollView>
            {/* {!modalVisible && (
                <TouchableOpacity style={styles.floatingButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Entry Interest</Text>
                </TouchableOpacity>
            )} */}
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    scrollView: {
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
    },
    headerText: {
        fontSize: 18,
        fontFamily: 'Roboto-Medium',
        color: 'black',
    },
    detailsContainer: {
        borderColor: 'red',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        borderRadius: 20,
        backgroundColor: '#e9f7ef',
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomColor: '#ced4da',
        borderBottomWidth: 1,
    },
    tableLabel: {
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        color: '#495057',
        flex: 1,
    },
    tableData: {
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        color: '#212529',
        flex: 1,
        textAlign: 'right',
    },
    successMessageContainer: {
        padding: 10,
        backgroundColor: '#d4edda',
        borderRadius: 5,
        marginBottom: 20,
    },
    successMessage: {
        fontSize: 16,
        color: '#155724',
        textAlign: 'center',
    },
    card: {
        borderColor: '#dee2e6',
        borderWidth: 1,
        padding: 15,
        marginBottom: 20,
        borderRadius: 12,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4,
    },
    cardMonth: {
        fontSize: 22,
        fontFamily: 'Roboto-Bold',
        color: '#007bff',
        textAlign: 'center',
        marginBottom: 15,
    },
    cardContent: {
        backgroundColor: '#f8f9fa',
        borderRadius: 10,
        padding: 15,
        borderColor: '#ced4da',
        borderWidth: 1,
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomColor: '#ced4da',
        borderBottomWidth: 1,
    },
    cardLabel: {
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        color: '#495057',
        flex: 1,
    },
    cardData: {
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        color: '#212529',
        flex: 1,
        textAlign: 'right',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    tabButton: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#e9ecef',
    },
    tabButtonActive: {
        backgroundColor: '#007bff',
    },
    tabButtonText: {
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        color: '#212529',
    },
    table: {
        borderWidth: 1,
        borderColor: '#ddd',
    },
    tableRowHeader: {
        flexDirection: 'row',
        backgroundColor: '#f1f1f1',
        padding: 10,
    },
    tableHeaderText: {
        flex: 1,
        fontFamily: 'Roboto-Bold',
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 3,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    tableCell: {
        flex: 1,
        fontFamily: 'Roboto-Regular',
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
    },
    floatingButton: {
        position: 'absolute',
        bottom: 10,
        left: '50%',
        transform: [{ translateX: -50 }],
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        textAlign: 'center',
    },
});

export default BorrowerDetailView;
