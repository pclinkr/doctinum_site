export function getNavItems(t) {
  return [
    { id: 'home', label: t('nav.home'), page: 'home' },
    {
      id: 'solutions',
      label: t('nav.solutions'),
      megaMenu: t('megaMenu.solutions', { returnObjects: true })
    },
    { id: 'about', label: t('nav.about'), page: 'about' },
    {
      id: 'resources',
      label: t('nav.resources'),
      megaMenu: t('megaMenu.resources', { returnObjects: true })
    }
  ];
}
