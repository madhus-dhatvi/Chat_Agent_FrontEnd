import { useState } from "react";
import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { dummyData } from "../data/dummyData";
const menuOptions = dummyData.map((item) => item.category);
export default function Modal({ SHEET_HEIGHT, closeMenu, isSheetMounted, sheetStyle, handleGenerateOptions }) {

    const [selectedMenu, setSelectedMenu] = useState(null);
    function handleMenu(index, option) {
        setSelectedMenu(index);
        closeMenu();
        handleGenerateOptions(option, true);
    }
    return (
        isSheetMounted && (
            <View style={styles.overlayContainer} pointerEvents="box-none">
                {/* dim background - touch to close */}
                <TouchableWithoutFeedback onPress={closeMenu}>
                    <View style={styles.overlayDim} />
                </TouchableWithoutFeedback>

                <View style={styles.modalHandle} />
                <Animated.View style={[styles.sheetContainer, { height: SHEET_HEIGHT }, sheetStyle]}>

                    <FlatList
                        data={menuOptions}
                        keyExtractor={(i, idx) => String(idx)}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                onPress={() => { handleMenu(index, item) }}
                                style={styles.modalRow}
                            >
                                <Text style={styles.modalText}>{item}</Text>
                                <View style={styles.radioOuter}>{selectedMenu === index && <View style={styles.radioInner} />}</View>
                            </TouchableOpacity>
                        )}
                        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
                        contentContainerStyle={{ paddingBottom: 20 }}
                        style={{ width: '100%' }}
                    />

                </Animated.View>
            </View >
        )
    );
}
const styles = StyleSheet.create({
    overlayContainer: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, justifyContent: 'flex-end', zIndex: 1000 },
    overlayDim: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.25)' },
    sheetContainer: { position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: '#f2f2f2', borderTopLeftRadius: 18, borderTopRightRadius: 18, alignItems: 'center', paddingTop: 12, overflow: 'hidden' },
    modalHandle: { width: 40, height: 6, backgroundColor: '#ddd', borderRadius: 6, marginBottom: 8 },
    modalRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 16, paddingHorizontal: 18, width: '100%', backgroundColor: '#fff' },
    modalText: { fontSize: 16 },
    radioOuter: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: '#333', alignItems: 'center', justifyContent: 'center' },
    radioInner: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#333' },
})
