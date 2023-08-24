import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import networkIcon from "../assets/icons/network-signal-icon.png"
import wiFiIcon from "../assets/icons/wifi-signal-icon.png"
import batteryIcon from "../assets/icons/battery-icon.png"


const StatusBar = () => {

    const returnTime = () => {
        const time = new Date()
        const hour = time.getHours()
        const minutes = time.getMinutes()
        if (minutes <= 9) {
            return hour + ":" + "0" + minutes
        } else {
            return hour + ":" + minutes
        }
    }

    return (
        <Flex
            w="428px"
            h="44px"
            alignItems={"center"}
            justifyContent={'center'}
        >
            <Flex
                w="375px"
                h="44px"
                padding='0px 20px'
                alignItems={"center"}
                justifyContent={'space-between'}
                backgroundColor={'white'}
            >
                <Text
                    fontFamily="Noto Sans, sans-serif"
                    fontWeight='700'
                >{returnTime()}</Text>
                <Flex
                    alignItems={"center"}>
                    <Image
                        w="25px"
                        h="14px"
                        src={networkIcon} />
                    <Image
                        w="16px"
                        h="14px"
                        src={wiFiIcon} />
                    <Image
                        w="19px"
                        h="8px"
                        src={batteryIcon} />
                </Flex>
            </Flex>

        </Flex>
    )
}

export default StatusBar