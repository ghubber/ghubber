// @author Dmitry Patsura <talk@dmtry.me> https://github.com/ovr
// @flow

import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'components';
import Icon from 'react-native-vector-icons/Octicons';

// import flow types
import type { UserEntity } from 'github-flow-js';

type Props = {
    user: UserEntity
};

export default class ProfileViewMobile extends PureComponent<void, Props, void> {
    render() {
        const { user } = this.props;

        return (
            <View style={styles.root}>
                <View style={styles.avatarWrapper}>
                    <Avatar user={user} size={250} />
                </View>
                <View style={styles.statsWrapper}>
                    <View style={styles.statsBlock}>
                        <Text style={styles.statsBlockTitle}>
                            Repos
                        </Text>
                        <Text>
                            {user.public_repos}
                        </Text>
                    </View>
                    <View style={styles.statsBlock}>
                        <Text style={styles.statsBlockTitle}>
                            Gists
                        </Text>
                        <Text>
                            {user.public_gists}
                        </Text>
                    </View>
                    <View style={styles.statsBlock}>
                        <Text style={styles.statsBlockTitle}>
                            Followers
                        </Text>
                        <Text>
                            {user.followers}
                        </Text>
                    </View>
                    <View style={styles.statsBlock}>
                        <Text style={styles.statsBlockTitle}>
                            Following
                        </Text>
                        <Text>
                            {user.following}
                        </Text>
                    </View>
                </View>
                <View style={styles.info}>
                    <Text style={styles.name} numberOfLines={1}>
                        { user.name }
                        <Text style={styles.login} numberOfLines={1}> @{ user.login }</Text>
                    </Text>
                    {
                        user.company ? (
                            <Text numberOfLines={1} style={styles.company}>
                                <Icon name="organization" size={16} style={styles.icon} />
                                { user.company }
                            </Text>
                        ) : null
                    }
                    {
                        user.location ? (
                            <Text numberOfLines={1} style={styles.location}>
                                <Icon name="location" size={16} style={styles.icon} />
                                { user.location }
                            </Text>
                        ) : null
                    }
                    {
                        user.email ? (
                            <Text numberOfLines={1} style={styles.mail}>
                                <Icon name="mail" size={16} style={styles.icon} />
                                { user.email }
                            </Text>
                        ) : null
                    }
                    {
                        user.blog ? (
                            <Text numberOfLines={1} style={styles.blog}>
                                <Icon name="link" size={16} style={styles.icon} />
                                { user.blog }
                            </Text>
                        ) : null
                    }
                    <Text style={styles.bio}>{ user.bio }</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        marginBottom: 20,
    },
    info: {
        flex: 1
    },
    avatarWrapper: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statsWrapper: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 15,
        padding: 5,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#dfe2e5',
        borderRadius: 4
    },
    statsBlock: {
        flex: 0.25
    },
    statsBlockTitle: {
        fontWeight: 'bold'
    },
    name: {
        fontSize: 20,
        marginBottom: 5
    },
    login: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    company: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    location: {
        fontSize: 16,
    },
    blog: {
        fontSize: 16,
    },
    mail: {
        fontSize: 16,
    },
    icon: {
    },
    bio: {
        fontSize: 16,
        marginTop: 5
    },
})