import { useRef, useState } from "react";
import { Animated, Dimensions, Pressable, StyleSheet, Text, View } from "react-native";

export default function MenuButton({ openMenu }) {
    return (<View style={styles.container}>
        <Pressable style={styles.menuBtn} onPress={openMenu}>
            <Text style={styles.menuBtnText}>☰ Menu</Text>
        </Pressable>
    </View>);

}
const styles = StyleSheet.create({
    container: { width: "100%" },
    menuBtn: { backgroundColor: '#fff', padding: 8, borderRadius: 28, alignItems: 'center', marginTop: 6, alignSelf: 'center', width: 150, borderWidth: 1, borderColor: "black" },
    menuBtnText: { fontWeight: '700' },
})