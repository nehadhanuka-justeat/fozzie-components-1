import {
    withKnobs, boolean, select, object
} from '@storybook/addon-knobs';
import VueHeader from '../src/components/Header.vue';

const userInfo = {
    friendlyName: 'John',
    isAuthenticated: true,
    email: 'je@test.com',
    userData: {
        signupDate: '2018-05-21T22:54:49.4630000Z',
        email: 'test',
        'a-UserId': 'test',
        consumerStatus: 'test'
    }
};

export default {
    title: 'Shared',
    decorators: [withKnobs]
};

export const HeaderComponent = () => ({
    components: { VueHeader },
    props: {
        locale: {
            default: select('Locale', ['en-GB', 'en-AU'])
        },
        showOffersLink: {
            default: boolean('Show offers link', false)
        },
        showDeliveryEnquiry: {
            default: boolean('Show delivery enquiry', false)
        },
        headerBackgroundTheme: {
            default: select('Header theme', ['white', 'red', 'transparent'])
        },
        userInfoProp: {
            default: object('User info', userInfo)
        }
    },
    parameters: {
        notes: 'some documentation here'
    },
    template: '<vue-header :userInfoProp="userInfoProp" :showOffersLink="showOffersLink" :locale="locale" :headerBackgroundTheme="headerBackgroundTheme" :showDeliveryEnquiry="showDeliveryEnquiry" />'
});

HeaderComponent.story = {
    name: 'f-header'
};