import * as React from 'react';
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import styles from './languageBar.module.scss';
import { SUPPORT_LANGUAGES } from '../../../../../common/translation/TranslationConstants';
import { updateLocaleParam } from '../../../../../common/route/RouteUtils';
import { getCurrentLanguage } from '../../../../../common/translation/TranslationUtils';

const LanguageBar: React.FunctionComponent = props => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const currentLanguage = getCurrentLanguage(i18n);

  return (
    <div className={styles.languageBar}>
      {Object.values(SUPPORT_LANGUAGES).map((language, index) => (
        <NavLink
          key={index}
          activeClassName={styles.active}
          isActive={(match, location) =>
            location.pathname.includes(`/${language}/`)
          }
          to={updateLocaleParam(location.pathname, currentLanguage, language)}
        >
          {t(`common.language.${language}`)}
        </NavLink>
      ))}
    </div>
  );
};

export default LanguageBar;
