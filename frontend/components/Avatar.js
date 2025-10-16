import { Image, StyleSheet, Text, View } from "react-native";


export default function Avatar({ size = 40, mode }) {
    if (mode === undefined) {
        mode = "human";
    }

    return (

        <View style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}>
            {/* <Text style={styles.avatarText}>{initials}</Text> */}
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: mode === "human" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4BugPyqmMtOIAKO_o5DysIe-Zc2MVOWGO6L7BNu4XMe1GmSLhl8GKaq2jksHH3YGmDYSgAHpQRIG8PLSak21yMdV2qLKYFjubI3XkFr4" : "https://img.freepik.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg",
                }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    avatar: { backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#ddd' },
    avatarText: { fontWeight: '700' },
    tinyLogo: {
        width: "100%",
        height: "100%",
        borderRadius: 50, // half of width/height → makes it a circle
        borderWidth: 1,
        borderColor: "grey"
        // borderRadius: "50%",
    }
})

