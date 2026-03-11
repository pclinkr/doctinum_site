function flattenMenuLinks(menuValue) {
  return (menuValue?.groups || []).flatMap((group) =>
    (group.links || []).map((link) => ({ ...link }))
  );
}

function buildSectionLink(label, page, description) {
  return { label, page, description };
}

function mergeSolutionsMenu(t, solutionsMenu, options) {
  const mergedGroups = [...(solutionsMenu?.groups || [])];

  // if (options.includeFunctioning) {
  //   mergedGroups.push({
  //     title: t('nav.functioning'),
  //     links: flattenMenuLinks(options.functioningMenu)
  //   });
  // }

  if (options.includePharma) {
    mergedGroups.push({
      title: t('nav.pharmaResearch'),
      links: [
        buildSectionLink(
          t('nav.pharmaResearch'),
          'case-studies',
          t('megaMenu.grouped.sectionEntry')
        ),
      ],
    });
  }

  if (options.includeEditors) {
    mergedGroups.push({
      title: t('nav.editorsApi'),
      links: [
        buildSectionLink(
          t('nav.editorsApi'),
          'editors-api',
          t('megaMenu.grouped.sectionEntry')
        ),
      ],
    });
  }

  return {
    ...solutionsMenu,
    groups: mergedGroups,
  };
}

function mergeEnterpriseMenu(t, enterpriseMenu, options) {
  const mergedGroups = [...(enterpriseMenu?.groups || [])];

  if (options.includeSecurity) {
    mergedGroups.push({
      title: t('nav.security'),
      links: [
        buildSectionLink(
          t('nav.security'),
          'privacy',
          t('megaMenu.grouped.sectionEntry')
        ),
      ],
    });
  }

  return {
    ...enterpriseMenu,
    groups: mergedGroups,
  };
}

function buildSingleMegaMenu(t, solutionsMenu, enterpriseMenu) {
  const groups = [
    {
      title: t('nav.quickAccess'),
      links: [
        buildSectionLink(t('nav.home'), 'home', t('megaMenu.grouped.goHome')),
        buildSectionLink(
          t('nav.bookDemo'),
          'contact',
          t('megaMenu.grouped.sectionEntry')
        ),
      ],
    },
    ...(solutionsMenu?.groups || []).map((group) => ({
      ...group,
      title: `${t('nav.solutions')} · ${group.title}`,
    })),
    ...(enterpriseMenu?.groups || []).map((group) => ({
      ...group,
      title: `${t('nav.enterprise')} · ${group.title}`,
    })),
  ];

  return {
    eyebrow: t('nav.mainMenu'),
    title: t('megaMenu.main.title'),
    body: t('megaMenu.main.body'),
    groups,
    cta: { label: t('nav.bookDemo'), page: 'contact' },
  };
}

export function getNavItems(t, { density = 'full' } = {}) {
  const solutionsMenu = t('megaMenu.solutions', { returnObjects: true });
  const functioningMenu = t('megaMenu.functioning', { returnObjects: true });
  const enterpriseMenu = t('megaMenu.enterprise', { returnObjects: true });

  if (density === 'single') {
    const singleSolutions = mergeSolutionsMenu(t, solutionsMenu, {
      includeFunctioning: true,
      includePharma: true,
      includeEditors: true,
      functioningMenu,
    });

    const singleEnterprise = mergeEnterpriseMenu(t, enterpriseMenu, {
      includeSecurity: true,
    });

    return [
      {
        id: 'mainMenu',
        label: t('nav.mainMenu'),
        megaMenu: buildSingleMegaMenu(t, singleSolutions, singleEnterprise),
      },
    ];
  }

  if (density === 'compact3') {
    return [
      { id: 'home', label: t('nav.home'), page: 'home' },
      {
        id: 'solutions',
        label: t('nav.solutions'),
        megaMenu: mergeSolutionsMenu(t, solutionsMenu, {
          includeFunctioning: true,
          includePharma: true,
          includeEditors: true,
          functioningMenu,
        }),
      },
      {
        id: 'enterprise',
        label: t('nav.enterprise'),
        megaMenu: mergeEnterpriseMenu(t, enterpriseMenu, {
          includeSecurity: true,
        }),
      },
    ];
  }

  if (density === 'compact2') {
    return [
      { id: 'home', label: t('nav.home'), page: 'home' },
      {
        id: 'solutions',
        label: t('nav.solutions'),
        megaMenu: mergeSolutionsMenu(t, solutionsMenu, {
          includeFunctioning: true,
          includePharma: true,
          includeEditors: false,
          functioningMenu,
        }),
      },
      { id: 'editorsApi', label: t('nav.editorsApi'), page: 'editors-api' },
      {
        id: 'enterprise',
        label: t('nav.enterprise'),
        megaMenu: mergeEnterpriseMenu(t, enterpriseMenu, {
          includeSecurity: true,
        }),
      },
    ];
  }

  if (density === 'compact1') {
    return [
      { id: 'home', label: t('nav.home'), page: 'home' },
      {
        id: 'solutions',
        label: t('nav.solutions'),
        megaMenu: mergeSolutionsMenu(t, solutionsMenu, {
          includeFunctioning: true,
          includePharma: false,
          includeEditors: false,
          functioningMenu,
        }),
      },
      { id: 'editorsApi', label: t('nav.editorsApi'), page: 'editors-api' },
      {
        id: 'pharmaResearch',
        label: t('nav.pharmaResearch'),
        page: 'case-studies',
      },
      {
        id: 'enterprise',
        label: t('nav.enterprise'),
        megaMenu: mergeEnterpriseMenu(t, enterpriseMenu, {
          includeSecurity: true,
        }),
      },
    ];
  }

  return [
    { id: 'home', label: t('nav.home'), page: 'home' },
    {
      id: 'solutions',
      label: t('nav.solutions'),
      megaMenu: solutionsMenu,
    },
    { id: 'editorsApi', label: t('nav.editorsApi'), page: 'editors-api' },
    {
      id: 'pharmaResearch',
      label: t('nav.pharmaResearch'),
      page: 'case-studies',
    },
    {
      id: 'functioning',
      label: t('nav.functioning'),
      megaMenu: functioningMenu,
    },
    {
      id: 'enterprise',
      label: t('nav.enterprise'),
      megaMenu: enterpriseMenu,
    },
    { id: 'security', label: t('nav.security'), page: 'privacy' },
  ];
}
