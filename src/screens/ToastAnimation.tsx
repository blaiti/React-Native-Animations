import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import {Colors, Mixins, Spacing} from '../styles';
import Toast from '../components/Toast';

function ToastAnimation() {
    const [visible, setVisible] = useState(false);
    const [toast, setToast] = useState<{message: string, status: 'success' | 'error' | 'warning'}>({
        status: "success",
        message: ""
    });

    const showToast = () => {
        setToast({
            status: "warning",
            message: "Something went wrong!"
        });
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
        }, 2000);
    }

    return (
        <View style={styles.container}>
            {visible && (
                <Toast
                    status={toast.status}
                    message={toast.message}
                />
            )}

            <TouchableOpacity
                onPress={showToast}
                style={{
                    backgroundColor: Colors.PRIMARY,
                    padding: Spacing.SCALE_16,
                    borderRadius: Mixins.scaleSize(8)
                }}
            >
                <Text style={{color: Colors.WHITE}}>
                    Show Toast
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.WHITE,
    },
});

export default ToastAnimation;