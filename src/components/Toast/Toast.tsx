import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated'

import IToastProps from './IToast';
import {Colors, Mixins, Spacing} from '../../styles';

function Toast({
    status,
    message,
}: IToastProps) {
    let bgColor = Colors.PRIMARY;
    switch (status) {
        case "success":
            bgColor = Colors.SUCCESS;
            break;
        case "warning":
            bgColor = Colors.WARNING;
            break;
        case "error":
            bgColor = Colors.ERROR;
            break;
        default:
            break;
    }
    
    return (
        <Animated.View 
            style={[
                styles.toastContainer,
                {backgroundColor: bgColor}
            ]}
            entering={FadeInUp}
            exiting={FadeOutUp}
        >
            <Text style={styles.title}>
                {message}
            </Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    toastContainer: {
        width: "90%",
        position: "absolute",
        alignItems: "center",
        padding: Spacing.SCALE_16,
        top: Mixins.scaleSize(20),
        left: Mixins.scaleSize(20),
        right: Mixins.scaleSize(20),
        borderRadius: Mixins.scaleSize(8),
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.WHITE
    },
});

export default Toast;