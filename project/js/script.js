/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: ["Логан-TECT", "Лига справедливости", "Ла-ла лэнд", "Одержимость", "Скотт Пилигрим против..."]
    };

    const advertisingBlock = document.querySelector('.promo__adv');
    const advertisingList = advertisingBlock.querySelectorAll('img');
    const genre = document.querySelector('.promo__genre');
    const poster = document.querySelector('.promo__bg');
    const list = document.querySelector('.promo__interactive-list');

    const advertisingRemoval = (advList) => {
        advList.forEach(item => item.remove())
    };
    const somePageDesignChanges = () => {
        genre.textContent = 'Драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
    const sortingArr = (arr) => {
        arr.sort();
    };
    const movieListCreator = (parentElement, filmDataBase) => {
        parentElement.innerHTML = '';
        sortingArr(movieDB.movies);
        filmDataBase.forEach((item, i) => {
            parentElement.innerHTML += `<li class="promo__interactive-item">${++i}. ${item}
    <div class="delete"></div></li>`
        })
    };

    advertisingRemoval(advertisingList);
    somePageDesignChanges();
    movieListCreator(list, movieDB.movies);

    //----------------------------

    const formClass = document.querySelector('.add');
    const submitBtn = formClass.querySelector('button');
    const inputTag = formClass.querySelector('.adding__input');
    const deleteElements = list.querySelectorAll('.delete');


    const addFilm = () => {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // let filmINput = inputTag.value;
            if (inputTag.value) {
                if (inputTag.value.length > 21) {
                    inputTag.value = `${inputTag.value.slice(0, 22)}...`;
                }
                movieDB.movies.push(inputTag.value);
                sortingArr(movieDB.movies);
                movieListCreator(list, movieDB.movies)
                inputTag.value = '';
            }
        })
    };

    const deleteElementBtn = (btns) => {
        btns.forEach(delBox => {
            delBox.addEventListener('click', () => {
                delBox.parentElement.remove();
            })
        })
    };

    addFilm();
    deleteElementBtn(deleteElements);
})
