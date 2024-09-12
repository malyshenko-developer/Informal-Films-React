const TEXTS = {
    PROJECT_NAME: 'Informal Films',
    ABOUT_FILM: 'О фильме:',
    TITLES_OF_DETAILS: {
        COUNTRY: 'Страна',
        YEAR_OF_RELEAS: 'Год релиза',
        GENRE: 'Жанр',
        DIRECTOR: 'Режиссер',
        SCREENPLAY: 'Сценарий',
        PRODUCER: 'Продюсер',
        BUDGET: 'Бюджет',
        TIME: 'Время'
    },
    ARTIST: 'В главных ролях:',
    DESCRIPTION: 'Описание:',
    RETING: 'Рейтинг',
    FILTERS: 'Фильтры',
    LOGIN: 'Авторизация',
    LOGIN_REQUIREMENT_TOKEN: 'Введите токен для авторизации',
    LOGIN_BUTTONS: {
        PREVIOUS: 'Назад',
        LOGIN: 'Войти'
    },
    REGISTRATION: 'Регистрация',
    REGISTRATION_REQUIREMENT_EMAIL: 'Введите почту для получения токена',
    REGISTRATION_BUTTONS: {
        SKIP: 'У меня есть токен',
        CANCELED: 'Отмена',
        SEND: 'Отправить'
    }
}

const BASE_API_URL = 'https://api.themoviedb.org/3';

const CAST_JOBS = {
    DIRECTOR: 'Director',
    WRITER: 'Writer',
    PRODUCER: 'Producer'
}

const COOKIES_NAMES = {
    TOKEN: 'token',
    ACCOUNT_ID: 'accountId'
}

export { TEXTS, BASE_API_URL, CAST_JOBS, COOKIES_NAMES }