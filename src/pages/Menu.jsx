import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SectionHeading from '../components/SectionHeading'
import MenuBody from '../components/MenuBody'

export default function Menu() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto max-w-6xl px-5 pt-16">
      <SectionHeading big title={t('menu.title')} intro={t('menu.intro')} />
      <MenuBody rich />

      <div className="text-center mt-14">
        <Link to="/quote" className="inline-block rounded-full bg-gold px-7 py-3 text-ink font-medium hover:bg-gold-soft transition-colors">{t('cta.quote')}</Link>
      </div>
    </section>
  )
}
