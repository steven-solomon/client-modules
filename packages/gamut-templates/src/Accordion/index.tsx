import { Button } from '@codecademy/gamut';
import { ArrowChevronDownIcon } from '@codecademy/gamut-icons';
import cx from 'classnames';
import React, { useState, useLayoutEffect } from 'react';

import styles from './styles.module.scss';

export type AccordionProps = {
  // classNames?: AccordionClassNames;
  size: 'small' | 'large';
  summary: string;
  theme?: string;
};

// export type AccordionClassNames = {
//   // ...?
// };

const transitionDuration = 200;

export const Accordion: React.FC<AccordionProps> = ({
  // classNames = {},
  children,
  size,
  summary,
  theme = 'brand-dark-blue',
}) => {
  const [expanded, setExpanded] = useState(false);
  const [delayedExpanded, setDelayedExpanded] = useState(false);

  useLayoutEffect(() => {
    const handle = setTimeout(
      () => setDelayedExpanded(expanded),
      transitionDuration
    );

    return () => clearTimeout(handle);
  }, [expanded]);

  return (
    <div className={cx(styles.tab, styles[`accordion-${size}`])}>
      <Button
        aria-expanded={expanded}
        aria-label={`${summary}: ${expanded ? 'expanded' : 'collapsed'}`}
        className={styles.summaryButton}
        onClick={() => setExpanded(!expanded)}
        flat
        theme={theme}
      >
        <div className={styles.tabLabel}>{summary}</div>
        <ArrowChevronDownIcon
          className={cx(
            styles.expansionIcon,
            expanded && styles.expansionIconExpanded
          )}
        />
      </Button>
      <div
        className={cx(
          styles.tabContent,
          expanded ? styles.tabContentExpanded : styles.tabContentHidden
        )}
      >
        {(expanded || delayedExpanded) && children}
      </div>
    </div>
  );
};

export default Accordion;
