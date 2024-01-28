import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "@/app/i18n/settings";
import { useTranslation } from '../../../i18n'
import { FooterBase } from './FooterBase'

export const Footer = async ({lng}) => {
  const { t } = await useTranslation(lng, 'footer')
  return <FooterBase t={t} lng={lng} />

}