import director from './assets/img/team/director.jpg';
import emtyAvatar from './assets/img/team/emprty-avatar.svg';
import fedin from './assets/img/team/fedin.jpg';
import borisov from './assets/img/team/borisov.jpg';
import misha from './assets/img/team/misha.jpg';
import engine from './assets/img/catalog-images/engine.png';
import box from './assets/img/catalog-images/box.png';
import chassis from './assets/img/catalog-images/chassis.png';
import coverage from './assets/img/catalog-images/coverage.png';
import auto from './assets/img/catalog-images/auto.png';
import shin from './assets/img/catalog-images/shin.png';
import wheel from './assets/img/catalog-images/wheel.png';
import photo1 from './assets/img/gallery/photo1.jpg';
import photo2 from './assets/img/gallery/photo2.jpg';
import photo3 from './assets/img/gallery/photo3.jpg';
import photo4 from './assets/img/gallery/photo4.jpg';
import photo5 from './assets/img/gallery/photo5.jpg';
import photo6 from './assets/img/gallery/photo6.jpg';
import photo7 from './assets/img/gallery/photo7.jpg';
import photo8 from './assets/img/gallery/photo8.jpg';
import photo9 from './assets/img/gallery/photo9.jpg';
import photo1Mobile from './assets/img/gallery/mobile/photo1-mobile.jpg';
import photo2Mobile from './assets/img/gallery/mobile/photo2-mobile.jpg';
import photo3Mobile from './assets/img/gallery/mobile/photo3-mobile.jpg';
import photo4Mobile from './assets/img/gallery/mobile/photo4-mobile.jpg';
import photo5Mobile from './assets/img/gallery/mobile/photo5-mobile.jpg';
import photo6Mobile from './assets/img/gallery/mobile/photo6-mobile.jpg';
import photo7Mobile from './assets/img/gallery/mobile/photo7-mobile.jpg';
import photo8Mobile from './assets/img/gallery/mobile/photo8-mobile.jpg';
import photo9Mobile from './assets/img/gallery/mobile/photo9-mobile.jpg';

export const advantagesList = [
  'Качественное исполнение работ',
  'Многолетний опыт работы и команда настоящих профессионалов',
  'Все виды технических работ в одном месте',
  'Ремонт автобусов и грузовых автомобилей',
  'Имеется собственный эвакуатор, который доставит ваш авто прямо к нам',
  'Имеется технический контроль'
];

export const teamList = [
  {
    id: 0,
    name: 'Иванов Александр Николаевич',
    position: 'Директор',
    avatar: director,
    telephone: '+79308150210',
    email: 'zst_dir@mail.ru'
  },
  {
    id: 1,
    name: 'Куделин Юрий Викторович',
    position: 'Технический директор',
    avatar: emtyAvatar,
    telephone: '+79081538554'
  },
  {
    id: 2,
    name: 'Федин Вадим Александрович',
    position: 'Мастер СТО',
    avatar: fedin,
    telephone: '+79047879000'
  },
  {
    id: 3,
    name: 'Гурылев Александр Андреевич',
    position: 'Мастер СТО',
    avatar: emtyAvatar
  },
  {
    id: 4,
    name: 'Борисов Борис Борисович',
    position: 'Начальник участка мехобработки',
    avatar: borisov
  },
  {
    id: 5,
    name: 'Иванов Михаил Александрович',
    position: 'Мастер участка покраски',
    avatar: misha,
    telephone: '+79867425515'
  }
];

export const catalogList = [
  {
    id: 0,
    name: 'Ремонт двигателя',
    description:
      'Ремонт двигателей отечественного и импортного производства. Диагностика, демонтаж и чистка узлов ДВС, мойка двигателя, измерение геометрии деталей, дефектовка коленчатого вала, устранение сколов, задиров, замена втулок, клапанов и т.д.',
    image: engine
  },
  {
    id: 1,
    name: 'Ремонт МКПП',
    description:
      'Снятие и разборка коробки передач с автомобиля, контроль и замена изношенных деталей, испытание коробки передач после ремонта, установка коробки обратно в автомобиль, замена масла.',
    image: box
  },
  {
    id: 2,
    name: 'Ремонт ходовой части',
    description:
      'Замена деталей подвески, замена стойки и втулки стабилизатора, замена верхних и нижних шаровых пор, регулировка подшипников, замена амортизаторов, регулировка ручного тормоза.',
    image: chassis
  },
  {
    id: 3,
    name: 'Развал-схождение',
    description:
      'Регулировка углов положения колес (развал-схождение) согласно конструкции подвески.',
    image: wheel
  },
  {
    id: 4,
    name: 'Обработка авто защитным составом',
    description:
      'Специальное покрытие для долгосрочной защиты кузова автомобиля, яхты, лодки, которое защищает поверхность от механических повреждений, внешних воздествий и коррозии. Кузов вашего транспорта может быть любого цвета. Цвет защитного покрытия подбирается по запросу клиента.',
    image: coverage
  },
  {
    id: 5,
    name: 'Шиномонтаж',
    description: 'Шиномонтаж легковых и грузовых автомобилей, балансировка колёс',
    image: shin
  },
  {
    id: 6,
    name: 'Технический осмотр',
    description:
      'Проведение технического осмотра транспортного средства в соответствии с федеральным законом 170-ФЗ "О техническом осмотре транспортных средств".',
    image: auto
  }
];

export const contactsList = [
  {
    name: 'Иванов Александр Николаевич',
    position: 'Директор',
    telephone: '+79308150210',
    email: 'zst_dir@mail.ru'
  },
  {
    name: 'Куделин Юрий Викторович',
    position: 'Технический директор',
    telephone: '+79081538554'
  },
  {
    name: 'Федин Вадим Александрович',
    position: 'Мастер СТО',
    telephone: '+79047879000'
  },
  {
    name: 'Иванов Михаил Александрович',
    position: 'Мастер участка покраски',
    telephone: '+79867425515'
  }
];

export const galleryList = [
  {
    id: 0,
    url: photo1,
    alt: 'Развал-схождение',
    url_mobile: photo1Mobile
  },
  {
    id: 1,
    url: photo2,
    alt: 'Автоподъемники',
    url_mobile: photo2Mobile
  },
  {
    id: 2,
    url: photo3,
    alt: 'Land Rover, обработка защитным покрытием line-x',
    url_mobile: photo3Mobile
  },
  {
    id: 3,
    url: photo4,
    alt: 'Ремонт автобуса',
    url_mobile: photo4Mobile
  },
  {
    id: 5,
    url: photo5,
    alt: 'Toyota Mega Cruiser, обработана защитным составом line-x',
    url_mobile: photo5Mobile
  },
  {
    id: 6,
    url: photo6,
    alt: 'Автомобильный эвакуатор',
    url_mobile: photo6Mobile
  },
  {
    id: 7,
    url: photo7,
    alt: 'Процесс шлифовки перед нанесением защитного покрытия Line-X',
    url_mobile: photo7Mobile
  },
  {
    id: 8,
    url: photo8,
    alt: 'Обработка кузова Toyota Tundra защитным покрытием Line-X',
    url_mobile: photo8Mobile
  },
  {
    id: 9,
    url: photo9,
    alt: 'Фото ремонтного цеха',
    url_mobile: photo9Mobile
  }
];
