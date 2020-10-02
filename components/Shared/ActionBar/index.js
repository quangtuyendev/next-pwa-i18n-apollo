import useI18n from '@/hooks/use-i18n';
import React from 'react';
import { useRouter } from 'next/router';

function ActionBar() {
  const i18n = useI18n();
  const router = useRouter();

  async function handleChangeLanguages({ target: { value } }) {
    const { default: lngDict } = await import(`../../../locales/${value}.json`);
    i18n.locale(value, lngDict);
    router.push(`/${value + router.asPath.slice(3)}`);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <select
            value={i18n.activeLocale}
            onChange={handleChangeLanguages}
            className="custom-select"
          >
            <option value="vi">Vietnamse</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ActionBar;
