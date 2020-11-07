import m from 'moment-with-locales-es6';

const moment = (ISOTime: string) => {

  let time = m.locale('pt')
  let now = m();

  if(m(ISOTime).format('DD MMM yyyy') === now.format('DD MMM yyyy')) {
    time = m(ISOTime).fromNow()
    return time.toString();

  } else {
    time = m(ISOTime).format(`DD MMM H:m`);
    return time.toString();
  }
}

export default moment;

