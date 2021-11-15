import { makeObservable, computed, observable, action } from 'mobx';

class Store{
    @observable gallery = [
        {id: 0, title: "АВІАСВІТ-ХХІ", imageUrl: "https://www.iec-expo.com.ua/cache/images/fotovistavki/oryzie/2021/otchet/photos/otchetoruj012021_800x800-equal.jpg"},
        {id: 1, title: "АВІАСВІТ-ХХІ", imageUrl: "https://www.iec-expo.com.ua/cache/images/fotovistavki/oryzie/2021/otchet/photos/otchetoruj012021_800x800-equal.jpg"},
        {id: 2, title: "АВІАСВІТ-ХХІ", imageUrl: "https://www.iec-expo.com.ua/cache/images/fotovistavki/oryzie/2021/otchet/photos/otchetoruj012021_800x800-equal.jpg"},
        {id: 3, title: "АВІАСВІТ-ХХІ", imageUrl: "https://www.iec-expo.com.ua/cache/images/fotovistavki/oryzie/2021/otchet/photos/otchetoruj012021_800x800-equal.jpg"},
        {id: 4, title: "АВІАСВІТ-ХХІ", imageUrl: "https://www.iec-expo.com.ua/cache/images/fotovistavki/oryzie/2021/otchet/photos/otchetoruj012021_800x800-equal.jpg"},
        {id: 5, title: "АВІАСВІТ-ХХІ", imageUrl: "https://www.iec-expo.com.ua/cache/images/fotovistavki/oryzie/2021/otchet/photos/otchetoruj012021_800x800-equal.jpg"},
        {id: 6, title: "АВІАСВІТ-ХХІ", imageUrl: "https://www.iec-expo.com.ua/cache/images/fotovistavki/oryzie/2021/otchet/photos/otchetoruj012021_800x800-equal.jpg"},
        {id: 7, title: "АВІАСВІТ-ХХІ", imageUrl: "https://www.iec-expo.com.ua/cache/images/fotovistavki/oryzie/2021/otchet/photos/otchetoruj012021_800x800-equal.jpg"},
        {id: 8, title: "АВІАСВІТ-ХХІ", imageUrl: "https://www.iec-expo.com.ua/cache/images/fotovistavki/oryzie/2021/otchet/photos/otchetoruj012021_800x800-equal.jpg"}
    ];
    @observable news = [
        {id: 0,
            title: "ЗВІТ ЗА РЕЗУЛЬТАТАМИ ПРОВЕДЕННЯ\n" +
                "XІІ МІЖНАРОДНОГО АВІАКОСМІЧНОГО САЛОНУ\n" +
                "АВІАСВІТ-ХХІ",
            description: "З 15 по 18 червня 2021 р. на території Міжнародного виставкового центру відбувся єдиний вітчизняний виставковий захід у сфері авіапромисловості і космічних технологій – ХІІ Міжнародний авіакосмічний салон «АВІАСВІТ - ХХІ».\n" +
                "\n" +
                "Вже вчетверте Салон проведений в єдиному форматі з Міжнародною спеціалізованою виставкою «Зброя та безпека». Цього разу презентація досягнень вітчизняної авіакосмічної та оборонної галузі була присвячена 30‑річчю незалежності України."},
        {id: 1, title: "XVII МІЖНАРОДНОЇ СПЕЦІАЛІЗОВАНОЇ ВИСТАВКИ\n" +
                "ЗБРОЯ ТА БЕЗПЕКА – 2021", description: "З 15 по 18 червня 2021 р. на території Міжнародного виставкового центру відбулась XVІІ Міжнародна спеціалізована виставка «Зброя та безпека ‑ 2021».\n" +
                "\n" +
                "Незважаючи на складнощі, пов'язані із пандемією COVID‑19, цьогорічна виставка підтвердила статус вагомого заходу відповідного спрямування у Східній Європі за кількістю учасників, представлених зразків техніки та новинок, а також за представницьким рівнем та популярністю серед громадськості. Результати проведення продемонстрували, що тривале очікування виставки дало можливість добре підготуватися до неї не тільки постійним учасникам, а й дебютантам, які у ці непрості часи зробили великі ставки саме на участь у виставці."},
        {id: 2, title: "ПРОВЕДЕННЯ\n" +
                "XІX МІЖНАРОДНОЇ СПЕЦІАЛІЗОВАНОЇ ВИСТАВКИ\n" +
                "ПОЖЕЖНО‑РЯТУВАЛЬНОГО ОБЛАДНАННЯ\n" +
                "ТЕХНОЛОГІЇ ЗАХИСТУ/ПОЖТЕХ‑2021", description: "З 15 по 18 червня 2021 року на території Міжнародного виставкового центру відбулася провідна подія для України у сфері пожежно‑рятувального обладнання - XIX Міжнародна спеціалізована виставка «Технології захисту/ПожТех‑2021».\n" +
                "\n" +
                "Захід вже традиційно було проведено в єдиному форматі з ІІ Міжнародною спеціалізованою виставкою систем безпеки та охорони «Expert Security‑2021», XVІI Міжнародною спеціалізованою виставкою у сфері ОПК «Зброя та безпека‑2021» та ХII Міжнародним авіакосмічним салоном «Авіасвіт‑ХХІ»."},
    ];
    @computed get getAllImages(){
        return this.gallery;
    }

    @computed get getAllNews(){
        return this.news;
    }

    // @action.bound
    // doneTask(id){
    //     const tasks = this.tasks;
    //     const index = tasks.map(task => task.id).indexOf(id);
    //     tasks[index].done = true;
    //     this.setTasks(tasks)
    // }

    constructor(){
        makeObservable(this);
    }
}

export default Store;