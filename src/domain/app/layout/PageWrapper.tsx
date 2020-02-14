import React, { FunctionComponent, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';
import { useMatomo } from '@datapunt/matomo-tracker-react';

import styles from './pageWrapper.module.scss';
import Container from './Container';
import { getCurrentLanguage } from '../../../common/translation/TranslationUtils';

const PageWrapper: FunctionComponent<{
  className?: string;
  title?: string;
  containerClassName?: string;
  description?: string;
}> = ({
  children,
  className,
  containerClassName,
  title = 'appName',
  description = 'homePage.hero.descriptionText',
}) => {
  const { i18n, t } = useTranslation();
  const lang = getCurrentLanguage(i18n);

  const translatedTitle =
    title !== 'appName' ? `${t(title)} - ${t('appName')}` : t('appName');
  const translatedDescription =
    title !== 'homePage.hero.descriptionText'
      ? t(description)
      : t('homePage.hero.descriptionText');

  // TODO: Switch to updateLocaleParam() from RouteUtils
  // https://helsinkisolutionoffice.atlassian.net/browse/KK-223

  // When fixing this, ensure that PageWrapper.test.tsx.snap has sensible href links.
  const path = window.location.pathname.replace(`/${lang}/`, '');

  const { trackPageView } = useMatomo();
  useEffect(() => {
    trackPageView({
      documentTitle: translatedTitle,
      href: window.location.href,
    });
  }, [trackPageView, translatedTitle]);

  return (
    <div className={classnames(styles.pageWrapper, className)}>
      <Helmet>
        <html lang={lang} />
        <title>{translatedTitle}</title>
        <meta name="description" content={translatedDescription} />
        <link rel="alternate" hrefLang="fi" href={'/fi/' + path} />
        <link rel="alternate" hrefLang="sv" href={'/sv/' + path} />
        <link rel="alternate" hrefLang="en" href={'/en/' + path} />
      </Helmet>
      <Container
        className={classnames(styles.defaultContainer, containerClassName)}
      >
        {children}
      </Container>
    </div>
  );
};

export default PageWrapper;
