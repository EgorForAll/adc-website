import director from "./assets/img/team/director.jpg";
import borisov from "./assets/img/team/borisov.jpg";
import misha from "./assets/img/team/misha.jpg";
import engine from "./assets/img/catalog-images/engine.png";
import box from "./assets/img/catalog-images/box.png";
import chassis from "./assets/img/catalog-images/chassis.png";
import wheel from "./assets/img/catalog-images/wheel.png";
import coverage from "./assets/img/catalog-images/coverage.png";
import shin from "./assets/img/catalog-images/shin.png";
import auto from "./assets/img/catalog-images/auto.png";

export const advantagesList = [
    'Качественное исполнение работ',
    'Многолетний опыт работы и команда настоящих профессионалов',
    'Все виды технических работ в одном месте',
    'Ремонт автобусов и грузовых автомобилей',
    'Имеется собственный эвакутор, который доставит ваш авто прямо к нам',
    'Имеется технический контроль'
]

export const teamList = [
    {
        name: 'Иванов Александр Николаевич',
        position: 'Директор',
        avatar: director,
        telephone: '+79308150210',
        email: 'zst_dir@mail.ru'
    },
    {
        name: 'Куделин Юрий Викторович',
        position: 'Технический директор',
        avatar: director,
        telephone: '+79081538554'
    },
    {
        name: 'Федин Вадим Александрович',
        position: 'Мастер СТО',
        avatar: director,
        telephone: '+79047879000'
    },
    {
        name: 'Гурылев Александр Андреевич',
        position: 'Директор',
        avatar: director
    },
    {
        name: 'Борисов Борис Борисович',
        position: 'Мастер',
        avatar: borisov
    },
    {
        name: 'Иванов Михаил Александрович',
        position: 'Мастер участка покраски',
        avatar: misha,
        telephone: '+79867425515'
    }
];

export const catalogList = [
  {
    name: 'Ремонт двигателя',
    description: 'Ремонт двигателей отечественнного и импортного производства. Диганостика, демонтаж и чистка узлов ДВС, мойка двигателя, измерение геометрии деталей, дефектовка коленчатого вала, устранение сколов, задиров, замена втулок, клапонов и т.д.',
    image: engine
  },
  {
    name: 'Ремонт МКПП',
    description: 'Снятие и разборка коробки передач с автомобиля, контроль и замена изношенных деталей, испытание коробки передач после ремонта, установка коробки обратно в автомобиль, замена масла.',
    image: box
  },
  {
    name: 'Ремонт ходовой части',
    description: 'Замена деталей подвески, замена стойки и втулки стабилизатора, замена верхних и нижних шаровых пор, регулировка подшипников, замена амортизаторов, регулировка ручного тормоза.',
    image: chassis
  },
  {
    name: 'Развал-схождение',
    description: 'Регулировка углов положения колес (развал-схождение) согласно конструкции подвески.',
    image: wheel
  },
  {
    name: 'Обработка авто защитным составом',
    description: 'Специальное покрытие для долгосрочной защиты кузова автомобиля, яхты, лодки, которое защищает поверхость от механических повреждений, внешних воздейтсвий и коррозии. Кузов вашего транспорта может быть любого цвета. Цвет защитного покрытия подбирается по запросу клиента.',
    image: coverage
  },
  {
    name: 'Шиномонтаж',
    description: 'Шиномонтаж легковых и грузовых автомобилей, балансировка колёс',
    image: shin
  },
  {
    name: 'Технический осмотр',
    description: 'Проведение технического осмотра транспортного средства в соответствии с федеральным законом 170-ФЗ "О техничском осмотре трансопртных средств".',
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
]
