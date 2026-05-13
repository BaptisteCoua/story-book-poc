<template>
  <BaseCard
      :color="cardColor"
      :variant="cardVariant"
      :padding="cardPadding"
      :rounded="cardRounded"
      :class="cardWidthClass"
  >
    <div class="d-flex flex-column ga-4">
      <BaseAvatar :src="avatarSrc" :size="avatarSize" :alt="avatarAlt" />

      <div>
        <BaseText :text-type="textTypeTitle">
          {{ title }}
        </BaseText>
        <BaseText :text-type="textTypeText">
          {{ text }}
        </BaseText>
      </div>

      <div class="d-flex justify-end">
        <BaseButton
            :color="buttonColor"
            :variant="buttonVariant"
            :label="labelButton"
            :rounded="buttonRounded"
        />
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '~/components/atoms/BaseCard.vue'
import BaseAvatar from '~/components/atoms/BaseAvatar.vue'
import BaseText from '~/components/atoms/BaseText.vue'
import BaseButton from '~/components/atoms/BaseButton.vue'

withDefaults(defineProps<{
  avatarSrc: string
  avatarAlt?: string
  avatarSize: number
  textTypeTitle: string
  textTypeText: string
  labelButton: string
  title: string
  text: string

  cardColor?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
  cardVariant?: 'elevated' | 'flat' | 'tonal' | 'outlined' | 'text' | 'plain'
  cardPadding?: string
  cardRounded?: string
  cardWidthClass?: string

  buttonColor?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
  buttonVariant?: 'text' | 'flat' | 'elevated' | 'outlined' | 'plain' | 'tonal'
  buttonRounded?: string
}>(), {
  avatarAlt: 'Avatar utilisateur',
  cardColor: 'secondary',
  cardVariant: 'flat',
  cardPadding: 'pa-8',
  cardRounded: 'rounded-xl',
  cardWidthClass: 'w-25',
  buttonColor: 'primary',
  buttonVariant: 'tonal',
  buttonRounded: 'rounded-lg',
})
</script>
