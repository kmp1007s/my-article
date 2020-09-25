import alias from 'module-alias';

export default () => {
  const base =
    process.cwd() + `${process.env.NODE_ENV === 'prod' ? '/build' : '/src'}`;

  alias.addAliases({
    '@module': base + '/module',
    '@model': base + '/model',
  });
};
