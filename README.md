# c7n-test-15756
###9、可以通过层级，来源，名称，编码等对表格进行查询
###10、能够在头部切换层级
url: `/iam/v1/roles/search?page=1&size=10&sort=id,desc`
method: 'post'
request payload: {
  code: '',
  level: '',
  params: [],
  name: '',
  level: '',
  enabled: 'true',
  buildIn: 'true,
}