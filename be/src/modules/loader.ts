import alias from 'module-alias';

export const setAlias = () => {
  const dir =
    process.cwd() + `${process.env.NODE_ENV === 'prod' ? '/build' : '/src'}`;

  alias.addAliases({
    '@lib': dir + '/lib',
    '@models': dir + '/models',
    '@modules': dir + '/modules',
  });
};
