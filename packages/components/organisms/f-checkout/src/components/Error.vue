<template>
    <card
        is-rounded
        has-outline
        is-page-content-wrapper
        card-heading-position="center"
        data-test-id="checkout-error-page-component"
        :class="[$style['c-checkout-error'], $style['c-checkout-error--verticalPadding']]"
    >
        <img
            src="../assets/images/jet-sad-bag.svg"
            alt="">

        <h1
            :class="$style['c-checkout-error-heading']"
            data-test-id="checkout-error-page-heading">
            {{ $t('errorMessages.pageLoad.heading') }}
        </h1>

        <p
            :class="$style['c-checkout-error-description']"
            data-test-id="checkout-error-page-description">
            {{ $t('errorMessages.pageLoad.description') }}
        </p>
    </card>
</template>

<script>
import Card from '@justeat/f-card';
import '@justeat/f-card/dist/f-card.css';

export default {
    components: { Card }
};
</script>

<style lang="scss" module>
.c-checkout-error {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &.c-checkout-error--verticalPadding {
        padding: spacing(x8) spacing() spacing(x4);

        @include media('<=narrow') {
            border: none;
            padding-top: spacing(x2);
            padding-bottom: spacing(x2);
        }
    }

    .c-checkout-error-heading {
        @include font-size(heading-s);
        margin-top: spacing(x8);
        margin-bottom: 0;
    }

    .c-checkout-error-description {
        @include font-size(body-l);
        margin-top: spacing();
    }
}
</style>
