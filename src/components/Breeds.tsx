import styles from './Breeds.module.css';

const breeds = [
  {
    name: 'Призрачный Рысак',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=600&q=80',
    origin: 'Туманные болота',
    description: 'Говорят, его копыта не касаются земли. Он появляется только в полнолуние, чтобы предупредить о беде.',
    traits: ['Неосязаемость', 'Лунный свет', 'Предзнаменование'],
  },
  {
    name: 'Чёрная Бестия',
    image: 'https://images.unsplash.com/photo-1598974357801-cbca47153390?auto=format&fit=crop&w=600&q=80',
    origin: 'Проклятые пустоши',
    description: 'Угольно-чёрная шерсть поглощает свет, а глаза горят адским огнём. Символ древнего Самайна.',
    traits: ['Сила тьмы', 'Скорость', 'Устрашение'],
  },
  {
    name: 'Тыквенный Пегас',
    image: 'https://images.unsplash.com/photo-1551884831-bbf3ddd72a09?auto=format&fit=crop&w=600&q=80',
    origin: 'Тыквенные поля',
    description: 'Его грива переливается оранжевым золотом. Он тянет карету для тех, кто заблудился в ночи.',
    traits: ['Магия', 'Тепло', 'Спасение'],
  },
  {
    name: 'Лесной Дух',
    image: 'https://images.unsplash.com/photo-1534068590799-09895a701e3e?auto=format&fit=crop&w=600&q=80',
    origin: 'Запретная чаща',
    description: 'Сливается с туманом и мхом. Только чистые сердцем могут увидеть его зелёное свечение в чаще.',
    traits: ['Маскировка', 'Природа', 'Мудрость'],
  },
  {
    name: 'Кладбищенский Страж',
    image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=600&q=80',
    origin: 'Старый погост',
    description: 'Массивный и спокойный. Он охраняет покой мёртвых и не подпустит нечисть к древним могилам.',
    traits: ['Стойкость', 'Покой', 'Защита'],
  },
  {
    name: 'Ночной Кошмар',
    image: 'https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=600&q=80',
    origin: 'Бездна',
    description: 'Дикая, неукротимая сила. Его ржание звучит как гром, а удар копыта раскалывает камень.',
    traits: ['Хаос', 'Мощь', 'Свобода'],
  },
];

export default function Breeds() {
  return (
    <section className={styles.section} id="breeds">
      <h2 className={styles.sectionTitle}>Легенды Хэллоуина</h2>
      <p className={styles.sectionSubtitle}>
        Наведите курсор на карточку, чтобы раскрыть тайну...
      </p>

      <div className={styles.grid}>
        {breeds.map((breed, index) => (
          <div className={styles.card} key={index}>
            {/* Декоративные уголки */}
            <span className={styles.cornerTopRight}>❧</span>
            <span className={styles.cornerBottomLeft}>❧</span>

            <div className={styles.cardFront}>
              <div className={styles.imageWrapper}>
                <img src={breed.image} alt={breed.name} className={styles.breedImage} loading="lazy" />
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.cardText}>
                <h3 className={styles.breedName}>{breed.name}</h3>
                <p className={styles.origin}>{breed.origin}</p>
              </div>
            </div>

            <div className={styles.cardOverlay}>
              <h3 className={styles.overlayTitle}>{breed.name}</h3>
              <p className={styles.overlayDesc}>{breed.description}</p>
              <div className={styles.traits}>
                {breed.traits.map((trait, i) => (
                  <span className={styles.trait} key={i}>
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}